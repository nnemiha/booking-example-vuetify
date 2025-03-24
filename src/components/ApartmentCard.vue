<template>
  <v-card>
    <v-img :src="apartment.image" height="200px"></v-img>
    <v-card-title>{{ apartment.name }}</v-card-title>
    <v-card-subtitle>{{ apartment.price }} ₽/ночь</v-card-subtitle>
    <v-card-actions>
      <v-btn color="primary" @click="book">Забронировать</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['apartment'],
  methods: {
    book() {
      alert('Бронирование пока не работает 😃');
    },
  },
};
</script>