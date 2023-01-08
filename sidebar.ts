import type { SidebarConfig } from '@vuepress/theme-default'
import { getFiles } from "./navbar";

export const sidebar: SidebarConfig = {
  '/guide/': [
    '/guide/getting-started/',
    {
      text: 'Installation',
      link: '/guide/installation/',
    },
    {
      text: 'Configuration',
      link: '/guide/configuration/',
/*      children: [
        '/guide/configuration/adapter-settings.md',
      ] */
    },
    {
      text: 'Flashing and updating',
      link: '/guide/flashing-and-updating/',
      children: [
        ...getFiles('guide/flashing-and-updating'),
      ]      
    },
    {
      text: 'Multiple adapters setup',
      link: '/guide/multiple-adapters-setup/',
      children: [
        ...getFiles('guide/multiple-adapters-setup'),
      ]      
    },
    {
      text: 'ESPHome Bluetooth proxy',
      link: '/guide/bt-proxy/',
      children: [
        ...getFiles('guide/bt-proxy'),
      ]      
    },
    {
      text: 'FAQ and Lifehacks',
      link: '/guide/faq-and-lifehacks/',
    },
  ],
};
