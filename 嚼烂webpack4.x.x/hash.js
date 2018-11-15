// 常用的有三种

// hash: 模块标识符的hash,一般应用于filename：'[name].[hash].js'
// chunkhash: 按需加载块内容的 hash，根据chunk自身的内容计算而来,'js/[name].[chunkhash:8].js'
// contenthash: 这个是在提取css文件时根据内容计算而来的hash, 结合ExtractTextWebpackPlugin插件使用

// hash长度 默认20, 可自定:[hash:8] \ [chunkhash:16];

