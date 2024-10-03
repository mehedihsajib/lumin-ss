import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../components/Admin/Pages/Dashboard.vue';
import Zone from '../components/Admin/Pages/Zone.vue';

const routes = [
    {
        path: '/admin/dashboard',
        name: 'admin.dashboard',
        component: Dashboard
    },
    {
        path: '/admin/zone',
        name: 'admin.zone',
        component: Zone
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
