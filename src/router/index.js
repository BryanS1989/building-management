import { createRouter, createWebHistory } from 'vue-router';
import RoomsView from '../views/RoomsView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: (to) => {
                return 'rooms/1';
            },
        },
        {
            path: '/rooms/:floor',
            name: 'roomsList',
            component: RoomsView,
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: (to) => {
                return '/';
            },
        },
    ],
});

export default router;
