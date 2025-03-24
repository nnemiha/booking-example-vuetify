<template>
  <v-carousel
    cycle
    hide-delimiter-background
    height="100vh"
    show-arrows
    interval="5000"
  >
    <v-carousel-item
      v-for="(item, i) in images"
      :key="i"
      :src="item"
      cover
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Vcarousel2",
  data() {
    return {
      images: [
        "https://placekitten.com/1920/1080",
        "https://placebear.com/1920/1080",
        "https://loremflickr.com/1920/1080/forest",
      ],
    };
  },
};
</script>

<style scoped>
.v-carousel-item {
  background-size: cover !important;
  background-position: center !important;
}
</style>

  
