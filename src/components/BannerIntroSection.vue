<template>
    <section class="banner-intro-section">
        <vue-particles
        class="background-particles"
        color="#4A575D"
        :particleOpacity="0.2"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#4A575D"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.1"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="false"
        :clickEffect="false"
      />
    
    <div class="content">
        <h1>
            Olá, eu sou
            <span class="typed-text">{{ typeValue }}</span>
            <span class="blinking-cursor">|</span>
            <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
        </h1>

        <p>
          Designer Gráfica
        </p>
    </div>
    </section>
</template>

<script>
export default {
    data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: ["Milena Saldini", "Designer"],
      typingSpeed: 40,
      erasingSpeed: 40,
      newTextDelay: 1000,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods: {
    typeText() {
      if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 500);
      }
    },
  },
}
</script>

<style lang="scss">
@keyframes blink-caret {
  from, to { opacity: 0 }
  50% { opacity: 1 }
}

.banner-intro-section {
    position: relative;
    min-height: 100vh;
    background: $color-primary;
    display: flex;
    align-items: center;

    & > .background-particles {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    & > .content {
        width: 100%;
        height: 100%;
        padding: 64px 32px;

        & > h1 {
            font-family: 'Source Code Pro';
            color: $color-dark-medium;
            font-size: 32px;
            margin-bottom: 16px;
            width: fit-content;

            @include media(md) {
                font-size: 48px;
            }
            
            & > span {
                color: $color-dark-low;
            }
            
            & > .blink {
                animation: blink-caret .5s step-end infinite;
                padding-right: 4px;
            }

            // heere

            .blinking-cursor {
                font-size: 48px;
                color: $color-secondary;
                animation: 1s blink step-end infinite;
            }
        }

        & > p {
            font-family: 'Europa';
            font-weight: 300;
            color: $color-dark-medium;
            font-size: 16px;
            animation: animate-slide-appear-bottom 2s;

            @include media(md) {
                font-size: 20px;
            }
        }
    }
}
</style>