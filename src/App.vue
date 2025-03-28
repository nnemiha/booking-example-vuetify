<template>
  <v-app>
    <v-main>
      <Navbar />
      <v-carousel2 />
      <Vline/>
      <Vcard/>
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
import Vcard from './components/Vcard.vue'
import Vline from './components/line.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Floatingwithsearch,
    VBtn,
    VCarousel2,
    Vcard,
    Vline,
  },
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>



