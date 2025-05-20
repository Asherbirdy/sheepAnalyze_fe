<script setup lang='ts'>
import type { District, StateType } from '~/type'
import { Role, roleOptions, UserRequestUrl } from '~/enum'

const { data: CachedDistricts } = useNuxtData(UserRequestUrl.District)

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
    districtId: CachedDistricts.value?.districts[0]._id,
    notes: '',
  },
  feature: {
    modal: {
      open: false,
    },
  },
})
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
          :state="state.data"
          class="space-y-4 flex flex-col gap-4"
        >
          <div class="flex gap-4">
            <UFormField
              label="角色"
              name="role"
            >
              <USelect
                v-model="state.data.role"
                :items="roleOptions"
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
                :items="CachedDistricts?.districts.map((district: District) => ({
                  label: district.name,
                  value: district._id,
                }))"
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
