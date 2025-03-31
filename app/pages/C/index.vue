<script setup lang="ts">
import { useUserApi } from '~/apis'

definePageMeta({
  layout: 'dashboard',
})

const { data: user } = await useUserApi.showMe()
</script>

<template>
  <div>
    <p>{{ user }}</p>
  </div>
</template>
