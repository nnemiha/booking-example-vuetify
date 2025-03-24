<template>
  <v-carousel
    cycle
    height="100vh"
    hide-delimiter-background
    show-arrows
    interval="5000"
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
    >
      <v-container class="fill-height d-flex align-center justify-center">
        <div class="text-overlay">
          <h2>{{ item.title }}</h2>
          <p>{{ item.text }}</p>
        </div>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "MainCarousel",
  data() {
    return {
      items: [
        {
          src: "https://s1.stc.all.kpcdn.net/family/wp-content/uploads/2022/11/top-chto-takoe-apartamenty-960x540-1-960x540.jpg",
          title: "Лучшие апартаменты в Калининграде!",
          text: "Современные и уютные квартиры.",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HST-SM4.jpeg",
          title: "Космический вид",
          text: "Великолепный вид на звезды.",
        },
        {
          src: "https://static2.banki.ru/ugc/27/84/73/8d/10988987.jpg",
          title: "Роскошные номера",
          text: "Элитные апартаменты в центре.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.text-overlay {
  background: rgba(0, 0, 0, 0.5);
  padding: 20px 40px;
  border-radius: 12px;
  color: #fff;
  text-align: center;
  max-width: 600px;
}

h2 {
  font-size: 32px;
  margin-bottom: 10px;
}

p {
  font-size: 18px;
}
</style>
