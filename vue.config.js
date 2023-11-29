const { defineConfig } = require('@vue/cli-service')
console.log(defineConfig)
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: 'https://alissonrayan.dev/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/styles/main.scss";',
        implementation: require('node-sass')
      },
    }
  },

  chainWebpack: config => {
    config.module.rules.delete('svg')

    config.module
      .rule('svg')
      .test(/\.(svg)(\?.*)?$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
})