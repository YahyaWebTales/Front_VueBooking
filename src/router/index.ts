import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/hotels/:id',
      name: 'hotel-details',
      component: () => import('../views/HotelDetails.vue')
    }
  ]
})

export default router