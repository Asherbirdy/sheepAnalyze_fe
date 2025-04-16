<script setup lang='ts'>
import { useBlendingApi } from '~/apis'

enum AgeRange {
  Elder = '年長',
}

const { data: blendingData } = await useBlendingApi.get()

const data = computed(() => blendingData.value?.response.filter(item => item.name !== ''))

const elderDataList = computed(() => {
  return data.value
    ?.filter(item => item.ageRange === AgeRange.Elder)
    .map(item => item.name) || []
})
</script>

<template>
  <div>
    <h1>2025blem</h1>
    <p>報名人數{{ data?.length }}</p>
    <p>長者報名{{ elderDataList?.length }}</p>
    <p>{{ elderDataList }}</p>
    <pre>{{ data }}</pre>
  </div>
</template>

<style>

</style>
