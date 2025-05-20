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

const roleItems = ref([
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

const districtItems = ref([
  {
    label: '台北市',
    value: '台北市',
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
        <UForm
          :state="state"
          class="space-y-4 flex flex-col gap-4"
        >
          <div class="flex gap-4">
            <UFormField
              label="角色"
              name="role"
            >
              <USelect
                v-model="state.data.role"
                :items="roleItems"
                label="角色"
                name="role"
              />
            </UFormField>
            <UFormField
              label="區域"
              name="districtId"
            >
              <USelect
                v-model="state.data.districtId"
                label="區域"
                name="districtId"
                :items="districtItems"
              />
            </UFormField>
          </div>
          <UFormField
            label="備註"
            name="notes"
          >
            <UInput
              v-model="state.data.notes"
              label="備註"
              name="notes"
              :ui="{ root: 'w-full' }"
            />
          </UFormField>
        </UForm>
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
