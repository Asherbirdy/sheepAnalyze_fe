<script setup lang='ts'>
import { useBlendingApi } from '~/apis'

const { data: blendingData } = await useBlendingApi.get()

const data = computed(() => blendingData.value?.response.filter(item => item.name !== ''))
</script>

<template>
  <div>
    <h1>2025blem</h1>
    <pre>{{ data }}</pre>
  </div>
</template>

<style>

</style>
