<template>
  <v-app-bar app dense dark color="black" fixed>
    <v-toolbar-title>Apartic</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text to="/">Главная</v-btn>
    <v-btn text to="/booking">Забронировать</v-btn>
    <v-btn text to="/contacts">Контакты</v-btn>
    <v-spacer></v-spacer>
    <div>+7 (906) 211-30-21</div>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
};
</script>


