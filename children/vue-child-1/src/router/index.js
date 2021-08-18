import { createRouter, createWebHistory } from 'vue-router';
import UserDetails from '../components/UserDetails';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/:userId',
            name: 'UserDetails',
            component: UserDetails
        },
        {
            path: '/',
            redirect: '/0'
        }
    ]
});