import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import Lara from '@primeuix/themes/lara';
import PrimeVue from 'primevue/config';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Lara,
    options: {
      darkModeSelector: false || 'none',
    },
  },
});

app.mount('#app');
