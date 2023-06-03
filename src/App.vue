<script lang="ts">
import { defineComponent } from 'vue'
import SystemLayout from '@/presentation/layouts/System.vue'

export default defineComponent({
  name: 'App',
  components: {
    SystemLayout,
  }
})
</script>

<template>
  <SystemLayout>
    <RouterView />
  </SystemLayout>
</template>
