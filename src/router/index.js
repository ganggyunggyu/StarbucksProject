import { createRouter, createWebHistory } from 'vue-router';
import Landing from '@views/Landing.vue';
import Event from '@views/Event.vue';
import Loading from '@views/Loading.vue';
import Capture from '@views/Capture.vue';
import Complate from '@views/Complate.vue';
const routes = [
  { path: '/', component: Landing, name: 'Landing' },
  { path: '/event', component: Event, name: 'Event' },
  { path: '/loading', component: Loading, name: 'Loading' },
  { path: '/capture', component: Capture, name: 'Capture' },
  { path: '/complate', component: Complate, name: 'Complate' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
