module.exports = {
    base : '/galaxy-doc/',
    title: 'Galaxy Docs',
    description: '为了梦想，努力奋斗',
	dest : "dist",
    head : [
		[
			'link', {
				rel : 'icon',
				href : '/images/favicon.ico'
			}
		],
		[
			'link', {
				rel : 'stylesheet',
				href : '/css/ruoyi.css'
			}
		],
		[
			'script', {
				charset : 'utf-8',
				src : '/js/ruoyi.js'
			}
		]
	],
    markdown : {
		lineNumbers : true // 代码块是否显示行号
	},
	themeConfig : {
		sidebarDepth : 3,
		nav : [ // 导航栏配置
			{
				text : 'java',
				link : '/java/'
			}
		],
		sidebar : {
			'/java/' : [{
					title : 'java学习文档',
					collapsable : false,
					children : [
						'',
						'document/kslj'
					]
				}
			],
			
		}
	}
}