<script setup lang="ts">
import type {
  AttendanceAccountDataType,
  AttendanceAccountFeatureType,
  AttendanceAccountGetAll,
  StateType,
} from '~/type'
import { useAttendanceAccountApi } from '~/apis/useAttendanceAccountApi'

const state = ref<StateType<AttendanceAccountDataType, AttendanceAccountFeatureType>>({
  data: {
    currentFormData: {
      _id: '',
      name: '',
      serialNumber: '',
      serialNumberExpiredDate: '',
      active: false,
      createdAt: '',
      updatedAt: '',
      __v: 0,
    },
    payload: {
      edit: {
        _id: '',
        name: '',
        serialNumber: '',
      },
    },
  },
  feature: {
    modal: {
      open: false,
    },
  },
})

/*
  * 取的資料 API
*/
const {
  data: AttendanceAccountResponse,
} = await useAttendanceAccountApi.getAll()

/*
  * 編輯 API
*/
// const {
//   execute: EditRequest,
//   status: EditStatus,
// } = await useAttendanceAccountApi.edit(state.value.data.payload.edit)

/*
  * 打開 Modal
*/
const handleOpenModal = (form: AttendanceAccountGetAll) => {
  const { feature, data } = state.value
  feature.modal.open = true
  data.currentFormData = form
}
</script>

<template>
  <div>
    <h1>Attendance Account</h1>
    <UBadge
      v-for="item in AttendanceAccountResponse?.data"
      :key="item._id"
      :label="`${item.name} ${item.active ? '' : '(未啟動)'}`"
      :color="item.active ? 'primary' : 'warning'"
      @click="handleOpenModal(item)"
    />
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
                v-model="state.data.currentFormData.name"
                label="名稱"
                name="name"
              />
            </UFormField>
            <UFormField
              label="區域"
              name="districtId"
            >
              <USelect
                v-model="state.data.currentFormData.serialNumber"
                label="序號"
                name="serialNumber"
              />
            </UFormField>
          </div>
        </UForm>
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
  </div>
</template>
