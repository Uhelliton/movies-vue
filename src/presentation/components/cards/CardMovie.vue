<script lang="ts">
import { defineComponent, computed } from 'vue'

import { strLimit } from '../../../infra/utils/helpers'
import useDate from '../../../infra/composables/date'

export default defineComponent({
  name: 'CardMovie',
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: () => ''
    },
    thumb: {
      type: String
    },
    releaseDate: {
      type: String
    }
  },

  setup(props) {
    const { formatDate } = useDate()

    const thumbUrl = computed((): string => {
      return import.meta.env.VITE_BUCKET_URL + props.thumb
    })

    return {
      strLimit,
      thumbUrl,
      formatDate
    }
  }
})
</script>

<template>
  <div class="flex max-w-xs w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto">
    <div
      class="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl"
      @click="() => $router.push({ name: 'movie.detail', params: { id: id } })"
    >
      <div class="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
      <div class="relative cursor-pointer group z-10 px-4 pt-10 space-y-6">
        <div class="align-self-end w-full">
          <div class="h-32"></div>
          <div class="space-y-6 h-40 min-h-full">
            <div class="flex flex-col space-y-2 inner">
              <h3 class="text-2xl font-bold text-white" data-unsp-sanitized="clean">{{ title }}</h3>
              <div class="mb-0 text-xs text-gray-400">{{ strLimit(description, 40) }}</div>
            </div>
          </div>
        </div>
      </div>
      <img class="absolute inset-0 transform w-full -translate-y-4" :src="thumbUrl" :alt="title" style="filter: grayscale(0)" />
      <div v-if="releaseDate" class="flex flex-row relative pb-4 space-x-4 z-10">
        <div class="flex items-center py-0 px-6 mt-2 rounded-full mx-auto text-white bg-red-500 hover:bg-red-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div class="text-xs text-white ml-2">{{ formatDate(releaseDate, 'dd/MM/yyyy') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
