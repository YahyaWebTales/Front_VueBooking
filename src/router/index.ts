import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import HotelDetails from '../views/HotelDetails.vue';
import Admin from '../views/Admin.vue';
import { useUserStore } from '../stores/user';

const routes = [
    { path: '/', component: Home },
    { path: '/hotels/:id', component: HotelDetails },
    { path: '/login', component: Login },
    { path: '/admin', component: Admin }, 
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 🔥 Ajout d'un Guard Global (protection des routes)
router.beforeEach((to, _, next) => {
    const userStore = useUserStore();

    // Vérifie si la route nécessite un accès admin
    if (to.path === '/admin' && !userStore.isAdmin) {
        next('/login'); // Redirige si l'utilisateur n'est pas admin
    } else {
        next();
    }
});

export default router;
