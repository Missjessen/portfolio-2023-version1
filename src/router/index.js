import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
  
    {
      path: '/om-mig',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/portfolie',
      name: 'portfolie',
      component: () => import('../views/PortfolieView.vue')
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: () => import('../views/KontaktView.vue')
    },
    {
      path: '/portfoliodetail/:id',
      name: 'portfoliodetail',
      component: () => import('../views/PortfolioDetail.vue'),
      props: true
    }
  ]

  
})



export default router


