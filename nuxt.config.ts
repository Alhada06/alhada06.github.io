// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
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
        '@vueuse/nuxt','nuxt-icon',  
      ],
   

})
