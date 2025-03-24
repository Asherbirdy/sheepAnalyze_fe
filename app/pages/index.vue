<script setup lang="ts">
import { useDevApi } from '~/apis'

definePageMeta({
  layout: 'default',
})

const { data } = await useDevApi.get()
</script>

<template>
  <div>
    <p>
      {{ data }}
    </p>
  </div>
</template>
