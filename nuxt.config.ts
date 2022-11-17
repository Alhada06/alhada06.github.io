import { Static } from "nuxt/dist/app/compat/capi";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
     
  //  app:{
  //   baseURL:'/alhada06.github.io/',

    //here we go again
  //  },


})
