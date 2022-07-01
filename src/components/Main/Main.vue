<template>
  <v-card>
    <v-app-bar prominent>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-btn
        style="backgroundColor: purple"
        color="white"
        rounded
        class="mr-2"
        elevation="24"
      >
        Delivery
      </v-btn>
      <v-btn>Pick up</v-btn>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            ASAP
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      to
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            Turin
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>
      <v-toolbar-title
        style="display: contents !important; width: 200px !important"
      >
        <v-img
          :src="require('../../assets/logo.png')"
          width="200"
          height="200"
        />
      </v-toolbar-title>
      <div class="search-container ml-12">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          class="search-input"
        />
        <a href="#" class="search-btn">
          <v-icon color="success">mdi-magnify</v-icon>
        </a>
      </div>

      <v-spacer></v-spacer>
      <v-btn style="backgroundColor: red" rounded class="mr-2" elevation="24">
        <v-icon style="color: white">mdi-cart</v-icon>
      </v-btn>
      <v-btn
        style="backgroundColor: orange"
        color="white"
        rounded
        class="mr-2"
        elevation="24"
      >
        Sign Up
      </v-btn>
      <v-btn
        style="backgroundColor: #00897b"
        color="white"
        rounded
        elevation="24"
      >
        Login
      </v-btn>
    </v-app-bar>
    <v-layout>
      <v-navigation-drawer v-model="drawer" absolute>
        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            title="Home"
            value="home"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-forum"
            title="About"
            value="about"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 250px">
        <v-card>
          <v-container>
            <Carousel :settings="settings" :breakpoints="breakpoints">
              <Slide style="width:170px" :key="1">
                <div  class="carousel__item">
                  <v-chip
                    large
                    class="pa-5"
                    style="height: 60px;"
                    outlined
                  >
                    <img
                      class="ml-n6"
                      :src="require('../../assets/Tile_Convenience.svg')"
                    />
                    Convenience
                  </v-chip>
                </div>
              </Slide>
              <Slide style="width:160px" :key="2">
                <div class="carousel__item">
                  <v-chip
                    large
                    class="pa-5"
                    style="height: 60px;"
                    outlined
                  >
                    <img
                      class="ml-n6"
                      :src="require('../../assets/Tile_Grocery.svg')"
                    />
                    Grocery
                  </v-chip>
                </div>
              </Slide>
                <Slide :key="2">
                <div class="carousel__item">
                  <v-chip
                    large
                    class="pa-5"
                    style="height: 60px; width:200px"
                    outlined
                  >
                    <img
                      class="ml-n6"
                      :src="require('../../assets/Tile_Grocery.svg')"
                    />
                    Drinks
                  </v-chip>
                </div>
              </Slide>
               <Slide  :key="2">
                <div class="carousel__item">
                  <v-chip
                    large
                    class="pa-5"
                    style="height: 60px;width:200px "
                    outlined
                  >
                    <img
                      class="ml-n6"
                      :src="require('../../assets/Tile_Grocery.svg')"
                    />
                    Pets
                  </v-chip>
                </div>
              </Slide>
               <Slide :key="2">
                <div class="carousel__item">
                  <v-chip
                    large
                    class="pa-5"
                    style="height: 60px; width:200px"
                    outlined
                  >
                    <img
                      class="ml-n6"
                      :src="require('../../assets/Tile_Grocery.svg')"
                    />
                   Offers
                  </v-chip>
                </div>
              </Slide>
               <Slide :key="2">
                <div class="carousel__item">
                  <v-chip
                    large
                    class="pa-5"
                    style="height: 60px;width:200px "
                    outlined
                  >
                    <img
                      class="ml-n6"
                      :src="require('../../assets/Tile_Grocery.svg')"
                    />
                    Retail
                  </v-chip>
                </div>
              </Slide>
                <Slide :key="2">
                <div class="carousel__item">
                  <v-chip
                    large
                    class="pa-5"
                    style="height: 60px; width:200px"
                    outlined
                  >
                    <img
                      class="ml-n6"
                      :src="require('../../assets/Tile_Grocery.svg')"
                    />
                   Flowers
                  </v-chip>
                </div>
              </Slide>
                              <Slide :key="2">
                <div class="carousel__item">
                  <v-chip
                    large
                    class="pa-5"
                    style="height: 60px;width:200px "
                    outlined
                  >
                    <img
                      class="ml-n6"
                      :src="require('../../assets/Tile_Grocery.svg')"
                    />
                   Taste the Nation
                  </v-chip>
                </div>
              </Slide>
                              <Slide :key="2">
                <div class="carousel__item">
                  <v-chip
                    large
                    class="pa-5"
                    style="height: 60px; width:200px"
                    outlined
                  >
                    <img
                      class="ml-n6"
                      :src="require('../../assets/Tile_Grocery.svg')"
                    />
                   Gifts
                  </v-chip>
                </div>
              </Slide>

              <template #addons>
                <Navigation />
              </template>
            </Carousel>
          </v-container>
        </v-card>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";


import "vue3-carousel/dist/carousel.css";
export default {
  components: {
    Carousel,
    Slide,
    Navigation,
   
  },
  data: () => ({
    drawer: false,
    group: null,
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    slides: [
      {
        id: 1,
        name: "convenience",
        path: "../../assets/Tile_Convenience.svg",
      },
    ],
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: "start",
      },
    },
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>



<style>
#ip2 {
  border-radius: 25px;
  border: 2px solid #609;
  padding: 20px;
  width: 200px;
  height: 15px;
}

.search-container {
  margin-left: 40px;
  height: 30px;
  border-radius: 30px;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.5s;
  /*box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
    inset -7px -7px 10px 0px rgba(0,0,0,.1),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
   text-shadow:  0px 0px 6px rgba(255,255,255,.3),
              -4px -4px 6px rgba(116, 125, 136, .2);
  text-shadow: 2px 2px 3px rgba(255,255,255,0.5);*/
  box-shadow: 2px 2px 2px 0 rgba(255, 255, 255, 0.3),
    -2px -2px 3px 0 rgba(116, 125, 136, 0.2),
    inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
}

.search-container:hover > .search-input {
  width: 200px;
}

.search-container .search-input {
  background: transparent;
  border: none;
  outline: none;
  width: 0px;
  font-weight: 500;
  font-size: 16px;
  transition: 0.8s;
}

.search-btn {
  text-decoration: none;
}

@keyframes hoverShake {
  0% {
    transform: skew(0deg, 0deg);
  }
  25% {
    transform: skew(5deg, 5deg);
  }
  75% {
    transform: skew(-5deg, -5deg);
  }
  100% {
    transform: skew(0deg, 0deg);
  }
}

.search-container:hover {
  animation: hoverShake 0.12s linear 3;
}
</style>