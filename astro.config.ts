import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';
import { BASE_URL } from './src/config';

import node from '@astrojs/node';
import { spectreDark } from './src/ec-theme';

// https://astro.build/config
export default defineConfig({
  site: 'https://gearsl.github.io',
  base: BASE_URL,
  output: 'static',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: 'Ильяс Исмаилов',
      openGraph: {
        home: {
          title: 'Ильяс Исмаилов',
          description: 'Персональная страничка.'
        },
        blog: {
          title: 'Блог',
          description: 'Новости и посты на различные темы связанные с IT и системной аналитикой'
        },
        projects: {
          title: 'Проекты'
        }
      },
      giscus: {
        repository: 'louisescher/spectre',
        repositoryId: 'R_kgDONjm3ig',
        category: 'General',
        categoryId: 'DIC_kwDONjm3is4ClmBF',
        mapping: 'pathname',
        strict: true,
        reactionsEnabled: true,
        emitMetadata: false,
        lang: 'ru',
      }
    })
  ],
  // adapter: node({
  //   mode: 'standalone'
  // })
});