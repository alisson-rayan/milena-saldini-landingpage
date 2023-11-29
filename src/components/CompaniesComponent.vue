<template>
    <section class="companies-section" id="companies">
        <div class="content">
            <h2>
                Companies I've had the pleasure to work with
            </h2>

            <div class="list">
                <img src="../assets/images/companies/quicktech.png" alt="quicktech">
                <img src="../assets/images/companies/convenia.png" alt="convenia">
                <img src="../assets/images/companies/jb.png" alt="jb">
            </div>

            <a class="contact" href="#contact">
                Contact me
            </a>
        </div>
    </section>
</template>

<script>
    export default {}
</script>

<style lang="scss">
.companies-section {
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

        & > .list {
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: center;
            margin-bottom: 96px;
            
            @include media(md) {
                justify-content: space-around;
                flex-direction: row;
            }

            & > img {
                width: auto;
                height: 60px;
                &:not(:last-child) {
                        margin-bottom: 32px;
                    }

                @include media(md) {
                    margin-bottom: 0;
                }
            }
        }

        & > .contact {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 40px;
            max-width: 320px;
            width: 100%;
            border-radius: 100px;
            color: $color-primary;
            border: 1px solid $color-primary;
            background: transparent;
            font-size: 16px;
            font-family: 'Inter';
            transition: all 0.5s;

            &:hover {
                background: $color-primary;
                color: $color-white-high;
                cursor: pointer;
            }
        }
    }
}
</style>