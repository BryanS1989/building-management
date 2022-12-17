import { createRouter, createWebHistory } from 'vue-router';
import RoomsView from '../views/RoomsView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: (to) => {
                return 'rooms';
            },
        },
        {
            path: '/rooms',
            name: 'roomsList',
            component: RoomsView,
        },
    ],
});

export default router;
