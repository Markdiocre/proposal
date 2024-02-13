import { createRouter, createWebHistory } from 'vue-router'
import Music from '@/components/Music.vue'
const one = () => import("../components/one.vue")
const two = () => import("../components/two.vue")

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'music',
      component: Music
    },
    {
      path:'/1',
      name:'one',
      component: one
    },
    {
      path:'/2',
      name:'two',
      component: two
    },


  ]
})

export default router
