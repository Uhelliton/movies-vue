<script lang="ts">
import { defineComponent, reactive, ref, watch } from 'vue'
import { useMovieStore } from '../../../../domains/movie/stores/movie.store'

interface Tab {
  id: string
  name: string
}

export enum HomeTabType {
  Popular = 'popular',
  Tendency = 'tendencies'
}

export default defineComponent({
  name: 'MovieTab',

  setup() {
    const movieStore = useMovieStore()
    const tabSelect = ref<string>(HomeTabType.Tendency)
    const tabItems = reactive<Array<Tab>>([
      {
        id: HomeTabType.Tendency,
        name: 'Tendências'
      },
      {
        id: HomeTabType.Popular,
        name: ' Os Mais Populares'
      }
    ])

    watch(
      () => tabSelect.value,
      (value) => {
        movieStore.changeTabMovies(value)
      }
    )

    return {
      tabSelect,
      tabItems
    }
  }
})
</script>

<template>
  <ul class="list-reset flex border-b mt-4">
    <li v-for="tab in tabItems" :key="tab.id" class="-mb-px mr-1">
      <a
        class="bg-white inline-block py-2 px-4 text-blue-dark font-semibold"
        :class="[{ 'border-l border-t border-r rounded-t': tabSelect === tab.id }]"
        href="javascript:"
        @click="tabSelect = tab.id"
      >
        {{ tab.name }}
      </a>
    </li>
  </ul>
</template>
