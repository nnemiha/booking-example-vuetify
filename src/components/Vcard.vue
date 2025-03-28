<template>
  <v-container class="mb-12">
    <v-row class="g-6">
      <v-col
        v-for="(item, index) in cards"
        :key="index"
        cols="12" sm="6" md="4"
        class="d-flex justify-center mb-6"
      >
        <v-scroll-x-transition>
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              class="mx-auto pa-4"
              max-width="344"
              v-bind="props"
              elevation="10"
              @click="selectedCard = item"
            >
              <v-img :src="item.image"></v-img>

              <v-card-text>
                <h2 class="text-h6 text-primary">{{ item.title }}</h2>
                {{ item.description }}
              </v-card-text>

              <v-card-title>
                <v-rating :model-value="item.rating" class="me-2" color="orange" density="compact" hover></v-rating>
                <span class="text-primary text-subtitle-2">{{ item.reviews }} Reviews</span>
              </v-card-title>

              <v-overlay :model-value="!!isHovering" class="align-center justify-center" scrim="#036358" contained>
                <v-btn variant="flat" @click="selectedCard = item">See more info</v-btn>
              </v-overlay>
            </v-card>
          </v-hover>
        </v-scroll-x-transition>
      </v-col>
    </v-row>

    <!-- Диалоговое окно -->
    <v-dialog v-model="selectedCard" max-width="500">
      <v-card v-if="selectedCard">
        <v-img :src="selectedCard.image" height="250px" cover></v-img>

        <v-card-title>{{ selectedCard.title }}</v-card-title>

        <v-card-subtitle class="pt-4">
          Рейтинг: 
          <v-rating :model-value="selectedCard.rating" color="orange" density="compact" readonly></v-rating>
        </v-card-subtitle>

        <v-card-text>
          <p>{{ selectedCard.description }}</p>
          <p>Отзывы: {{ selectedCard.reviews }}</p>
        </v-card-text>

        <v-card-actions>
          <v-btn color="blue-darken-2" text="Закрыть" @click="selectedCard = null"></v-btn>
          <v-btn color="orange" text="Забронировать">Забронировать</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "V",
  data() {
    return {
      selectedCard: null,
      cards: [
        {
          title: "Студия у ТЦ МЕГА",
          description: "Удобная семейная студия",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrP_9Br5ereICryHflB4Rf957wBUpyhiUxA&s",
          rating: 4,
          reviews: 64,
        },
        {
          title: "Квартира на ленинском проспекте",
          description: "Одина из лучших квартир в калининграде, рядом центр.",
          image: "https://journal.totdom.com/upload/webp/100/upload/iblock/717/nm96wp6yyqkqdss9imiakzoamss643fj/0-apartamenty-chto-eto.webp",
          rating: 5,
          reviews: 120,
        },
        {
          title: "Квартира у Рыбной деревни",
          description: "Отдых в горах с потрясающим видом.",
          image: "https://cdn.mskguru.ru/uploads/news/spros-na-apartamenty-moskve-v-pervom-kvartale-zametno-snizilsja_l.jpg",
          rating: 4.5,
          reviews: 89,
        },
        {
          title: "Квартира в косме",
          description: "Не квартира а исчадие ада.",
          image: "https://img.samoletplus.ru/insecure/plain/s3://smltplus-public-media/article-block-images/5e1c171d363845e0a747827555b7e094.jpg",
          rating: 5,
          reviews: 150,
        },
        {
          title: "Студия на шоссейном",
          description: "Удобная студия для 2х человек.",
          image: "https://content.cdn-cian.ru/realty/articles/content/33366/Fotosearch_k6202800.jpg",
          rating: 4.7,
          reviews: 95,
        },
        {
          title: "Студия КРУЭЛЛА",
          description: "студия ввиде КРУЭЛЛЫ.",
          image: "https://content.cdn-cian.ru/realty/articles/content/36585/3982790.jpg",
          rating: 4.3,
          reviews: 73,
        },
      ],
    };
  },
  methods: {
    // Обработчик для перехода с карточки
    selectCard(item) {
      this.selectedCard = item;
    }
  }
};
</script>

<style scoped>
.v-card {
  border-radius: 15px;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
.v-card:hover {
  transform: translateY(-5px);
}
</style>
