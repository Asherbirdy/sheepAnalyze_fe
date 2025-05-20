<script setup lang='ts'>
import type { StateType } from '~/type'
import { Role } from '~/enum'

interface FeatureType {
  modal: {
    open: boolean
  }
}

interface DataType {
  role: Role
  districtId: string
  notes: string
}

const state = ref<StateType<DataType, FeatureType>>({
  data: {
    role: Role.user,
    districtId: '',
    notes: '',
  },
  feature: {
    modal: {
      open: false,
    },
  },
})

const items = ref([
  {
    label: '開發者',
    value: Role.dev,
  },
  {
    label: '管理者',
    value: Role.admin,
  },
  {
    label: '區負責',
    value: Role.districtLeader,
  },
  {
    label: '使用者',
    value: Role.user,
  },
])
</script>

<template>
  <div>
    <UButton @click="state.feature.modal.open = true">
      <UIcon name="i-lucide-plus" />
      創建序號
    </UButton>
    <UModal
      v-model:open="state.feature.modal.open"
      title="創建序號"
      :ui="{ footer: 'justify-end' }"
    >
      <template #body>
        <div class="flex flex-col gap-2">
          <USelect
            v-model="state.data.role"
            :items="items"
            class="w-48"
          />
          <USelect
            v-model="state.data.districtId"
            :items="items"
            class="w-48"
          />
          <UInput v-model="state.data.notes" />
        </div>
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
