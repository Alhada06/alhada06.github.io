// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  //  ssr:false,
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Diogo Alhada",
      meta: [
        // <meta name="description" content="My amazing site">
        { name: "description", content: "Diogo Alhada" },
      ],
    },
  },

  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ["~/plugins/vue3-particles.ts"],
  modules: [
    "@vueuse/nuxt",
    "nuxt-icon",
    "@nuxtjs/i18n",
    "nuxt-headlessui",
    "@nuxtjs/apollo",
    "@nuxtjs/google-fonts",
    "@twicpics/components/nuxt3",
  ],
  googleFonts: {
    families: {
      "Roboto+Mono": true,
    },
    download: true,
  },

  i18n: {
    strategy: "no_prefix",

    langDir: "locales",
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "pt", name: "Portugês", file: "pt.json" },
    ],
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieCrossOrigin: true,
      cookieKey: "i18n_locale",
      redirectOn: "root", // recommended
    },
    // add `vueI18n` option to `@nuxtjs/i18n` module options
    vueI18n: {
      messages: {
        en: {
          welcome: "Welcome",
        },
        pt: {
          welcome: "Bem vindo",
        },
      },
    },
  },
  headlessui: {
    prefix: "Headless",
  },
  build: {
    transpile: ["@headlessui/vue"],
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint:
          "https://graphql.contentful.com/content/v1/spaces/" +
          process.env.NUXT_CONTENTFUL_SPACE,
        httpLinkOptions: {
          headers: {
            authorization:
              "Bearer " + process.env.NUXT_CONTENTFUL_PUBLIC_ACCESS_TOKEN,
            "Content-Type": "application/json",
          },
          credentials: "same-origin",
        },
        tokenName: "apollo-token",
      },
    },
  },
  twicpics: {
    domain: "https://alhada06-github.twic.pics",
  },

  runtimeConfig: {
    NUXT_SENDGRID_API_KEY: process.env.NUXT_SENDGRID_API_KEY,
    public: {
      contentfulSpace: process.env.NUXT_CONTENTFUL_SPACE,
      contentfulPublicAccessToken:
        process.env.NUXT_CONTENTFUL_PUBLIC_ACCESS_TOKEN,
    },
  },
});
