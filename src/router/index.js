import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/equipe',
    name: 'Team',
    component: () => import('@/views/TeamView.vue'),
  },
  {
    path: '/livro/:id',
    name: 'Team',
    component: () => import('@/views/HomeView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;