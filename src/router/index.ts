import { createRouter, createWebHistory } from 'vue-router'
import Home from '~/pages/index.vue'
import Hi from '~/pages/hi/name.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/hi/:name',
      component: Hi,
      props: true
    }
  ],
})

export default router
