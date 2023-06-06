import { describe, it, expect, beforeEach, vi } from 'vitest'

import { setActivePinia, createPinia } from 'pinia'
import { useMovieStore } from '@/domains/movie/stores/movie.store'

describe('MovieStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('fetchPopularMovies', async () => {
    const movieStore = useMovieStore()
    await movieStore.fetchTendenciesMovies()
    expect(movieStore.popular).toEqual([])
  })
})
