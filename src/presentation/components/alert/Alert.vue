<script lang="ts">
import { toRefs, defineComponent, computed } from 'vue'

export enum AlertType {
  Success = 'success',
  Error = 'error'
}

export default defineComponent({
  name: 'Alert',
  props: {
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: () => AlertType.Success
    }
  },

  setup(props) {
    const { message } = toRefs(props)
    const styleComputed = computed((): string => {
      return props.type === AlertType.Success ? 'bg-green-100 text-green-700' : 'bg-red-100 border-red-400 text-red-700'
    })

    return {
      styleComputed,
      message
    }
  }
})
</script>

<template>
  <div class="border px-4 py-3 rounded relative" :class="styleComputed" role="alert">
    <strong class="font-bold">Ops!</strong>
    <span class="block sm:inline">{{ message }}</span>
  </div>
</template>
