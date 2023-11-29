<template>
    <section class="about-me" id="about">
        <div class="content">
            <article class="text">
                <h2>
                    Prazer em te conhecer
                </h2>
    
                <p>
                    Sou formada em pedagogia e desenhista de produtos
                    gráficos web.
                    Atualmente trabalho como designer grafico freelancer
                    com foco em criações de conteúdo e gerenciamento
                    para redes sociais (Facebook e Instagram).
                    Especializando em UI/UX Designer
                </p>
            </article>
        </div>
    </section>
</template>

<script>
    export default {}
</script>

<style lang="scss">
.about-me {
    padding: 64px 16px;
    background: $color-background-2;

    @include media(md) {
        padding: 96px 32px;
    }

    & > .content {
        max-width: 1200px;
        margin: 0 auto;

        & > .text {
            & > h2 {
                font-size: 24px;
                line-height: 24px;
                font-weight: 800;
                font-family: 'Eurostile';
                color: $color-dark-high;
                text-align: center;
                margin: 0 0 32px;

                @include media(md) {
                    ont-size: 32px;
                    line-height: 32px;
                    margin: 0 0 64px;
                }
            }
    
            & > p {
                font-family: 'Europa';
                font-size: 16px;
                line-height: 24px;
                color: $color-dark-medium;
                text-align: center;

                @include media(md) {
                    font-size: 18px;
                    line-height: 28px;
                }
            }
        }
    }
}
</style>