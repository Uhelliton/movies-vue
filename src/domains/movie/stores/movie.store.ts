import { onMounted, ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { MovieContract } from '../contracts/movie.contract'
import { MovieService } from '../services/movie.services'

export interface MovieStoreContract {
  popular: Array<MovieContract>
  tendencies: Array<MovieContract>
}

export const useMovieStore = defineStore('movie', () => {
  const popular = ref<Array<MovieContract>>([])
  const tendencies = ref<Array<MovieContract>>([])

  const populars = computed(() => {
    return popular.value
  })

  onMounted(async () => {
    await fetchPopularMovies()
    await fetchTendenciesMovies()
  })

  const fetchPopularMovies = async () => {
    try {
      const response = await MovieService.getPopular()
      const { results } = response.data
      popular.value = results
    } catch (err) {
      console.log(err)
    }
  }

  const fetchTendenciesMovies = async () => {
    try {
      const response = await MovieService.getTendencies()
      const { results } = response.data
      tendencies.value = results
    } catch (err) {
      console.log(err)
    }
  }

  async function fetchMovies(query: object) {
    try {
      const response = await MovieService.getMoviesBySearch(query)
      const { results } = response.data
      return results
    } catch (err) {
      console.log(err)
    }
  }

  return { popular, tendencies, fetchMovies }
})
