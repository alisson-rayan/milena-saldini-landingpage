<template>
  <section class="jobs-section" id="jobs">
      <div class="content">
          <h2>
              Portifólio
          </h2>

          <div class="jobs">
            <div v-for="i in 6" :key="i" class="job">
                <img :src="require(`../assets/images/jobs/image_0${i}.jpg`)" alt="coe">
                <div class="mask" />
            </div>
          </div>
      </div>
  </section>
</template>

<script>
  export default {}
</script>

<style lang="scss">
.jobs-section {
  padding: 64px 16px;
  background: $color-background-2;

  @include media(md) {
      padding: 96px 32px;
  }

  & > .content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      & > h2 {
          font-size: 24px;
          line-height: 24px;
          font-weight: 800;
          font-family: 'Eurostile';
          color: $color-dark-high;
          text-align: center;
          margin: 0 0 32px;

          @include media(md) {
              font-size: 32px;
              line-height: 32px;
              margin: 0 0 64px;
          }
      }

      & > .jobs {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        & > .job {
            margin-bottom: 16px;
            width: 100%;
            @include media(md) {
                width: calc(33.33% - 16px);
            }

            & > img {
                opacity: 1;
                display: block;
                width: 100%;
                height: auto;
                transition: .5s ease;
                backface-visibility: hidden;

                &:hover {
                    opacity: 0.5;
                }
            }

            & > .mask {
                transition: .5s ease;
                opacity: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                background: red;
                transform: translate(-50%, -50%);
                -ms-transform: translate(-50%, -50%);
                text-align: center;

                &:hover {
                    opacity: 1;
                }
            }
        }
      }
  }
}
</style>