<template>
  <v-app-bar
      prominent
    >
   

      <v-toolbar-title>
           <v-img
          :src="require('../../assets/logo.png')"

          width="200"
          height="200"
        />
      </v-toolbar-title>
    <v-spacer></v-spacer>
   
      <v-btn style="backgroundColor:orange" color="white" rounded class="mr-2" elevation="24">
        Sign Up
      </v-btn>
      <v-btn style="backgroundColor:#00897B" color="white" rounded elevation="24">
        Login
      </v-btn>
    </v-app-bar>
        <BackGround/>
      <Services/>
      <TopFood/>
</template>

<script>
import BackGround from './background.vue'
import Services from './Services.vue'
import TopFood from './TopFood.vue'

export default {
  name: 'Landing',

  components: {
    BackGround,
    Services,
    TopFood,
},

  data: () => ({
    //
  }),
}
</script>