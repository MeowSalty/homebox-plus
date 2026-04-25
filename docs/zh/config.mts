export default {
  lang: 'zh-CN',
  title: 'Homebox',
  description: '专为家庭用户打造的库存与整理系统',
  themeConfig: {
    nav: [
      { text: '首页', link: '/zh/' },
      { text: '指南', link: '/zh/guide/quick-start' },
      { text: '参考', link: '/zh/reference/import-csv' },
      {
        text: 'API',
        link: 'https://redocly.github.io/redoc/?url=https://hay-kot.github.io/homebox/api/openapi-2.0.json'
      }
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '快速开始', link: '/zh/guide/quick-start' },
          { text: '技巧与实践', link: '/zh/guide/tips-tricks' },
          { text: '构建二进制', link: '/zh/guide/build' }
        ]
      },
      {
        text: '参考',
        items: [{ text: 'CSV 导入', link: '/zh/reference/import-csv' }]
      }
    ],
    outlineTitle: '本页目录',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
}

