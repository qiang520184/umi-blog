export default [
	{
		title: '首页',
		path: '/',
		icon: 'home'
	},
	{
		title: '归档',
		path: '/archives',
		icon: 'tags',
		children: [
			{
				title: '技术',
				path: '/archives/skill',
				icon: 'fund'
			},
			{
				title: '生活',
				path: '/archives/live',
				icon: 'skin'
			},
			{
				title: '资源',
				path: '/archives/resource',
				icon: 'database'
			},
			{
				title: '随想',
				path: '/archives/caprice',
				icon: 'build'
			},
			{
				title: '转载',
				path: '/archives/reprint',
				icon: 'interation'
			}
		]
	},
	{
		title: '清单',
		icon: 'hdd',
		path: 'inventory',
		children: [
			{
				title: '书单',
				path: '/inventory/book',
				icon: 'read'
			},
			{
				title: '歌单',
				path: '/inventory/song',
				icon: 'customer-service'
			},
			{
				title: '图集',
				path: '/inventory/photos',
				icon: 'picture'
			}
		]
	},
	{
		title: '力扣',
		path: '/leetcode',
		icon: 'leetcode',
		children: [
			{
				title: '简单',
				path: '/leetcode/simple',
				icon: 'read'
			},
			{
				title: '中等',
				path: '/leetcode/medium',
				icon: 'customer-service'
			},
			{
				title: '困难',
				path: '/leetcode/difficult',
				icon: 'picture'
			}
		]
	},
	{
		title: '留言板',
		path: '/comment',
		icon: 'edit'
	},
	{
		title: '友人帐',
		path: '/links',
		icon: 'link'
	},
	{
		title: '赞赏',
		path: '/donate',
		icon: 'red-envelope'
	},
	{
		title: '关于',
		icon: 'schedule',
		path: '/about',
		children: [
			{
				title: '我',
				path: '/about/me',
				icon: 'smile'
			},
			{
				title: '博客',
				path: '/about/blog',
				icon: 'compass'
			},
			{
				title: 'github',
				path: '/about/github',
				icon: 'github'
			}
		]
	},
	{
		title: '客户端',
		path: '/clientSide',
		icon: 'mobile'
	}
	// {
	//     title: 'RSS',
	//     path: '/RSS',
	//     icon: 'pushpin'
	// }
];
