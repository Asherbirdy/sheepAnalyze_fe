import process from 'node:process'
import { defineNuxtConfig } from 'nuxt/config'
import { pwa } from './app/config/pwa'
import { appDescription } from './app/constants/index'
import { ClientBase } from './app/enum'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@nuxt/ui',
  ],
  components: false, // 不使用自動引入

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1,user-scalable=no',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        // { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        // { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],
    },
  },
  css: ['./app/assets/css/main.css'],
  colorMode: {
    preference: 'light', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
  },

  runtimeConfig: {
    public: {
      ENVIRONMENT: process.env.NUXT_PUBLIC_ENVIRONMENT,
      API_URL: process.env.NUXT_PUBLIC_API_URL,
    },
  },

  alias: {
    '@': './app',
  },

  routeRules: {
    [`${ClientBase}/**`]: { ssr: false },
    '/lands/**': { isr: 60 * 30 },
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  compatibilityDate: '2024-08-14',

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      // routes: ['/'],
      ignore: ['/hi'],
    },
  },
  // vite: {
  //   build: {
  //     sourcemap: false,
  //   },
  // },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  pwa,

  vueuse: { ssrHandlers: true },
})
