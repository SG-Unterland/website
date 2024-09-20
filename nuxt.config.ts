// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxtjs/i18n', '@vite-pwa/nuxt', '@nuxt/content', '@nuxthq/studio'],

  content: {
    api: {
      baseURL: '/api/content',
    },
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'github-light',
        // Theme used if `html.dark`
        dark: 'github-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai',
      },
    },
  },

  i18n: {
    lazy: true,
    defaultLocale: 'de',
    strategy: 'no_prefix',
    langDir: 'locales',
    locales: [
      { code: 'de', iso: 'de', file: 'de.json' },
      { code: 'en', iso: 'en', file: 'en.json' },
    ],
    vueI18n: './i18n.config.ts',
  },

  ui: {
    icons: ['heroicons', 'mdi', 'logos'],
  },

  runtimeConfig: {
    public: {
      studioTokens: '',
    },
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'SG Unterland',
      short_name: 'SG U',
      description: 'SG Unterland',
      theme_color: '#ffffff',
      lang: 'de',
      icons: [{
        src: 'pwa-64x64.png',
        sizes: '64x64',
        type: 'image/png',
      }, {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      }, {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      }, {
        src: 'maskable-icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      }, {
        src: 'apple-touch-icon-180x180.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'maskable',
      }],
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,jpg,svg,ico}'],
    },
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },

  compatibilityDate: '2024-09-20',
})