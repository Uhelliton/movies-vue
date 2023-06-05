import MovieIndex from './views/MovieIndex.vue'

const router = [
  {
    path: '/',
    name: 'movie.index',
    component: MovieIndex
  },
  {
    path: '/pesquisa',
    name: 'movie.search',
    component: () => import('./views/MovieSearch.vue')
  },
  {
    path: '/filme/:id',
    name: 'movie.detail',
    component: () => import('./views/MovieDetails.vue')
  }
]

export default router
