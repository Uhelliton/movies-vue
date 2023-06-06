import { onMounted, ref } from 'vue'
import { defineStore } from 'pinia'
import type { MovieContract } from '../contracts/movie.contract'
import { MovieService } from '../services/movie.services'
import { HomeTabType } from '../../../presentation/pages/movie/components/MovieTab.vue'

export const useMovieStore = defineStore('movie', () => {
  const tabMovies = ref<Array<MovieContract>>([])
  const popular = ref<Array<MovieContract>>([])
  const tendencies = ref<Array<MovieContract>>([])
  const requestError = ref<any>({})

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
      tabMovies.value = results
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

  async function changeTabMovies(tabType: string) {
    tabType === HomeTabType.Popular ? (tabMovies.value = popular.value) : (tabMovies.value = tendencies.value)
  }

  return { popular, tendencies, tabMovies, requestError, changeTabMovies, fetchMovies }
})
