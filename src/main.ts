console.warn('Vue3 Project Bootstrap SPA initialized');
console.warn('Printing environment variables...');
console.warn(import.meta.env);

import { createApp } from 'vue';
import App from '@/App.vue';
import { createPinia } from 'pinia';
import i18n from '@/plugins/i18n';

createApp(App).use(i18n).use(createPinia()).mount('#vue3-proj-bootstrap');
