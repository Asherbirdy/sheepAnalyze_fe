<script setup lang="ts">
import type { StateType } from '~/type'
import { useAttendanceAccountApi } from '~/apis'

interface DataType {
  form: {
    name: string
    serialNumber: string
  }
}

interface FeatureType {
  modal: {
    open: boolean
  }
}

const state = ref<StateType<DataType, FeatureType>>({
  data: {
    form: {
      name: '',
      serialNumber: '',
    },
  },
  feature: {
    modal: {
      open: false,
    },
  },
})

const {
  execute: CreateAttendanceAccountRequest,
  status: CreateAttendanceAccountStatus,
} = await useAttendanceAccountApi.create(state.value.data.form)
</script>

<template>
  <div>
    <UButton
      label="新增"
      color="primary"
      @click="state.feature.modal.open = true"
    />
    <UModal
      v-model:open="state.feature.modal.open"
      title="帳號資訊"
      :ui="{ footer: 'justify-end' }"
    >
      <template #body>
        <div>
          aaaa
        </div>
      </template>
      <template #footer>
        <UButton
          label="確認刪除"
          color="error"
        />
        <UButton
          label="確認"
          variant="outline"
          @click="state.feature.modal.open = false"
        />
      </template>
    </UModal>
  </div>
</template>
