<template>
    <section class="testemonials-component" id="testemonials">
        <div class="content">
            <h2>
                Testemonials
            </h2>

            <p>
                What people who worked with me say about me
            </p>

            <div class="list">
                <div class="testemonial">
                    <img src="../assets/images/testemonials/rafa.jpeg" alt="rafael">

                    <p>
                        "Incredibly dedicated and punctual professional, with a strong passion for quality and nearing perfection. During the whole time we worked together, I saw no obstacle he couldn't overcome in a timely manner."
                    </p>

                    <span>Senior Back-end developer</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {}
</script>

<style lang="scss">
.testemonials-component {
    padding: 64px 16px;
    background: $color-white-high;

    @include media(md) {
        padding: 96px 32px;
    }

    & > .content {
        max-width: 1200px;
        margin: 0 auto;

        & > h2 {
            font-size: 32px;
            line-height: 32px;
            font-weight: 800;
            font-family: 'Eurostile';
            color: $color-dark-high;
            text-align: center;
            margin: 0 0 8px;
        }

        & > p {
            font-family: 'Europa';
            font-size: 18px;
            line-height: 28px;
            color: $color-dark-medium;
            text-align: center;
            margin: 0 0 64px;
        }

        & > .list {
            display: flex;
            justify-content: center;
            & > .testemonial {
                max-width: 560px;
                display: flex;
                flex-direction: column;
                align-items: center;

                & > img {
                    width: 80px;
                    border-radius: 100%;
                    margin-bottom: 24px;
                }

                & > p {
                    font-family: 'Europa';
                    font-style: italic;
                    font-size: 16px;
                    line-height: 24px;
                    color: $color-dark-low;
                    text-align: center;
                }

                & > span {
                    font-family: 'Source Code Pro';
                    color: $color-dark-low;
                    text-transform: uppercase;
                    font-weight: bold;
                    font-size: 14px;
                }
            }
        }
    }
}
</style>