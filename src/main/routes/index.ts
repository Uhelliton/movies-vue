import { createRouter, createWebHistory } from 'vue-router'
import routerMovies from '../../presentation/pages/movie/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...routerMovies
  ]
})

export default router
