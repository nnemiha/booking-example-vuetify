import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import 'leaflet/dist/leaflet.css';


createApp(App).use(vuetify).mount('#app');