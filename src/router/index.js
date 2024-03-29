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
    },
    {
      path: '/verifyemail',
      name: 'verifyemail',
      component: () => import('../views/verifyEmail.vue')
    },
    {
      path: '/addProducts',
      name: 'addProducts',
      component: () => import('../views/addProducts.vue')
    },
    {
      path: '/shop',
      name: 'productPage',
      component: () => import('../views/ProductPage.vue')
    },
    {
      path: '/shop/:id',
      name: 'productDetails',
      component: () => import('../views/ProductDetails.vue')
    },
    {
      path: '/cart',
      name: 'CartDoc',
      component: () => import('../views/myCart.vue')
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: () => import('../views/checkOut.vue')
    }
  ]
})

export default router
