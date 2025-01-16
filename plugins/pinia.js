// plugins/pinia.js
import { createPinia } from 'pinia';

export default defineNuxtPlugin(nuxtApp => {
  // Initialize and use Pinia in your app
  nuxtApp.vueApp.use(createPinia());
});
