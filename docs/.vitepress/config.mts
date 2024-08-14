import
{
	defineConfig
}
from 'vitepress'

export default defineConfig
({
	title: "WitherUtils",
	description: "Documentation",
	themeConfig:
	{
		nav:
		[{
			text: 'GetStarted', link: '/getstarted' },
			{
				text: 'Content',

			items: [
			{
				text: 'Blocks', link: '/blocks'
			},
			{
				text: 'Items', link: '/items'
			},
			{
				text: 'Player', link: '/player'
			}
			]
		}],
		
		logo: './theme/logo.svg',
		
//		sidebar:
//		[
//			{
//				text: 'Examples',
//				items:
//				[
//					{
//						text: 'Markdown Examples', link: '/markdown-examples'
//					},
//					{
//						text: 'Runtime API Examples', link: '/api-examples'
//					}
//				]
//			}
//		],
		socialLinks:
		[
			{
				icon: 'github', link: 'https://github.com/klangzwang'
			}
		]
	}
})
