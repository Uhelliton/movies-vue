<script lang="ts">
import { defineComponent } from 'vue'

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
      type: String
    }
  }
})
</script>

<template>
  <div class="flex max-w-xs w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto">
    <div
      class="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl"
      data-movie-id="438631"
    >
      <div class="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
      <div class="relative cursor-pointer group z-10 px-4 pt-10 space-y-6" href="https://www.youtube.com/embed/aSHs224Dge0">
        <div class="align-self-end w-full">
          <div class="h-32"></div>
          <div class="space-y-6">
            <div class="flex flex-col space-y-2 inner">
              <h3 class="text-2xl font-bold text-white" data-unsp-sanitized="clean">{{ title }}</h3>
              <div class="mb-0 text-xs text-gray-400">{{ description }}</div>
            </div>
          </div>
        </div>
      </div>
      <img
        class="absolute inset-0 transform w-full -translate-y-4"
        src="http://image.tmdb.org/t/p/w342/s1FhMAr91WL8D5DeHOcuBELtiHJ.jpg"
        style="filter: grayscale(0)"
      />
      <div class="flex flex-row relative pb-4 space-x-4 z-10">
        <a
          class="flex items-center py-1 px-2 mt-2 rounded-full mx-auto text-white bg-red-500 hover:bg-red-700"
          href="http://www.google.com/calendar/event?action=TEMPLATE&amp;dates=20210915T010000Z%2F20210915T010000Z&amp;text=Dune%20%2D%20Movie%20Premiere&amp;location=http%3A%2F%2Fmoviedates.info&amp;details=This%20reminder%20was%20created%20through%20http%3A%2F%2Fmoviedates.info"
          target="_blank"
          data-unsp-sanitized="clean"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div class="text-xs text-white ml-2">11 de mai de 2023</div>
        </a>
      </div>
    </div>
  </div>
</template>
