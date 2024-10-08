import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Front/Pages/Home.vue';
import About from '../components/Front/Pages/About.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
