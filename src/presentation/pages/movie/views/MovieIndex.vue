<script lang="ts">
import { defineComponent } from 'vue'

import CardMovie from '@/presentation/components/cards/CardMovie.vue'

export default defineComponent({
  name: 'MovieIndex',
  components: {
    CardMovie
  }
})
</script>

<template>
  <main class=" flex-1 py-10  px-5 sm:px-10 ">

    <div class="mt-4 grid grid-cols-2  sm:grid-cols-6 gap-x-5 gap-y-5">
      <CardMovie v-for="index in [0, 1, 2, 3, 4,0, 1, 2, 3, 4, 0, 1, 2, 3, 4]" :key="index" />
    </div>
  </main>
</template>
