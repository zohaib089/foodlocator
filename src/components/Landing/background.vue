<template>
  <v-container class="bgclass" fluid>
    <v-row class="text-center">
      <v-col md="12" sm="12" lg="12"></v-col>

      <v-col md="12" sm="12" lg="12"></v-col>
      <v-col md="12" sm="12" lg="12"></v-col>
      <v-col md="12" sm="12" lg="12"></v-col>
      <v-col md="12" sm="12" lg="12"></v-col>
      <v-col md="12" sm="12" lg="12"></v-col>
      <v-col md="12" sm="12" lg="12"></v-col>
      <v-col md="12" sm="12" lg="12"></v-col>
      <v-col md="12" sm="12" lg="12"></v-col>
      <v-col md="12" sm="12" lg="12"></v-col>
      <v-col md="12" sm="12" lg="12"></v-col>
      <v-col md="12" sm="12" lg="12"></v-col>

      <v-col lg="4"></v-col>
      <v-col lg="4">
        <v-text-field
          solo
          bg-color="white"
          label="Enter your Zip/code or Address"
          placeholder="Enter your Zip/code or Address"
          append-inner-icon="mdi-magnify"
        class="rounded-lg"
        >
        </v-text-field>
         
      </v-col>

      <v-col lg="3"></v-col>
     
    </v-row>

    <v-row class="mt-10">
      <v-col lg="12" class="mt-12">
  <Vue3Marquee>
    <v-img height="200" width="300" src="../../assets/kfc.png" />
    <v-img height="200" width="300" src="../../assets/mc.png" />
    <v-img height="200" width="300" src="../../assets/bk.png" />
     <v-img height="200" width="300" src="../../assets/dm.png" />
    <v-img height="200" width="300" src="../../assets/sw.png" />
  </Vue3Marquee>

      </v-col>

    </v-row>
   
  </v-container>
</template>
    
<script>
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
export default {
  name: "BackGround",
components: {
    Vue3Marquee,
  },
  data: () => ({
    
  }),
 

  
};
</script>


<style>
.bgclass {
  height: 760px;
  background: url("../../assets/bg2.jpg") no-repeat center center fixed;
  background-size: cover;
}
</style>