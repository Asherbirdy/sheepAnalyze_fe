<script setup lang="ts">
import { useDevApi } from '~/apis'

definePageMeta({
  layout: 'default',
})

const { data } = await useDevApi.get()
</script>

<template>
  <div>
    <UButton color="primary">
      Click me
    </UButton>
    <p>
      ENV:  {{ $config.public.ENVIRONMENT }}
    </p>
    <p>
      {{ data }}
    </p>
  </div>
</template>
