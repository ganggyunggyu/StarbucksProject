import { createRouter, createWebHistory } from 'vue-router';
import Landing from '@views/Landing.vue';
import Event from '@views/Event.vue';
const routes = [
  { path: '/', component: Landing, name: 'Landing' },
  { path: '/event', component: Event, name: 'Event' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
