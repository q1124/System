const path = require('path')

module.exports = {
    productionSourceMap: false,
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'assets',
    productionSourceMap: true,
    devServer: {
        port: 8080,
        https: false,
        hotOnly: false,
        open: true,
        proxy: {
          // 配置跨域
          '/api': {
            target: 'http://localhost:5000/api/',
            ws: true,
            changOrigin: true,
            pathRewrite: {
              '^/api': ''
            }
          }
        }
    }
    // configureWebpack: config => {
    //   if (debug) {
    //     config.devtool = 'cheap-module-eval-source-map'
    //   }
    // }
}
