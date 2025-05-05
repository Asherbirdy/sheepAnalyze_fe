<script setup lang="ts">
import type { GoogleSheet, SheetStateData, SheetStateFeature, StateType } from '~/type'
import { useSheetApi } from '~/apis'

const { data: sheets } = await useSheetApi.getAll()

const state = ref<StateType<SheetStateData, SheetStateFeature>>({
  data: {
    currentSheet: null,
  },
  feature: {
    modal: {
      status: false,
    },
  },
})

const openModal = (data: GoogleSheet) => {
  state.value.data.currentSheet = data
  state.value.feature.modal.status = true
}
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
            @click="openModal(sheet)"
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
    <UModal v-model:open="state.feature.modal.status">
      <template #content>
        <Placeholder class="h-48 m-4" />
      </template>
    </UModal>
  </div>
</template>
