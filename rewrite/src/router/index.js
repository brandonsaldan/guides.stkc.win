import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DelayOTA from '../views/DelayOTA.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/delayota',
    name: 'DelayOTA',
    component: DelayOTA
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
