<script setup lang='ts'>
import type { StateType } from '~/type'

interface DataType {
  title: string
  description: string
  isCustom: boolean
  isCustomId: string
}

interface FeatureType {
  modal: {
    open: boolean
  }
}

const props = defineProps<{
  data: DataType
}>()

const { data: propsData } = toRefs(props)

const state = ref<StateType<DataType, FeatureType>>({
  data: {
    title: '',
    description: '',
    isCustom: false,
    isCustomId: '',
  },
  feature: {
    modal: {
      open: false,
    },
  },
})

const openModal = () => {
  state.value.data = propsData.value
  state.value.feature.modal.open = true
}
</script>

<template>
  <UButton
    variant="soft"
    size="sm"
    class="sm:flex-none"
    @click="openModal"
  >
    編輯標題
  </UButton>
  <UModal
    v-model:open="state.feature.modal.open"
    title="編輯頁面資訊"
    :ui="{ footer: 'justify-end' }"
  >
    <template #body>
      <UForm
        :state="state.data"
        class="space-y-4 flex flex-col gap-4"
      >
        <UFormField
          label="標題"
          name="title"
        >
          <UInput
            v-model="state.data.title"
            label="標題"
            name="title"
            :ui="{ root: 'w-full' }"
          />
        </UFormField>
      </UForm>
    </template>
    <template #footer>
      <UButton
        label="Cancel"
        color="neutral"
        variant="outline"
        @click="state.feature.modal.open = false"
      />
      <UButton
        label="Submit"
        color="neutral"
      />
    </template>
  </UModal>
</template>
