import type { NavbarConfig } from '@vuepress/theme-default'
import { resolve } from 'path';
import { readdirSync } from 'fs';

export function getFiles(dir: string) {
  const base = resolve(__dirname, 'docs');
  return readdirSync(resolve(base, dir))
    .filter(file => file.endsWith('.md') && file !== 'README.md')
    .map(file => `/${ dir }/${ file }`);
}

export const navbar: NavbarConfig = [
  {
    text: 'SLZB-06 MANUAL',
    children: [
      '/guide/getting-started/',
      '/guide/installation/',
      '/guide/configuration/',
      '/guide/flashing-and-updating/',
      '/guide/multiple-adapters-setup/',
      '/guide/bt-proxy/',
      '/guide/faq-and-lifehacks/',
    ]
  },
  {
    text: 'Product page',
    link: 'https://smlight.tech/product/slzb-06',
  },
  {
    text: 'Support',
    children: [
      {
        text: 'SUBMIT ticket for Support',
        link: 'https://smlight.tech/support/',
      },
      {
        text: 'ESP32 Firmware Forum',
        link: 'https://github.com/smlight-dev/slzb-06-firmware/discussions',
      },
      {
        text: 'ESP32 Firmware Issues',
        link: 'https://github.com/smlight-dev/slzb-06-firmware/issues',
      },
      {
        text: 'Edit manual on Github',
        link: 'https://github.com/smlight-dev/slzb-06-manual',
      },
    ],
  },
  {
    text: 'Support Ukraine',
    link: 'https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi'
  }
]
