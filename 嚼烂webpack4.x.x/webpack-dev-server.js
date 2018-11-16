// 这个老生常谈了, 新手上路一般都有用它, 
// contentBase: 告诉服务(dev server)在哪里查找文件, 默认不指定会是在当期项目根目录,
// historyApiFallback 可以使Boolean\Object 默认相应的是入口文件, 包括404都会指向这里, object见西面示例,
// compress: 启用gzip 压缩
// publicPath: 它其实就是output.publicPath, 当你改变了它, 即会覆盖了output的配置, 
// stats: 可以自定控制要显示的便以细节信息
// proxy: 它其实就是http-proxy-middleware, 可以进行处理一些代理的请求.


// 方式一: 不配置方式二的内容
// webpack-dev-server --config webpack/webpack.config.dev.js
// 指定 端口: --port=8000
// 开启热更新: --hot
// gzip: --compress

// 方式二
// devserver :
//     contentBase: './assets',
//     host: '0.0.0.0',
//     port: 9089,
//     publicpath: '/assets/',
//     historyApiFallback: {
//         index: '/views/index.html'
//     },
//     rewrites: [
//         { from: /^\/$/, to: '/views/landing.html' },
//         { from: /^\/subpage/, to: '/views/subpage.html' },
//         { from: /./, to: '/views/404.html' }
//     ],
//     stats: {
// 		colors: true,
// 		chunks: false
//     },
//     proxy:{
// 		'/mockApi': 'https://easy-mock.com/project/5a0aad39eace86040263d' ,//请求可直接写成  /mockApi/api/login...
// 	}
// }
 
