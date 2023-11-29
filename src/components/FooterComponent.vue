<template>
    <footer class="footer">
        <div class="content">
            <h3>
                Evolução constante, adaptação &<br /> resiliência.
            </h3>

            <div class="medias">
                <a href="https://www.linkedin.com/in/alisson-rayan-112838131/" target="_blank">
                    <LinkedinIcon />
                </a>

                <a href="https://www.instagram.com/_silentstar/?hl=en" target="_blank">
                    <InstagramIcon />
                </a>

                <a href="https://github.com/alissonrayandev" target="_blank">
                    <GithubIcon />
                </a>

                <a href="https://api.whatsapp.com/send?phone=5511976721914&text=Hey%2C%20can%20we%20talk%20about..." target="_blank">
                    <WhatsappIcon />
                </a>
            </div>
            <p>
                Milena Saldini © copyright 2023
            </p>
        </div>

    </footer>
</template>

<script>
    import LinkedinIcon from '../assets/images/icons/linkedin.svg?inline'
    import InstagramIcon from '../assets/images/icons/instagram.svg?inline'
    import GithubIcon from '../assets/images/icons/github.svg?inline'
    import WhatsappIcon from '../assets/images/icons/whatsapp.svg?inline'

    export default {
        components: {
            LinkedinIcon,
            InstagramIcon,
            GithubIcon,
            WhatsappIcon
        }
    }
</script>

<style lang="scss">
.footer {
    padding: 64px 16px 16px;
    background: $color-primary;

    @include media(md) {
        padding: 64px 32px 16px;
    }

    & > .content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        & > h3 {
            font-size: 24px;
            color: $color-dark-medium;
            text-align: center;
            font-family: 'Eurostile';
            margin-bottom: 56px;
        }

        & > .medias {
            display: flex;
            margin-bottom: 64px;

            & > a {
                height: 56px;
                width: 56px;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all 0.5s;
                &:not(:last-child) {
                    margin-right: 16px;
                }

                &:hover {
                    scale: 1.2;
                }

                & > svg {
                    width: 32px;
                    height: 32px;
                    fill: $color-dark-medium;
                }
            }
        }

        & > p {
            font-size: 16px;
            color: $color-dark-medium;
            text-align: center;
            font-family: 'europa';
        }
    }
}
</style>