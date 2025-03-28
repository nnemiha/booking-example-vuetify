<template>
  <div class="carousel-container">
    <!-- Текст и кнопка поверх карусели -->
    <div class="hero-content">
      <h1>Апартаменты и Квартиры в Калининграде</h1>
      <p>Аренда стильных дизайнерских апартаментов и квартир премиум-класса посуточно</p>
      <v-btn class="booking-btn" @click="scrollToBottom">Забронировать</v-btn>
    </div>

    <!-- Карусель с картинками -->
    <v-carousel cycle hide-delimiter-background height="100vh" show-arrows interval="5000">
      <v-carousel-item v-for="(item, i) in images" :key="i" :src="item" cover></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "Vcarousel2",
  data() {
    return {
      images: [
        "https://skyview.ru/upload/resize_cache/iblock/f49/1148_700_1/pve10j7i8j7pd3lgrip8ogubdyb9m9dr.webp",
        "https://static2.banki.ru/ugc/27/84/73/8d/10988987.jpg",
        "https://skyview.ru/upload/iblock/58c/3jepnhwy68c0g1cg7zoj61p5xf7yvbv0.jpeg",
      ],
    };
  },
  methods: {
    scrollToBottom() {
      const start = window.scrollY;
      const end = document.body.scrollHeight;
      const duration = 800; // Время анимации в мс
      const startTime = performance.now();

      const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, start + (end - start) * progress);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    },
  },
};
</script>

<style scoped>
.carousel-container {
  position: relative;
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
}

.booking-btn {
  margin-top: 20px;
  background: #7b1fa2;
  color: white;
}
</style>
