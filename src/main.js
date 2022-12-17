import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';

import './assets/main.css';
import localeES from './locale/es.json';

const i18n = createI18n({
    locale: 'es',
    messages: {
        es: localeES,
    },
});

const app = createApp(App);

app.use(router);
app.use(i18n);

app.mount('#app');
