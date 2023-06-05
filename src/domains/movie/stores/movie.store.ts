import { onMounted, ref } from 'vue'
import { defineStore } from 'pinia'
import type { MovieContract } from '../contracts/movie.contract'
import { MovieService } from '../services/movie.services'

export const useMovieStore = defineStore('movie', () => {
  const popular = ref<Array<MovieContract>>([])
  const tendencies = ref<Array<MovieContract>>([])
  const requestError = ref<string>('')

  onMounted(async () => {
    await fetchPopularMovies()
    await fetchTendenciesMovies()
  })

  const fetchPopularMovies = async () => {
    try {
      const response = await MovieService.getPopular()
      const { results } = response.data
      popular.value = results
    } catch (error) {
      requestError.value = error
    }
  }

  const fetchTendenciesMovies = async () => {
    try {
      const response = await MovieService.getTendencies()
      const { results } = response.data
      tendencies.value = results
    } catch (error) {
      requestError.value = error
    }
  }

  async function fetchMovies(query: object) {
    try {
      const response = await MovieService.getMoviesBySearch(query)
      const { results } = response.data
      return results
    } catch (error) {
      requestError.value = error
    }
  }

  return { popular, tendencies, requestError, fetchMovies }
})
