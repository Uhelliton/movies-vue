<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

import { Alert, CardMovie, CardMovieShimmer } from '../../../../presentation/components/index'
import MovieTab from '../components/MovieTab.vue'
import { useMovieStore } from '../../../../domains/movie/stores/movie.store'
import { useDelay } from '../../../../infra/composables/timeout'

export default defineComponent({
  name: 'MovieIndex',
  components: {
    CardMovie,
    CardMovieShimmer,
    Alert,
    MovieTab
  },

  setup() {
    const router = useRouter()
    const movieStore = useMovieStore()
    const search = ref<string>('')
    const loading = ref<boolean>(true)

    onMounted(async () => {
      await useDelay()
      loading.value = false
    })

    const handleSearch = () => {
      router.push({ name: 'movie.search', query: { query: search.value } })
    }

    return {
      search,
      handleSearch,
      loading,
      movieStore
    }
  }
})
</script>

<template>
  <main class="flex-1 py-10 px-5 sm:px-10">
    <div class="container mx-auto">
      <form class="rounded-lg bg-white p-6 shadow-md" ref="formRef" @submit.prevent="handleSearch">
        <fieldset class="font-light py-2">
          <legend>Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.</legend>
        </fieldset>
        <div class="flex items-center">
          <input type="text" v-model="search" class="w-full rounded-lg border border-gray-400 p-2" placeholder="Buscar por um Filme, Série ou Pessoa..." />
          <button type="button" @click="handleSearch" class="ml-2 rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600">Pesquisar</button>
        </div>
      </form>
    </div>
    <MovieTab />
    <section class="py-4">
      <Alert v-if="movieStore.requestError?.message" type="error" class="mt-4" :message="movieStore.requestError.message" />
      <div class="mt-4 grid grid-cols-2 sm:grid-cols-6 gap-4">
        <CardMovie
          v-for="movie in movieStore.tabMovies"
          :key="movie.id"
          :id="movie.id"
          :title="movie.title"
          :description="movie.overview"
          :releaseDate="movie.release_date"
          :thumb="movie.poster_path"
        />
      </div>
      <template v-if="loading">
        <section class="mt-4 grid grid-cols-2 sm:grid-cols-6 gap-4">
          <CardMovieShimmer v-for="index in [...Array(6)]" :key="index" />
        </section>
      </template>
    </section>
  </main>
</template>
