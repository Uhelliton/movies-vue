<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

import CardMovie from '../../../../presentation/components/cards/CardMovie.vue'
import type { MovieContract } from '../../../../domains/movie/contracts/movie.contract'
import { useMovieStore } from '../../../../domains/movie/stores/movie.store'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'MovieIndex',
  components: {
    CardMovie
  },

  setup() {
    const router = useRouter()
    const { $state } = useMovieStore()
    const search = ref<string>('')
    const tab = ref<string>('popular')
    const tabMovies = ref<Array<MovieContract>>([])

    watch(
      () => tab.value,
      (value) => {
        if (value === 'popular') tabMovies.value = $state.popular
        else if (value === 'tendencies') tabMovies.value = $state.tendencies
      }
    )

    const handleSearch = () => {
      router.push({ name: 'movie.search', query: { query: search.value } })
    }

    return {
      search,
      tab,
      tabMovies,
      handleSearch
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

    <section class="py-4">
      <ul class="list-reset flex border-b mt-4">
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
