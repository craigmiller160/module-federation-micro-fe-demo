import { createRouter, createWebHistory } from 'vue-router';
import UserWrapper from '../components/UserWrapper';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/:userId',
            name: 'UserWrapper',
            component: UserWrapper,
            props: true
        },
        {
            path: '/',
            redirect: '/0'
        }
    ]
});