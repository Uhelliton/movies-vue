<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import { MovieService } from '@/domains/movie/services/movie.services'
import { MovieContract } from '@/domains/movie/contracts/movie.contract'

export default defineComponent({
  name: 'MovieDetails',

  setup() {
    const route = useRoute()
    const movie = ref<MovieContract>()

    onMounted(async () => {
      const movieId = Number(route.params.id)
      await fetchMovieById(movieId)
    })

    const thumbUrl = computed((): string => {
      return import.meta.env.VITE_BUCKET_URL + movie.value.poster_path
    })

    const genres = computed((): string => {
      const x = movie.value.genres.map(({ name }) => name)
      return x.join(', ')
    })

    const fetchMovieById = async (id: number) => {
      const response: any = await MovieService.getById(id)
      movie.value = response.data
    }

    return {
      movie,
      genres,
      thumbUrl
    }
  }
})
</script>

<template>
  <section class="text-gray-700 body-font overflow-hidden bg-white">
    <div v-if="movie" class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/6 mx-auto flex flex-wrap">
        <img :alt="movie.title" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" :src="thumbUrl" />
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 class="text-sm title-font text-gray-500 tracking-widest">{{ movie.title }}</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ movie.title }}</h1>
          <h3 class="leading-relaxed py-2">{{ movie.release_date }} | {{ genres }}</h3>
          <p class="leading-relaxed">{{ movie.overview }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
