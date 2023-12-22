import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SignUp from '../views/Signup'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'LogIn',
      component: () => import('../views/LogIn.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    }
  ]
})

export default router
