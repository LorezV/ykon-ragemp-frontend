import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'hud',
      path: '/',
      component: () => import('@/views/Hud/HudView.vue')
    },
    {
      path: '/auth',
      children: [
        {
          name: 'login',
          path: '/login',
          component: () => import('@/views/Auth/AuthLoginView.vue')
        },
        {
          name: 'register',
          path: '/register',
          component: () => import('@/views/Auth/AuthRegisterView.vue')
        }
      ]
    }
  ]
})

export default router
