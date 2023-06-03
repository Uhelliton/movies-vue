import MovieIndex from './views/MovieIndex.vue'

const router = [
  {
    path: '/',
    name: 'movie.index',
    component: MovieIndex
  },
  {
    path: '/filmes/:id',
    name: 'movie.detail',
    component: () => import('./views/MovieDetails.vue')
  }
]

export default router
