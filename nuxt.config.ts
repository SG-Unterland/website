// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: ["@nuxt/ui", "@nuxt/image", "@nuxtjs/i18n", "@vite-pwa/nuxt", "@nuxt/content", "@nuxthq/studio"],
  i18n: {
    lazy: true,
    defaultLocale: "en",
    strategy: "no_prefix",
    langDir: "locales",
    locales: [
      { code: "de", iso: "de", file: "de.json" },
      { code: "en", iso: "en", file: "en.json" },
    ],
    vueI18n: "./i18n.config.ts",
  },
  ui: {
    icons: ['heroicons', 'mdi', 'logos']
  },
  runtimeConfig: {
    public: {
     studioTokens: ""
    }
  },
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "SG Unterland",
      short_name: "SG U",
      description: "SG Unterland",
      theme_color: "#ffffff",
      lang: "de",
    },
    meta: {
      name: "SG Unterland",
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
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
  }
})
