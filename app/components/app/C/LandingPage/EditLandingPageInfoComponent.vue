<script setup lang='ts'>
import type { LandingPageGetAllData, StateType } from '~/type'
import { useLandingPageApi } from '~/apis'
import { UserRequestUrl } from '~/enum'

interface DataType {
  title: string
}

interface FeatureType {
  modal: {
    open: boolean
  }
}

const props = defineProps<{
  data: LandingPageGetAllData
}>()

const { data: propsData } = toRefs(props)

const state = ref<StateType<DataType, FeatureType>>({
  data: {
    title: '',
  },
  feature: {
    modal: {
      open: false,
    },
  },
})

const {
  execute: EditLandingPageInfoRequest,
  status: EditLandingPageInfoStatus,
} = await useLandingPageApi.editInfoById({
  query: {
    landingPageId: propsData.value._id,
  },
  body: state.value.data,
})

const openModal = () => {
  state.value.data.title = propsData.value.title
  state.value.feature.modal.open = true
}

const onSubmit = async () => {
  await EditLandingPageInfoRequest()
  refreshNuxtData(UserRequestUrl.LandingPageGetALL)
  state.value.feature.modal.open = false
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
        :loading="EditLandingPageInfoStatus === 'pending'"
        @click="onSubmit"
      />
    </template>
  </UModal>
</template>
