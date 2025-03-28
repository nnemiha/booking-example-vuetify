<template>
  <v-card height="500" flat>
    <template v-slot:text>
      <v-toolbar rounded="lg" border floating>
        <div class="px-4">
          <v-text-field
            v-model="searchQuery"
            @input="onSearchInput"
            density="compact"
            placeholder="Search"
            prepend-inner-icon="mdi-magnify"
            variant="solo"
            width="200"
            flat
            hide-details
            single-line
          ></v-text-field>
        </div>

        <template v-slot:append>
          <v-btn color="medium-emphasis" density="comfortable" icon="mdi-crosshairs-gps"></v-btn>
          <v-btn class="ms-1" color="medium-emphasis" density="comfortable" icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-toolbar>
    </template>

    <div id="map" style="height: 400px;"></div>
  </v-card>
</template>

<script>
import L from 'leaflet';

export default {
  name: 'Floatingwithsearch',
  data() {
    return {
      searchQuery: '',
      markers: [],
      streetLocations: [
        { name: 'Ленинградская улица', lat: 54.7114, lng: 20.4522 },
        { name: 'Пролетарская улица', lat: 54.7130, lng: 20.4689 },
        { name: 'Улица Дзержинского', lat: 54.7230, lng: 20.4528 },
        { name: 'Улица Горького', lat: 54.7155, lng: 20.4630 },
        { name: 'Улица Театральная', lat: 54.7108, lng: 20.4520 },
        { name: 'Улица Черняховского', lat: 54.7220, lng: 20.4512 }
      ]
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const map = L.map('map').setView([54.7114, 20.4522], 14); // Центр Калининграда

      // Добавление слоя OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

      // Добавляем метки для улиц
      this.streetLocations.forEach((location) => {
        const marker = L.marker([location.lat, location.lng]).addTo(map);
        marker.bindPopup(location.name);
        this.markers.push(marker);
      });
    },
    onSearchInput() {
      this.markers.forEach((marker) => {
        if (marker._popup._content.toLowerCase().includes(this.searchQuery.toLowerCase())) {
          marker.setRadius(10);
          marker.setStyle({
            color: 'red'
          });
        } else {
          marker.setRadius(5); // Сбросить размер метки
          marker.setStyle({
            color: 'blue'
          });
        }
      });
    }
  }
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
