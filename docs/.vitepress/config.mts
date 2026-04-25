import { defineConfig } from 'vitepress'
import enConfig from '../config.mts'
import zhConfig from '../zh/config.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: enConfig.title,
  description: enConfig.description,
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/img/favicon.svg' }]],
  locales: {
    root: {
      label: 'English',
      link: '/',
      ...enConfig
    },
    zh: {
      label: '简体中文',
      link: '/zh/',
      ...zhConfig
    }
  },
  themeConfig: {
    logo: '/img/lilbox.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/MeowSalty/homebox-plus' }
    ]
  }
})
