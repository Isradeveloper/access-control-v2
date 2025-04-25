import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../modules/common/pages/HomePage.vue'),
    },
    {
      path: '/monitoreo',
      name: 'monitoreo',
      component: () => import('../modules/common/pages/HomePage.vue'),
    },
    {
      path: '/crear',
      name: 'crear',
      component: () => import('../modules/common/pages/HomePage.vue'),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
});

export default router;
