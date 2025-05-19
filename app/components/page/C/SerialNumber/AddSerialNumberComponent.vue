<script setup lang='ts'>
import type { StateType } from '~/type'

interface FeatureType {
  modal: {
    open: boolean
  }
}

const state = ref<StateType<null, FeatureType>>({
  feature: {
    modal: {
      open: false,
    },
  },
  data: null,
})
</script>

<template>
  <div>
    <UButton
      @click="state.feature.modal.open = true"
    >
      <UIcon name="i-lucide-plus" />
      創建序號
    </UButton>
    <UModal
      v-model:open="state.feature.modal.open"
      title="創建序號"
      :ui="{ footer: 'justify-end' }"
    >
      <template #body>
        <p>
          asdasdsa
        </p>
      </template>
      <template #footer>
        <UButton
          label="取消"
          color="neutral"
          variant="outline"
        />
        <UButton
          label="確認"
          variant="outline"
        />
      </template>
    </UModal>
  </div>
</template>
