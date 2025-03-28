<template>
  <v-app-bar app height="100" dark color="black" fixed>
    <v-container class="d-flex align-center">
      <v-toolbar-title class="text-h4">Apartic</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <v-btn text to="/" class="text-h6 mx-2">Главная</v-btn>
        <v-btn text to="/about" class="text-h6 mx-2">О нас</v-btn>
        <v-btn text to="/contacts" class="text-h6 mx-2">Контакты</v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
