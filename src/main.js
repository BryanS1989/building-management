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
} from '@fortawesome/free-regular-svg-icons';

import { store } from './store/rooms.store';

library.add(faTrashCan, faPenToSquare, faPlusSquare);

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

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
