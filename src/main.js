import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import Vue3Marquee from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import router from './index'


loadFonts()



 const app =  createApp(App)
  app.use(vuetify);
  app.use(Vue3Marquee);
  app.use(router)
  app.mount('#app')
