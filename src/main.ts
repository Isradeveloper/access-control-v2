import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import router from './router';
import Ripple from 'primevue/ripple';
import StyleClass from 'primevue/styleclass';
import { AccessControlTheme } from './assets/theming';
import Tooltip from 'primevue/tooltip';
import { VueQueryPlugin } from '@tanstack/vue-query';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: AccessControlTheme,
    options: {
      darkModeSelector: '.dark',
    },
  },
});

VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        staleTime: 1 * 60 * 1000,
      },
    },
  },
});

app.directive('ripple', Ripple);
app.directive('styleclass', StyleClass);
app.directive('tooltip', Tooltip);
app.mount('#app');
