import { describe, it, expect, beforeEach, vi } from 'vitest'

import { setActivePinia, createPinia } from 'pinia'
import { useMovieStore } from '@/domains/movie/stores/movie.store'

describe('MovieStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('fetchPopularMovies', async () => {
  })
})
