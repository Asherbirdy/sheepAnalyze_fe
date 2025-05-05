<script setup lang="ts">
import { useSheetApi } from '~/apis'

const { data: sheets } = await useSheetApi.getAll()
</script>

<template>
  <div>
    <h1>Sheet</h1>

    <UCard
      v-for="sheet in sheets?.sheets"
      :key="sheet._id"
    >
      <p>{{ sheet._id }}</p>
      <p>{{ sheet.name }}</p>
      <p>{{ sheet.api }}</p>
    </UCard>
  </div>
</template>
