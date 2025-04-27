import type { RouteRecordRaw } from 'vue-router';

export const ProcesosRoute: RouteRecordRaw = {
  path: '/procesos',
  name: 'procesos',
  meta: {
    menu: true,
  },
  children: [
    {
      path: 'duenos-proceso',
      name: 'duenos-proceso',
      component: () => import('@/modules/procesos/pages/DuenoProcesoPage.vue'),
    },
  ],
};
