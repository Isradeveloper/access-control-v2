import { createRouter, createWebHistory } from 'vue-router';
import ProcesosRoutes from '@/modules/procesos/router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../modules/common/pages/HomePage.vue'),
    },
    ...ProcesosRoutes,
  ],
});

export default router;
