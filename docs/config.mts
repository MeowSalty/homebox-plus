export default {
  lang: 'en-US',
  title: 'Homebox',
  description: 'Inventory and organization system built for the Home User',
  themeConfig: {
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
        items: [{ text: 'CSV Imports', link: '/reference/import-csv' }]
      }
    ],
    outlineTitle: 'On this page',
    editLink: {
      pattern: 'https://github.com/MeowSalty/homebox-plus/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Released under the MIT License',
      copyright: 'Copyright © Homebox Plus Contributors'
    },
    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    }
  }
}
