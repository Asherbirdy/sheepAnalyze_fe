<script setup lang="ts">
import type { StateType } from '~/type'
import { useUserApi } from '~/apis'
import { Role } from '~/enum'

const { data: UserListResponse } = await useUserApi.getUserList()

interface DataType {
  form: {
    id: string
    role: string
    landingPageAccess: string
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
      id: '',
      role: '',
      landingPageAccess: '',
    },
  },
  feature: {
    modal: {
      open: false,
    },
  },
})
</script>

<template>
  <div class="flex-1 w-full">
    <div class="flex justify-between mb-3">
      <p class="text-lg font-bold">
        帳號管理
      </p>
    </div>
    <div class="flex flex-col w-full">
      <UCard
        v-for="row in UserListResponse?.users"
        :key="row._id"
        class="mb-3 w-full"
      >
        <div class="flex flex-col gap-2 mb-2">
          <div class="flex justify-between">
            <p>{{ row.name }}</p>
            <UButton
              v-if="row.role !== Role.dev"
              variant="soft"
              size="sm"
              class="sm:flex-none"
              @click="state.feature.modal.open = true"
            >
              編輯
            </UButton>
          </div>
          <p>電子信箱：{{ row.email }}</p>
          <p>角色：{{ row.role }}</p>
          <p>首頁權限：{{ row.landingPageAccess }}</p>
        </div>
      </UCard>
    </div>
    <UModal
      v-model:open="state.feature.modal.open"
      title="Modal with footer"
      description="This is useful when you want a form in a Modal."
      :ui="{ footer: 'justify-end' }"
    >
      <template #body>
        <UForm
          :state="state.data"
          class="space-y-4 flex flex-col gap-4"
        >
          <UFormField
            label="角色"
            name="role"
          >
            <USelect
              v-model="state.data.form.role"
              label="角色"
              name="role"
            />
          </UFormField>
          <UFormField
            label="首頁權限"
            name="landingPageAccess"
          >
            <USelect
              v-model="state.data.form.landingPageAccess"
              label="首頁權限"
              name="landingPageAccess"
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
  </div>
</template>
