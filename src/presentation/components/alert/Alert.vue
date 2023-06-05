<script lang="ts">
import { toRef, defineComponent } from 'vue'

export default defineComponent({
  name: 'Alert',
  props: {
    message: {
      type: String,
      required: true
    }
  },

  setup(props) {
    return {
      ...toRef(props.message)
    }
  }
})
</script>

<template>
  <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
    <strong class="font-bold">Ops!</strong>
    <span class="block sm:inline">{{ message }}</span>
  </div>
</template>
