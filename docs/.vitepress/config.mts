import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Homebox',
  description: 'Inventory and organization system built for the Home User',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/img/favicon.svg' }]],
  themeConfig: {
    logo: '/img/lilbox.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/quick-start' },
      { text: 'Reference', link: '/reference/import-csv' },
      {
        text: 'API',
        link: 'https://redocly.github.io/redoc/?url=https://hay-kot.github.io/homebox/api/openapi-2.0.json'
      }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Quick Start', link: '/guide/quick-start' },
          { text: 'Tips and Tricks', link: '/guide/tips-tricks' },
          { text: 'Building The Binary', link: '/guide/build' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'CSV Imports', link: '/reference/import-csv' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MeowSalty/homebox-plus' }
    ]
  }
})
