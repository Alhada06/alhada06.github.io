// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Diogo Alhada',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'Diogo Alhada' }
      ],
    }
  },
    
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
      plugins:[
        '~/plugins/vue3-particles.ts'
      ],
      modules: [
        '@vueuse/nuxt','nuxt-icon','@nuxtjs/i18n',
      ],
      i18n: {
        strategy: 'no_prefix',
        
        langDir:'locales',
        locales:[{code:'en',name:"English",file:'en.json'
          
        },{code:'pt',name:'Portugês',file:'pt.json'}],
         defaultLocale: 'en',
        detectBrowserLanguage: {
          useCookie: true,
          cookieCrossOrigin: true,
          cookieKey: 'i18n_locale',
          redirectOn: 'root',  // recommended
        },
        // add `vueI18n` option to `@nuxtjs/i18n` module options
        vueI18n: {
        
       
          messages: {
            en: {
              welcome: 'Welcome'
            },
            pt: {
              welcome: 'Bem vindo'
            }
          }
        }
      }

})
