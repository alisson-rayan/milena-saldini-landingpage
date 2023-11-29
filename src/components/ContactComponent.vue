<template>
    <section class="contact-component" id="contact">
        <div class="content">
            <h2>
                Contact me
            </h2>
            <form ref="form" @submit.prevent="sendEmail">
                <div class="pair">
                    <div class="input-wrapper">
                        <label>Name</label>
                        <input type="text" name="name">
                    </div>
                    <div class="input-wrapper">
                        <label>Email</label>
                        <input type="email" name="email">
                    </div>
                </div>
                <div class="input-wrapper">
                    <label>Message</label>
                    <textarea name="message"></textarea>
                </div>
                <input class="submit" type="submit" value="Send">
            </form>

            <span v-if="EmailStatus === 'success' && EmailSent" class="feedback -success">
                E-mail successfully sent
            </span>

            <span v-else-if="EmailSent" class="feedback -success">
                E-mail successfully sent
            </span>
        </div>
    </section>
</template>

<script>
    import emailjs from '@emailjs/browser';

    export default {
        data () {
            return {
                EmailStatus: '',
                EmailSent: false
            }
        },
        methods: {
            sendEmail() {
            emailjs.sendForm('GmailMessage', 'template_59ech3s', this.$refs.form, '47vHM8h_3xGtTMSno')
                .then(() => {
                    this.EmailSent = true
                    this.EmailStatus = 'success'
                }, () => {
                    this.EmailSent = true
                    this.EmailStatus = 'error'
                });
            }
        }
    }
</script>

<style lang="scss">
.contact-component {
    padding: 64px 16px;
    background: $color-background-2;

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
            margin: 0 0 32px;

            @include media(md) {
                margin: 0 0 64px;
            }
        }

        & > form {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 980px;
            margin: 0 auto;
            & > .pair {
                display: flex;
                flex-direction: column;
                width: 100%;
                
                @include media(md) {
                    flex-direction: row;
                    justify-content: space-between;
                }

                & > .input-wrapper {
                    width: 100%;
                    margin-bottom: 24px;
                    @include media(md) {
                        width: calc(50% - 8px);
                    }

                    & > label {
                        font-size: 20px;
                        font-family: 'eurostile';
                        color: $color-dark-low;
                        margin-bottom: 8px;
                        display: inline-block;
                    }

                    & > input {
                        box-sizing: border-box;
                        padding: 16px;
                        color: $color-dark-medium;
                        font-size: 18px;
                        width: 100%;
                        height: 56px;
                        border-radius: 4px;
                        border: 1px solid $color-gray-high;
                        box-shadow: $color-gray-high 0px 2px 4px;
        
                    }
                }

            }

            & > .input-wrapper {
                width: 100%;
                & > label {
                    font-size: 20px;
                    font-family: 'eurostile';
                    color: $color-dark-low;
                    margin-bottom: 8px;
                    display: inline-block;
                }

                & > textarea {
                    box-sizing: border-box;
                    padding: 16px;
                    color: $color-dark-medium;
                    font-size: 18px;
                    width: 100%;
                    height: 160px;
                    border-radius: 4px;
                    border: 1px solid $color-gray-high;
                    box-shadow: $color-gray-high 0px 2px 4px;
    
                }
            }

            & > .submit {
                margin-top: 32px;
                font-size: 20px;
                height: 42px;
                width: 100%;
                max-width: 320px;
                font-family: 'Source Code Pro';
                color: $color-dark-medium;
                background: $color-primary;
                border: none;
                transition: all 0.4s;
                padding: 0 16px;
                animation: animate-slide-appear-right 1s;
                transition: all 1s;
                border-radius: 100px;

                &:hover {
                    background: $color-secondary;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>