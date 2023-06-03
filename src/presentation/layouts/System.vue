<script lang="ts">
import { defineComponent } from 'vue'

import Nav from '@/presentation/components/layouts/Nav.vue'
import Header from '@/presentation/components/layouts/Header.vue'

export default defineComponent({
  name: 'SystemLayout',
  components: { Nav, Header }
})
</script>

<template>
  <div class="min-h-full">
    <Nav />
    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <RouterView />
      </div>
    </main>
  </div>
</template>
