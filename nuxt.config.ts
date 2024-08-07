// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // ssr: false,
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

  modules: [
    "@vueuse/nuxt",
    "nuxt-icon",
    "@nuxtjs/i18n",
    "nuxt-headlessui",
    "@nuxtjs/google-fonts",
    "@twicpics/components/nuxt3",
    // "@nuxt/content",
    "nuxt-graphql-client",
  ],
  // content: {
  //   markdown: {
  //     // Object syntax can be used to override default options
  //     remarkPlugins: {
  //       // Override remark-emoji options
  //       "remark-emoji": {
  //         emoticon: true,
  //       },
  //       // Disable remark-gfm
  //       "remark-gfm": false,
  //       // Add remark-oembed
  //     },
  //   },
  // },
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
      { code: "pt", name: "Português", file: "pt.json" },
    ],

    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      // cookieCrossOrigin: true,
      cookieKey: "i18n_locale",
      redirectOn: "root", // recommended
    },
    // add `vueI18n` option to `@nuxtjs/i18n` module options
    // vueI18n: {
    //   messages: {
    //     en: {
    //       welcome: "Welcome",
    //     },
    //     pt: {
    //       welcome: "Bem vindo",
    //     },
    //   },
    // },
  },
  headlessui: {
    prefix: "Headless",
  },
  build: {
    transpile: ["@headlessui/vue"],
  },
  "graphql-client": {
    clients: {
      default: {
        host:
          "https://graphql.contentful.com/content/v1/spaces/" +
          process.env.NUXT_CONTENTFUL_SPACE,
        retainToken: true,

        token: {
          type: "Bearer",
          name: "Authorization",
          value: process.env.NUXT_CONTENTFUL_PUBLIC_ACCESS_TOKEN,
        },
        headers: {
          "Content-Type": "application/json",
        },
        codegenHeaders: {
          "Content-Type": "application/json",
        },
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
      twicpics: { domain: "https://alhada06-github.twic.pics" },
    },
  },
});
