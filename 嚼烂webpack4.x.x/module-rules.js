// rules: 也就是之前的loders
// test: 正则表达式, 匹配编译的文件,
// exclude: 排除特定条件, 如通常会写node_modules, 即把某些目录/文件过滤掉,
// include: 它正好与exclude相反,
// use-loder: 必须要有它, 它相当于一个test匹配到的文件对应的解析器, babel-loder, style-loder, sass-loder, url-loder
// use-options: 它与loder配合使用, 可以是一个字符串和对象, 它的配置可以直接简写在loder内一起, 它下面还有presets plugins等属性
module: {
	rules: [
		{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: [
				{
					loader: 'babel-loader',
					options: {
						presets: [
							['env',
							{
								targets: {
								browsers: CSS_BROWSERS,
							},
						}],'react', 'es2015', 'stage-0'
						],
						plugins: [
							'transform-runtime',
							'add-module-exports',
						],
					},
				},
			],
		},
		{
			test: /\.(scss|css)$/,
			use: [
				'style-loader',
				{loader: 'css-loader',options:{plugins: [require('autoprefixer')({browsers: CSS_BROWSERS,}),],sourceMap: true}},
				{loader: 'postcss-loader',options:{plugins: [require('autoprefixer')({browsers: CSS_BROWSERS,}),],sourceMap: true}},
				{loader: 'sass-loader',options:{sourceMap: true}}
			]
		},
		{
			test: /\.(png|jpg|jpeg|gif)$/,
			exclude: /node_modules/,
			use: [
				{
					loader: 'url-loader?limit=12&name=images/[name].[hash:8].[ext]',
				},
			],
		},
		{
			test: /\.(woff|woff2|ttf|eot|svg)$/,
			exclude: /node_modules/,
			use: [
				{
					loader: 'file-loader?name=fonts/[name].[hash:8].[ext]',
				},
			],
		},
	],
}

// 项目中常用的loader
// babel-loader、awesome-typescript-loader js*/ts编译，
// css-loader、postcss-loader、sass-loader、less-loader、style-loader 等css样式处理
// file-loader、url-loader、html-loader等图片/svg/html等的处理，

 