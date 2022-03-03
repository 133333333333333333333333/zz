module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= '你的标题'
        return args
      })
  },
  devServer: {
    proxy: {
      '/api': {
        // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
        target: 'http://apis.juhe.cn',
        // 允许跨域
        changeOrigin: true,
        //   ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
    // proxyTable: {
    //   // proxy all requests starting with /api to jsonplaceholder
    //   '/api': {
    //     target: 'http://apis.juhe.cn',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  }
}
