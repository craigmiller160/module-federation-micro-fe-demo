import { createApp } from 'vue';
import router from './router';
import App from './components/App';
import { createWebComponentVue } from '@mfdemo/create-web-component-vue';

const app = createApp(App)
    .use(router);

createWebComponentVue('vue-child-1', app);
