<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'

import CardMovie from '@/presentation/components/cards/CardMovie.vue'
import CardMovieShimmer from '@/presentation/components/cards/CardMovieShimmer.vue'
import { useMovieStore } from '../../../../domains/movie/stores/movie.store'
import { MovieContract } from '../../../../domains/movie/contracts/movie.contract'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'MovieSearch',
  components: {
    CardMovie,
    CardMovieShimmer
  },

  setup() {
    const route = useRoute()
    const { fetchMovies } = useMovieStore()
    const searching = ref<Array<MovieContract>>([])
    const loading = ref<boolean>(true)

    onMounted(async () => {
      const query = route.query?.query

      if (query) {
        searching.value = await fetchMovies({ 'query': query })
        loading.value = false
      }
    })

    return {
      searching,
      route,
      loading
    }
  }
})
</script>

<template>
  <main class="flex-1 py-10 px-5 sm:px-10">
    <header>
      <h2 class="text-lg title-font text-gray-500 tracking-widest">Resultado para a pesquisa: <b>{{ route.query?.query }}</b></h2>
      <span v-show="!searching.length && !loading" class="text-sm text-gray-700 tracking-widest">Nenhum registro encontrado</span>
    </header>
    <div v-if="searching" class="mt-4 grid grid-cols-2 sm:grid-cols-6 gap-4">
      <CardMovie
        v-for="movie in searching"
        :key="movie.id"
        :id="movie.id"
        :title="movie.title"
        :description="movie.overview"
        :releaseDate="movie.release_date"
        :thumb="movie.poster_path"
      />
    </div>

     <template v-if="loading" >
       <section class="mt-4 grid grid-cols-2 sm:grid-cols-6 gap-4">
         <CardMovieShimmer
           v-for="index in [...Array(6)]"
           :key="index"
         />
       </section>
     </template>
  </main>
</template>
