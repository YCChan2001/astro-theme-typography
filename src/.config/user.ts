import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  site: {
    title: '神仙鱼不吃鱼鱼',
    subtitle: 'Sakoamc',
    author: 'SAK',
    description: 'lazzzzy',
    website: 'https://blog.sakoamc.com/',
    socialLinks: [
      {
        name: 'github',
        href: 'https://github.com/YCChan2001',
      },
      {
        name: 'rss',
        href: '/atom.xml',
      },
      {
        name: 'twitter',
        href: 'https://x.com/YC___Chan',
      },

    ],
    navLinks: [
      {
        name: 'Posts',
        href: '/posts/page/1',
      },
      {
        name: 'Archive',
        href: '/archive',
      },
      {
        name: 'Categories',
        href: '/categories',
      },
      {
        name: 'About',
        href: '/about',
      },
    ],
    categoryMap: [{ name: '胡适', path: 'hu-shi' }],
  },
  appearance: {
    theme: 'light',
    locale: 'zh-cn',
    colorsLight: {
      foreground: '#2e405b',
      background: '#ffffff',
    },
    colorsDark: {
      foreground: '#ffffff',
      background: '#2e405b',
    },
    fonts: {
      header:
        '"HiraMinProN-W6","Source Han Serif CN","Source Han Serif SC","Source Han Serif TC",serif',
      ui: '"Source Sans Pro","Roboto","Helvetica","Helvetica Neue","Source Han Sans SC","Source Han Sans TC","PingFang SC","PingFang HK","PingFang TC",sans-serif',
    },
  },
  seo: {
    twitter: '@YC___Chan',
    meta: [],
    link: [],
  },
  comment: {
    // disqus: { shortname: "typography-astro" },
  },
  rss: {
    fullText: true,
  },
}
// Override the default config here
// site: { title: "講評世界" },
// seo: { twitter: "@moeyua13" },

