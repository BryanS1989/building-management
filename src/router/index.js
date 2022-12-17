import { createRouter, createWebHistory } from 'vue-router';
import RoomsView from '../views/RoomsView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'roomsList',
            component: RoomsView,
        },
    ],
});

export default router;
