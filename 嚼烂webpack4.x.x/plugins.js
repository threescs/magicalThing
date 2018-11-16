// plugins 指的是插件
// UglifyJsPlugin
// HotModuleReplacementPlugin
// NoEmitOnErrorsPlugin
// HtmlWebPackPlugin
// ExtractTextPlugin
// PreloadWebpackPlugin

// plugins/loader的区别
// loader的作用在于解析文件, 比如把es6转成es5,甚至es3,毕竟还有万恶的IE嘛, 把sass less解析成css, 给css自动加上兼容的前缀,对图片进行一个解析等等

// plugins 他要对loader干的事情进行优化分类, 提取精华(公共代码提取), 做压缩代理(js/css/html压缩)\ 输出指定的目录等...