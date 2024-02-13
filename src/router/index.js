import { createRouter, createWebHistory } from 'vue-router'
import Music from '@/components/Music.vue'
const one = () => import("../components/one.vue")
const two = () => import("../components/two.vue")
const special = () => import("../components/special.vue")
const niah = () => import("../components/niah.vue")
const there = () => import("../components/there.vue")
const valentines = () => import("../components/valentines.vue")
const lesgo = () => import("../components/LESGO.vue")

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
    {
      path:'/special',
      name:'special',
      component: special
    },
    {
      path:'/niah',
      name:'niah',
      component: niah
    },
    {
      path:'/us',
      name:'us',
      component: there
    },
    {
      path:'/valentines',
      name:'valentines',
      component: valentines
    },
    {
      path:'/lesgooo',
      name:'lesgo',
      component: lesgo
    },


  ]
})

export default router
