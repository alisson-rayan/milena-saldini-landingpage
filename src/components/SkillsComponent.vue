<template>
    <section class="skills-component" id="skills">
        <div class="content">
            <h2>
                Skills, languages & tools
            </h2>
            <div class="card">
                <div class="subcard">
                    <div class="icon">
                        <CodeIcon />
                    </div>

                    <h3 class="title">
                        Frontend Developer
                    </h3>
    
                    <p class="description">
                        I like to make pretty things, and I use my code for that.
                    </p>
    
                    <p class="skills-title">
                        Main skills
                    </p>
    
                    <ul class="skills-list">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Vue.js</li>
                        <li>SCSS</li>
                    </ul>
    
                    <p class="skills-title">
                        Other languages
                    </p>
    
                    <ul class="skills-list">
                        <li>React</li>
                        <li>Angular</li>
                        <li>Electron</li>
                        <li>Jest</li>
                        <li>BEM CSS</li>
                    </ul>
                </div>
                
                <div class="subcard">
                    <div class="icon">
                        <GearIcon />
                    </div>
                    <h3 class="title">
                        Tools
                    </h3>
    
                    <p class="description">
                        I use several up-to-date tools to develop.
                    </p>
    
                    <p class="skills-title">
                        Main tools
                    </p>
    
                    <ul class="skills-list">
                        <li>VsCode</li>
                        <li>Git</li>
                        <li>MySql</li>
                        <li>Postman</li>
                        <li>Git Bash</li>
                    </ul>
    
                    <p class="skills-title">
                        Other tools
                    </p>
    
                    <ul class="skills-list">
                        <li>Simulator</li>
                        <li>WebStorm</li>
                    </ul>
                </div>

                <div class="subcard">
                    <div class="icon">
                        <ManageIcon />
                    </div>

                    <h3 class="title">
                        Design
                    </h3>
    
                    <p class="description">
                        I love product design and I always try to keep up to date.
                    </p>
    
                    <p class="skills-title">
                        Main tools & skills
                    </p>
    
                    <ul class="skills-list">
                        <li>Figma</li>
                        <li>UI Design</li>
                        <li>UX Design</li>
                    </ul>
                    
                    <p class="skills-title">
                        Other skills, languages & tools
                    </p>
                    
                    <ul class="skills-list">
                        <li>Design system</li>
                        <li>Design tokens</li>
                        <li>Font Awesome</li>
                        <li>Webflow</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import CodeIcon from '../assets/images/icons/code.svg?inline'
    import GearIcon from '../assets/images/icons/gear.svg?inline'
    import ManageIcon from '../assets/images/icons/manage.svg?inline'

    export default {
        components: {
            CodeIcon,
            GearIcon,
            ManageIcon
        }
    }
</script>

<style lang="scss">
.skills-component {
    padding: 64px 16px;
    background: $color-primary;

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
            color: $color-white-high;
            text-align: center;
            margin: 0 0 48px;

            @include media(md) {
                font-size: 32px;
                line-height: 32px;
                margin: 0 0 64px;
            }
        }

        & > .card {
            display: flex;
            flex-direction: column;
            padding: 0;
            width: 100%;
            border-radius: 20px;
            border: 1px solid $color-gray-medium;
            box-shadow: $color-gray-medium 0px 2px 4px;
            background: $color-white-high;

            @include media(md) {
                flex-direction: row;
            }

            & > .subcard {
                padding: 56px 24px;

                &:not(:last-child) {
                    border-bottom: 2px solid $color-gray-medium;

                    @include media(md) {
                        border-bottom: none;
                        border-right: 2px solid $color-gray-medium;
                    }
                }

                & > .icon {
                    margin: 0 auto;
                    border-radius: 100%;
                    width: 64px;
                    height: 64px;
                    background-color: $color-terciary;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 32px;

                    & > svg {
                        width: 24px;
                        height: 24px;
                    }
                }

                & > .title {
                    text-align: center;
                    font-size: 24px;
                    color: $color-dark-high;
                    font-family: 'Eurostile';
                    margin-bottom: 24px;
                }

                & > .description {
                    text-align: center;
                    text-align: center;
                    font-size: 16px;
                    font-family: 'Europa';
                    color: $color-dark-low;
                    margin-bottom: 32px;
                }

                & > .skills-title {
                    text-align: center;
                    color: $color-terciary;
                    font-size: 16px;
                    font-family: 'Inter';
                }

                & > .skills-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;

                    &:not(:last-child) {
                        margin-bottom: 48px;
                    }

                    & > li {
                        text-align: center;
                        font-size: 16px;
                        font-family: 'Europa';
                        color: $color-dark-low;

                        &:not(:last-child) {
                            margin-bottom: 4px;
                        }
                    }
                }
            }
        }
    }
}
</style>