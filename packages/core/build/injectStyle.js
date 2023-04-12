/**
 * Modified plugin from:
 * https://github.com/caiguanhao/vite-plugin-css-injected-by-js
 */

exports.__esModule = true
exports.default = function cssInjectedByJsPlugin () {
  return {
    apply: 'build',
    enforce: 'post',
    name: 'css-in-js-plugin',
    generateBundle (opts, bundle) {
      const styleMap = {}
      for (const key in bundle) {
        if (bundle[key]) {
          const chunk = bundle[key]
          if (
            chunk.type === 'asset' &&
            chunk.fileName.includes('.css')
          ) {
            styleMap[key.replace('.css', '.js')] = chunk.source
            delete bundle[key]
          }
        }
      }
      for (const key in bundle) {
        if (bundle[key]) {
          const chunk = bundle[key]
          if (
            chunk.type === 'chunk' &&
            chunk.fileName.includes('.js') &&
            styleMap[key]
          ) {
            const style = JSON.stringify(styleMap[key])
            const injectedCode = `!function(){try{var c=!(typeof window=="undefined"||!window.document||!window.document.createElement),e=c&&(document.head||document.getElementsByTagName("head")[0]),t=c&&document.createElement("style"),d=${style};if(c){e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t),t.styleSheet?t.styleSheet.cssText=d:t.appendChild(document.createTextNode(d))}}catch(e){console.error(e,"vite-plugin-css-injected-by-js: failed to add the style")}}()`
            chunk.code += injectedCode
            delete styleMap[key]
          }
        }
      }
    },
    transformIndexHtml: {
      enforce: 'post',
      transform (html, ctx) {
        if (!ctx || !ctx.bundle) return html
        for (const [, value] of Object.entries(ctx.bundle)) {
          if (value.fileName.endsWith('.css')) {
            const reCSS = new RegExp(
              `<link rel="stylesheet"[^>]*?href="/${value.fileName}"[^>]*?>`
            )
            html = html.replace(reCSS, '')
          }
        }
        return html
      },
    },
  }
}
