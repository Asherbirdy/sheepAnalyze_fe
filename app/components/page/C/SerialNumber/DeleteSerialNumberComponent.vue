<script setup lang='ts'>
import type { StateType } from '~/type'

interface FeatureType {
  modal: {
    open: boolean
  }
}

interface PropsType {
  serialNumberId: string
}

const props = defineProps<PropsType>()
const { serialNumberId } = toRefs(props)

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
    <UIcon
      name="i-lucide-trash"
      class="size-5"
      @click="state.feature.modal.open = true"
    />
  </div>
  <UModal
    v-model:open="state.feature.modal.open"
    title="是否刪除序號"
    :ui="{ footer: 'justify-end' }"
  >
    <template #body>
      <p>
        {{ `是否刪除序號 ${serialNumberId}` }}
      </p>
    </template>
    <template #footer>
      <UButton
        label="取消"
        color="neutral"
        variant="outline"
        @click="state.feature.modal.open = false"
      />
      <UButton
        label="確認"
        variant="outline"
      />
    </template>
  </UModal>
</template>
