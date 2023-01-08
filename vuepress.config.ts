import { navbar } from "./navbar";
import { sidebar } from "./sidebar";
import * as path from "path";
import { DefinePlugin } from 'webpack';

export const domain = 'https://smlight.tech';
const isDevelop = !!process.env.DEVELOP_BRANCH;

export function getBase() {
  let base = '/manual/slzb-06/';
  if (isDevelop) base += 'develop/';
  return base;
}
const pagePatterns = ['**/*.md', '!.vuepress', '!node_modules'];

// Ability to exclude device-page rendering to save time while in dev
if (process.env.EXCLUDE_DEVICES) {
  pagePatterns.push('!devices');
}

const conf = {
  base: getBase(),
  title: 'SLZB-06 Manual' + ( isDevelop ? ' develop' : '' ),
  description: 'SLZB-06 Zigbee Ethernet USB PoE LAN Universal Adapter',

  dest: 'dist',
  public: 'public',
  temp: '.temp',
  cache: '.cache',

  pagePatterns,

  head: [
    ['script', {}, `if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) { window.document.querySelector('html').classList.add('dark');} `
    ],
    ['link', {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: `${ getBase() }favicon-16x16.png`,
    }],
    ['link', {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: `${ getBase() }favicon-32x32.png`,
    }],
    ['link', {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '180x180',
      href: `${ getBase() }apple-touch-icon.png`,
    }],
    ['link', {
      rel: 'manifest',
      href: `${ getBase() }site.webmanifest`,
    }],
    ['link', {
      rel: 'mask-icon',
      color: '#F3483A',
      href: `${ getBase() }safari-pinned-tab.svg`,
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#F3483A',
    }],
    ['meta', {
      name: 'theme-color',
      content: '#F3483A',
    }],
  ],

  themeConfig: {
    repo: 'smlight-dev/slzb-06-manual',
    docsBranch: isDevelop ? 'develop' : 'master',
    editLinkText: 'Help to make the manual better and edit this page on Github',
    logo: '/logo.png',
    docsDir: 'docs',
    navbar,
    sidebar,
    sidebarDepth: 2,
    contributors: false,
    themePlugins: {
      git: true
    }
  },

  debug: false,

  bundler: '@vuepress/bundler-webpack',
  bundlerConfig: {
    chainWebpack: (chain) => {
      chain.plugin('define-quasar')
        .use(DefinePlugin, [{
          __QUASAR_VERSION__: `'dev'`,
          __QUASAR_SSR__: false,
          __QUASAR_SSR_SERVER__: false,
          __QUASAR_SSR_CLIENT__: false,
          __QUASAR_SSR_PWA__: false
        }]);
    },
  },

  plugins: [
    [
      '@vuepress/plugin-google-analytics',
      {
        id: 'G-CD3DJPTC5Z',
      },
    ],
    [
      'vuepress-plugin-sitemap2',
      { hostname: domain }
    ],
    [
      '@vuepress/docsearch',
      {
        apiKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
        indexName: 'smlight.tech/manual/slzb-06',
        appId: 'XXXXXXXXXXX',
        locales: {
          '/': {
            placeholder: 'Search',
          },
        },
      },
    ],
    [
      path.resolve(__dirname, './docs/.vuepress/defaultPageClassPlugin.ts'),
    ],
  ],
}

if(isDevelop) {
  conf.head.push(['meta', { name: 'robots', content: 'noindex' }]);
}

export default conf;
