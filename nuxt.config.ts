// nuxt.config.ts
export default defineNuxtConfig({
  css: [
    'bootstrap/dist/css/bootstrap.min.css', 
    'bootstrap-icons/font/bootstrap-icons.css',
    '~/assets/css/styles.css',
  ],
  plugins: [ '~/plugins/pinia.js',  // Pinia initialization
    '~/plugins/bootstrap.js' ,
  '~/plugins/firebase.js',]
    ,
    
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
})
