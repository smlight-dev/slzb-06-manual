import { navbar } from "./navbar";
import { sidebar } from "./sidebar";
import * as path from "path";
import { PageOptions } from "@vuepress/core";
import defaultTheme from '@vuepress/theme-default';
import webpackBundler from "@vuepress/bundler-webpack";
import * as DefinePlugin from "webpack/lib/DefinePlugin.js";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { sitemapPlugin } from 'vuepress-plugin-sitemap2';
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { defineUserConfig } from "vuepress";
import { domain, getBase, isDevelop } from "./getBase";

const pagePatterns = ['**/*.md', '!.vuepress', '!node_modules'];

// Ability to exclude device-page rendering to save time while in dev
if (process.env.EXCLUDE_DEVICES) {
  pagePatterns.push('!devices');
}

const devServerPort = (process.env.DEV_PORT ? parseInt(process.env.DEV_PORT, 10) : undefined);

const conf = defineUserConfig({
  port: devServerPort,
  base: getBase(),
  title: 'SLZB-06 Manual' + ( isDevelop ? ' develop' : '' ),
  description: 'SLZB-06 Zigbee Ethernet USB PoE LAN Universal Adapter',

  dest: 'dist',
  public: 'public',
  temp: '.temp',
  cache: '.cache',

  shouldPrefetch: false,

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

  theme: defaultTheme({
    repo: 'smlight-dev/slzb-06-manual',
    repoLabel: 'GitHub (docs)',
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
  }),

  debug: false,

  bundler: webpackBundler({
    scss: {
      sassOptions: {
        // ignore sass deprecation errors
        quietDeps: true
      }
    },
    chainWebpack: (chain) => {
      chain.plugin('define-quasar')
        .use(DefinePlugin.default, [{
          __QUASAR_VERSION__: `'dev'`,
          __QUASAR_SSR__: false,
          __QUASAR_SSR_SERVER__: false,
          __QUASAR_SSR_CLIENT__: false,
          __QUASAR_SSR_PWA__: false
        }]);
    },
  }),

  plugins: [
    googleAnalyticsPlugin({
      id: 'G-CD3DJPTC5Z',
    }),
    sitemapPlugin(
      { hostname: domain }
    ),
    docsearchPlugin({
      apiKey: 'XXXXXXXXXXXXXX',
      indexName: 'smlight.tech',
      appId: 'XXXXXXXXXXXXXX',
      locales: {
        '/': {
          placeholder: 'Search',
        },
      },
    }),
    {
      name: 'extendsPageOptions',
      extendsPageOptions: (pageOpts: PageOptions) => {
        pageOpts.frontmatter = pageOpts.frontmatter ?? {}
        const frontmatter = pageOpts.frontmatter;
        // Add content-page css class
        if (!frontmatter.pageClass) {
          frontmatter.pageClass = 'content-page';
        }
      }
    },
  ],
});

export default conf;
