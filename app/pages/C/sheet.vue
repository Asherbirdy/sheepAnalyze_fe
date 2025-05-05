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
      <div class="flex items-center justify-between">
        <div>
          <p>id: {{ sheet._id }}</p>
          <p>name: {{ sheet.name }}</p>
          <p>api: {{ sheet.api }}</p>
        </div>
        <div class="flex flex-col gap-2">
          <UButton
            icon="i-lucide-pencil"
            size="xs"
            color="primary"
            variant="solid"
          />
          <UButton
            icon="i-lucide-trash"
            size="xs"
            color="primary"
            variant="solid"
          />
        </div>
      </div>
    </UCard>
  </div>
</template>
