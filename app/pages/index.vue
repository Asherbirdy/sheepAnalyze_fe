<script setup lang="ts">
import { useDevApi } from '~/apis'

definePageMeta({
  layout: 'default',
})

const { data } = await useDevApi.get()
</script>

<template>
  <div>
    <UButton>
      Click me
    </UButton>
    <p>
      {{ data }}
    </p>
  </div>
</template>
