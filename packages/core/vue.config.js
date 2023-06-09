// vue.config.js
const path = require('path')

module.exports = {
  chainWebpack: (config) => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach((type) =>
      addStyleResource(config.module.rule('stylus').oneOf(type))
    )

    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => Object.assign(options, { esModule: false  }))

    config.module
      .rule('svg')
      .use('file-loader')
      .loader('file-loader')
      .tap((options) => Object.assign(options, { esModule: false }))
      .end()
  },
}

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/styles/imports.styl')],
    })
}
