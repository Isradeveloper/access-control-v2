import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/procesos',
    name: 'procesos',
    children: [
      {
        path: 'duenos-proceso',
        name: 'duenos-proceso',
        component: () => import('@/modules/procesos/pages/DuenoProcesoPage.vue'),
      },
    ],
  },
];

export default routes;
