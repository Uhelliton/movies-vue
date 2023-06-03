<script lang="ts">
import { defineComponent } from 'vue'

import CardMovie from '@/presentation/components/cards/CardMovie.vue'

export default defineComponent({
  name: 'MovieDetails',
  components: {
    CardMovie
  }
})
</script>

<template>
  <main class=" flex-1 py-10  px-5 sm:px-10 ">
    detalhes do video
  </main>
</template>
