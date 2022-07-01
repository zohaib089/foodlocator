<template>
  <v-app>
   
    <v-main>
     <router-view />
    <FooterVue/>
    </v-main>
  </v-app>
</template>

<script>
import FooterVue from './components/Footer.vue'
export default {
  name: 'App',
  components: {
   FooterVue
},

  data: () => ({
    //
      group: null,
    drawer:false
  }),
}
</script>
