import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';

import './assets/main.css';
import localeES from './locale/es.json';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faTrashCan,
    faPenToSquare,
    faPlusSquare,
    faCircleXmark,
} from '@fortawesome/free-regular-svg-icons';
import {
    faPercent,
    faSpinner,
    faBuildingCircleExclamation,
    faCircleCheck,
    faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';

import { store } from './store/rooms.store';

import axios from 'axios';
import VueAxios from 'vue-axios';

library.add(
    faTrashCan,
    faPenToSquare,
    faPlusSquare,
    faPercent,
    faSpinner,
    faBuildingCircleExclamation,
    faCircleCheck,
    faCircleExclamation,
    faCircleXmark
);

const i18n = createI18n({
    locale: 'es',
    messages: {
        es: localeES,
    },
});

const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(store);
app.use(VueAxios, axios);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
