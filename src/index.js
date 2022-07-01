import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'landing',
    component: () => import(/* webpackChunkName: "about" */ './components/Landing/Landing.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import(/* webpackChunkName: "about" */ './components/Main/Main.vue')
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
