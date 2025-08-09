// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "app/",
  compatibilityDate: "2025-07-15",
  modules: ["@nuxt/image", "@nuxt/ui", "@nuxtjs/i18n"],
  css: ["@/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
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
    redirectOn: "root"
  }
  },
});
