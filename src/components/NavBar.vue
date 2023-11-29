<template>
    <nav :class="[{'-ontop': isOnTop }]">
        <div class="logo">
            <AppLogo />
        </div>

        <div :class="['hamburger-menu', { '-is-opened': menuIsOpened }]" @click="menuIsOpened = !menuIsOpened">
            <div class="bar-top"></div>
            <div class="bar-middle"></div>
            <div class="bar-bottom"></div>
        </div>
        
        <!-- Mobile menu -->
        <div v-if="menuIsOpened" class="mobile-menu">
            <div class="links">
                <a @click="(menuIsOpened = false)" href="#about">Sobre mim</a>
                <a @click="menuIsOpened = false" href="#jobs">Portifólio</a>
                <a @click="menuIsOpened = false" href="#contact">Contact me</a>
            </div>
        </div>

        <div class="menu-desktop">
            <div class="links">
                <a href="#about">Sobre mim</a>
                <a href="#jobs">Portifólio</a>
                <a class="btn" href="#contact">Contact me</a>
            </div>
        </div>
    </nav>
</template>

<script>
import AppLogo from '../assets/images/logo.svg?inline'
export default {
    components: {
        AppLogo
    },

    data() {
        return {
            menuIsOpened: false,
            isOnTop: true
        }
    },

    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    mounted () {
        this.handleScroll()
    },
    unmounted () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll () {
            if (window.pageYOffset === 0) {
                this.isOnTop = true
            } else {
                this.isOnTop = false
            }
        }
    }

}
</script>

<style lang="scss">
@keyframes appear {
  from {
    opacity: 0.3;
  }
  to {
    opacity: 1;
  }
}


nav {
    position:fixed;
    width: 100%;
    height: 65px;
    max-width: 100vw;
    z-index: 10;
    box-sizing: border-box;
    padding: 16px;
    background-color: $color-white-high;
    border-bottom: 1px solid $color-gray-medium;
    box-shadow: $color-gray-medium 0px 2px 4px;
    transition: all 1s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    

    & > .logo {
        display: flex;
        align-items: center;
        animation: animate-slide-appear-left 0.5s;
        & > svg {
            width: 60px;
            & > g > path {
                fill: $color-dark-medium;
            }
        }
    }

    & > .hamburger-menu {
        display: flex;
        flex-flow: column wrap;
        justify-content: space-between;
        height: 35px;
        width: 35px;
        cursor: pointer;
        animation: animate-slide-appear-right 0.5s;
        @include hideOnDesktop;

        & > .bar-top,
        & > .bar-middle,
        & > .bar-bottom {
            height: 2px;
            background: $color-dark-low;
            border-radius: 5px;
            margin: 4px 0;
            transform-origin: left;
            transition: width 0.5s;
        }

        &.-is-opened {
            z-index: 14;
            & > .bar-top {
                background: $color-dark-low;
                transform: rotate(45deg);
            }
            & > .bar-middle {
                transform:translateX(1rem);
                opacity: 0;
            }
            & > .bar-bottom {
                background: $color-dark-low;
                transform: rotate(-45deg);
            }
        }

    }

    & > .mobile-menu {
        position: fixed;
        z-index: 300;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        max-width: 100vw;
        max-height: 100vh;
        background: $color-primary;
        z-index: 12;
        animation: appear 0.5s linear forwards;
        transition: width 0.5s;
        display: flex;
        align-items: center;
        justify-content: center;

        & > .links {
            display: flex;
            align-items: center;
            flex-direction: column;

            & > a {
                font-size: 32px;
                font-family: 'Source Code Pro';
                color: $color-dark-medium;
                margin-bottom: 16px;
                transition: all 0.4s;
                animation: animate-slide-appear-right 1s;

                &:hover {
                    cursor: pointer;
                    scale: 1.1;
                }
            }

            & > .btn {
                display: flex;
                align-items: center;
                font-size: 32px;
                font-family: 'Source Code Pro';
                color: $color-dark-low;
                margin-top: 8px;
                background: $color-secondary;
                border: none;
                transition: all 0.4s;
                padding: 0 16px;
                animation: animate-slide-appear-right 1s;

                &:hover {
                    scale: 1.2;
                    cursor: pointer;
                }
            }
        }
    }

    & > .menu-desktop {
        @include hideOnMobile;
        & > .links {
            display: flex;
            align-items: center;

            & > a {
                font-size: 18px;
                font-family: 'Source Code Pro';
                color: $color-dark-medium;
                transition: all 0.4s;
                animation: animate-slide-appear-right 1s;
                margin-right: 24px;
                position: relative;

                &:hover {
                    cursor: pointer;
                    scale: 1.1;

                    &::after {
                        width: 100%;
                    }
                }

                &::after {
                    content: '';
                    display: block;
                    width: 0;
                    height: 1px;
                    background: $color-dark-medium;
                    transition: width .3s;
                }
            }

            & > .btn {
                font-size: 18px;
                height: 40px;
                font-family: 'Source Code Pro';
                color: $color-dark-low;
                border: none;
                transition: all 0.2s;
                padding: 0 16px;
                animation: animate-slide-appear-right 0.3s;
                transition: all 0.3s;
                border-radius: 20px;
                display: flex;
                align-items: center;
                border: 1px solid $color-dark-low;

                &:hover {
                    cursor: pointer;

                    &::after {
                        width: 0;
                    }
                }
            }
        }
    }

    &.-ontop {
        border: none;
        box-shadow: none;
        background-color: transparent;

        & > .logo {
            & > svg {
                & > g > path {
                    fill: $color-dark-high;
                }
            }
        }

        & > .hamburger-menu {
            & > .bar-top,
            & > .bar-middle,
            & > .bar-bottom {
                background: $color-dark-high;
            }
        }

        & > .menu-desktop {
            & > .links {
                & > a {
                    color: $color-dark-medium;
                }

                & > .btn {
                    color: $color-dark-low;
                    background: transparent;
                    

                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>