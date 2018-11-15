// optimization 是webpack4 新增的, 主要是用来让开发者根据需要自定义一些优化构建打包的策略配置,
// minimize: true/false 告诉webpack是否开启代码最小化压缩,
// minimizer: 自定js优化配置,会覆盖默认的配置, 结合UglifyJsPlugin插件使用,
// removeEmptyChunks: bool值, 它检测并删除空的块, 设置为false将禁用此优化,
// nodeEnv: 它并不是Node里的环境变了, ，设置后可以在代码里使用 process.env.NODE_ENV === 'development'来判断一些逻辑，生产环境UglifyJsPlugin会自动删除无用代码，
// splitChunks ：取代了CommonsChunkPlugin，自动分包拆分、代码拆分，详细默认配置：默认配置，只会作用于异步加载的代码块 —— chunks: 'async'，它有三个值：all,async,initial

// 环境变更也可以直接 在启动中设置
 //webpack --env.NODE_ENV=local --env.production --progress


//  分包配置↓
//  splitChunks: {
//     chunks: 'async',
//     minSize: 30000,
//     maxSize: 0,
//     minChunks: 1,
//     maxAsyncRequests: 5,
//     maxInitialRequests: 3,
//     automaticNameDelimiter: '~',
//     name: true,
//     cacheGroups: {
//       vendors: {
//         test: /[\\/]node_modules[\\/]/,
//         priority: -10
//       },
//       default: {
//         minChunks: 2,
//         priority: -20,
//         reuseExistingChunk: true
//       }
//     }
//   }


// runtimeChunk: 提取webpack运行时代码, 它可以设置为boolean\Object
// 该配置开启时, 会覆盖入口指定的名称!!!



// optimization: {
// 	runtimeChunk:true,//方式一
//   runtimeChunk: {
//     name: entrypoint => `runtimechunk~${entrypoint.name}` //方式二
//   }
// }

 