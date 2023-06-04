<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue'

import CardMovie from '@/presentation/components/cards/CardMovie.vue'
import { MovieService } from '../../../../domains/movie/services/movie.services'
import { MovieContract } from '../../../../domains/movie/contracts/movie.contract'

export default defineComponent({
  name: 'MovieIndex',
  components: {
    CardMovie
  },

  setup() {
    const formRef = ref(null)
    const tab = ref<string>('popular')
    const popularMovies = ref<Array<MovieContract>>([])
    const tendenciesMovies = ref<Array<MovieContract>>([])
    const tabMovies = ref<Array<MovieContract>>([])

    onMounted(async () => {
      await fetchPopularMovies()
      await fetchTendenciesMovies()
    })

    watch(
      () => tab.value,
      (value) => {
        switch (value) {
          case 'popular':
            return (tabMovies.value = popularMovies.value)
          case 'tendencies':
            return (tabMovies.value = tendenciesMovies.value)
          default:
            return []
        }
      }
    )

    const fetchPopularMovies = async () => {
      const response: any = await MovieService.getPopular()
      popularMovies.value = response.data.results
      tabMovies.value = response.data.results
    }

    const fetchTendenciesMovies = async () => {
      const response: any = await MovieService.getTendencies()
      tendenciesMovies.value = response.data.results
    }

    return {
      formRef,
      tab,
      popularMovies,
      tendenciesMovies,
      tabMovies
    }
  }
})
</script>

<template>
  <main class="flex-1 py-10 px-5 sm:px-10">
    <div class="container mx-auto">
      <form class="rounded-lg bg-white p-6 shadow-md" ref="formRef">
        <fieldset class="font-light py-2">
          <legend>Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.</legend>
        </fieldset>
        <div class="flex items-center">
          <input type="text" class="w-full rounded-lg border border-gray-400 p-2" placeholder="Buscar por um Filme, Série ou Pessoa..." />
          <button class="ml-2 rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600">Pesquisar</button>
        </div>
      </form>
    </div>

    <section class="py-4">
      <h3 class="text-2xl font-medium mb-4">---</h3>
      <ul class="list-reset flex border-b">
        <li class="-mb-px mr-1">
          <a
            class="bg-white inline-block py-2 px-4 text-blue-dark font-semibold"
            :class="[{ 'border-l border-t border-r rounded-t': tab === 'popular' }]"
            href="javascript:"
            @click="tab = 'popular'"
          >
            Tendências
          </a>
        </li>
        <li class="-mb-px mr-1">
          <a
            class="bg-white inline-block py-2 px-4 text-blue hover:text-blue-darker font-semibold"
            :class="[{ 'border-l border-t border-r rounded-t': tab === 'tendencies' }]"
            href="javascript:"
            @click="tab = 'tendencies'"
          >
            Os Mais Populares
          </a>
        </li>
      </ul>

      <div class="mt-4 grid grid-cols-2 sm:grid-cols-6 gap-4">
        <CardMovie
          v-for="movie in tabMovies"
          :key="movie.id"
          :id="movie.id"
          :title="movie.title"
          :description="movie.overview"
          :releaseDate="movie.release_date"
          :thumb="movie.poster_path"
        />
      </div>
    </section>
  </main>
</template>
