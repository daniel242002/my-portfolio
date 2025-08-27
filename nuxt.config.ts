// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "app/",
  app: {
    head: {
      title: "Nuxt App",
      htmlAttrs: {
        lang: "es",
      },
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
      ],
    },
  },
  compatibilityDate: "2025-07-15",
  modules: ["@nuxt/image", "@nuxt/ui", "@nuxtjs/i18n"],
  css: ["@/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: false,
    },
  },
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
    storageKey: "nuxt-color-mode",
  },
  i18n: {
    defaultLocale: "es",
    langDir: "locales",
    locales: [
      {
        code: "es",
        name: "Español",
        language: "es-ES",
        file: "es.json",
      },
      {
        code: "en",
        name: "English",
        language: "en-US",
        file: "en.json",
      },
    ],
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },

  image: {
    quality: 80,
    screens: {
      sm: 320,
      md: 640,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    },
  },
  runtimeConfig: {
    public: {
      emailjsServiceId: process.env.EMAILJS_SERVICE_ID,
      emailjsTemplateId: process.env.EMAILJS_TEMPLATE_ID,
      emailjsPublicKey: process.env.EMAILJS_PUBLIC_KEY,
    },
  },
});
