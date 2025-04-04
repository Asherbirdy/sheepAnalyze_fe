<script setup lang="ts">
// import type { FormError } from '@nuxt/ui'

interface Model {
  name: string
  email: string
  password: string
  confirmPassword: string
  serialNumber: string
}

const modelValue = defineModel<Model>({ required: true })
</script>

<template>
  <div>{{ modelValue }}</div>
</template>
