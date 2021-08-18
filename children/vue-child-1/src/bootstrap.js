import { createApp } from 'vue';
import router from './router';
import App from './components/App';

const app = createApp(App)
    .use(router);