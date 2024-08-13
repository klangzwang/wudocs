import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({

//  base: "/docs/",
  
  title: "WitherUtils",
  
  description: "WitherUtils Documentation",
  
	themeConfig:
	{
		nav: [
		{
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

	  logo: './logo.svg',

//    nav: [
//      { text: 'Home', link: '/' },
//      { text: 'Examples', link: '/markdown-examples' }
//    ],

    // sidebar: [
      // {
        // text: 'Examples',
        // items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        // ]
      // }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/klangzwang' }
    ]
  }
})
