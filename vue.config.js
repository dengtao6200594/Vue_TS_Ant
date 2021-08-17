/**
 * 我的方法
 * *重要的信息会被高亮显示
 * !及其反对的代码,不要使用
 * TODO 重构此方法
 * @param 该方法的参数
 */
/**
 * 可选的配置文件vue.config.js会被@vue/cli-service自动加载
 */
const path = require('path')
function resolve(dir) {
	return path.join(__dirname, dir)
}
module.exports = {
	/**
	 * @param publicPath:所有的资源都会被链接为相对路径,也可以以服务器架设为根路径
	 * @param outputDir:构建时的输出目录
	 * @param assetsDir:防止静态资源的目录
	 * @param indexPath:指定生成的 index.html 的输出路径
	 * @param filenameHashing:生成的静态资源在它们的文件名中包含了hash以便更好的控制缓存
	 * @param pages:在 multi-page（多页）模式下构建应用
	 * @param lintOnSave:是否在保存的时候使用 `eslint-loader` 进行检查
	 * @param runtimeCompiler:是否使用包含运行时编译器的 Vue 构建版本
	 * @param transpileDependencies:默认情况下babel-loader 会忽略所有node_modules 中的文件
	 * babel-loader让ES高级语法在浏览器中顺利运行
	 * @param productionSourceMap:如果你不需要生产环境的source map，可以将其设置为false以加速生产环境构建。
	 * @param crossorigin:设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性
	 * 添加这个属性， 并且服务器允许跨域后，会得到精确的报错信息。
	 * 添加这个属性，但服务器不允许跨域，就会被同源策略阻止加载资源。
	 * 不添加这个属性，只能知道报错，不知道具体信息。
	 * @param configureWebpack:作为对象，则会通过 webpack-merge 合并到最终的配置中。作为函数...
	 * @param chainWebpack:允许对内部的 webpack 配置进行更细粒度的修改。
	 * !还有CSS相关配置...
	 * @param devServer:支持所有 webpack-dev-server 的选项
	 * @param devServer.proxy:开发环境下解决跨域问题
	 */
	publicPath: '/',
	outputDir: 'dist',
	assetsDir: 'static',
	lintOnSave: process.env.NODE_ENV === 'development',
	productionSourceMap: false,
	devServer: {
		port: 9527,
		open: true,
		before: require('./mock/index')
	},
	configureWebpack: {
		resolve: {
			alias: {
				'@': resolve('src'), // path.resolve(__dirname, 'src')
				// '@ant-design/icons/lib/dist$': resolve('./src/utils/icon.ts')// path.resolve(__dirname,'./src/utils/icons.js')
			}
		}
	},
	
	css: {
		loaderOptions: {
			less: {
				lessOptions: {
					// If you are using less-loader@5 please spread the lessOptions to options directly
					modifyVars: {
						'primary-color': '#1DA57A',
						'link-color': '#1DA57A',
						'border-radius-base': '2px'
					},
					javascriptEnabled: true
				}
			}
		}
	}
	// 通过chainWebpack自定义打包入口，练习中不使用
	// chainWebpack: config => {
	//   config.when(process.env.NODE_ENV === 'production', config => {
	//     config
	//       .entry('app')
	//       .clear()
	//       .add('./src/main-prod.js');
	//     config.set('externals', {
	//       vue: 'vue',
	//       'vue-router': 'VueRouter',
	//       lodash: '_',
	//       echarts: 'echarts',
	//       nprogress: 'NProgress',
	//       'vue-quill-editor': 'VueQuillEditor'
	//     });
	//     config.plugin('html').tap(args => {
	//       args[0].isProd = true;
	//       return args;
	//     });
	//   });
	//   config.when(process.env.NODE_ENV === 'development', config => {
	//     config
	//       .entry('app')
	//       .clear()
	//       .add('./src/main-dev.js');
	//     config.plugin('html').tap(args => {
	//       args[0].isProd = true;
	//       return args;
	//     });
	//   });
	// }
}
