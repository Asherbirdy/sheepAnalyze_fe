<script setup lang='ts'>
import { useBlendingApi } from '~/apis'

enum AgeRange {
  Elder = '年長',
  Middle = '壯年',
  Young = '青職',
  College = '大學',
  Teen = '青少年',
  Child = '兒童',
  SixYearOld = '六歲以下',
}

const { data: blendingData } = await useBlendingApi.get()

// 過濾掉空值name
const data = computed(() => blendingData.value?.response.filter(item => item.name !== ''))

const filterAgeRange = (ageRange: AgeRange) => data.value
  ?.filter(item => item.ageRange === ageRange)
  .map(item => item.name) || []

const filterList = computed(() => [
  {
    title: '年長報名',
    data: filterAgeRange(AgeRange.Elder),
  },
  {
    title: '壯年報名',
    data: filterAgeRange(AgeRange.Middle),
  },
  {
    title: '青職報名',
    data: filterAgeRange(AgeRange.Young),
  },
  {
    title: '大學報名',
    data: filterAgeRange(AgeRange.College),
  },
  {
    title: '青少年報名',
    data: filterAgeRange(AgeRange.Teen),
  },
  {
    title: '兒童報名',
    data: filterAgeRange(AgeRange.Child),
  },
  {
    title: '六歲以下報名',
    data: filterAgeRange(AgeRange.SixYearOld),
  },
])
</script>

<template>
  <div>
    <div class="flex justify-between items-center">
      <h1>2025年 全會所戶外相調</h1>
      <UButton
        color="info"
        variant="soft"
        size="sm"
      >
        更新
      </UButton>
    </div>
    <p class="mb-4">
      報名人數{{ data?.length }}
    </p>
    <div
      v-for="item in filterList"
      :key="item.title"
      class="mb-4"
    >
      <p>{{ item.title }} ({{ item.data.length }}位):</p>
      <div class="flex flex-wrap gap-2">
        <UBadge
          v-for="name in item.data"
          :key="name"
          color="info"
          variant="soft"
        >
          {{ name }}
        </UBadge>
      </div>
    </div>
  </div>
</template>
