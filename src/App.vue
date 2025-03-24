<template>
  <v-app>
    <v-main>
      <Navbar />
      <v-carousel2 />
      <v-container>
        <Floatingwithsearch />
        <VBtn />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Floatingwithsearch from './components/Floatingwithsearch.vue'
import VBtn from './components/v-btn.vue'
import VCarousel2 from './components/v-carousel2.vue'
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Floatingwithsearch,
    VBtn,
    VCarousel2,
  }
}
</script>


