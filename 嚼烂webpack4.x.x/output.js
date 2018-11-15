// 输出, output就是审判官, 决定着你是上天堂还是入地狱;

// path: 指示文件的目录
// filename: 输出的文件名, 他一般跟entry配置相对应, 如 js/[name].js name就指的是[index, vendors]
// chunkFlename: 块,配置了它, 会帮你自动拆分文件, 也就是大家常说的按需加载, 与路由中的require.ensure相对应
// pubilcPath: 文件输出的公共路径
// pathinfo: 既保留相互依赖的包中的注释信息, 这个基本不用主动设置它, 它默认
// development 模式时的默认值时true, 而在production的模式时默认值时false

// 主要的就是这些，还有一些其他的library、libraryTarget、auxiliaryComment

// output: {
// 	path: path.resolve(__dirname, '../assets'),
// 	filename: 'js/[name].js',
// 	chunkFilename: 'js/[name].[chunkhash:8].js',
// 	publicPath: '/_static_/', //最终访问的路径就是：localhost:3000/_static_/js/*.js
// 	pathinfo:true,
// }
