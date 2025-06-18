<script setup lang="ts">
import type { FormError } from '@nuxt/ui'
import { useLineAccountMemberApi } from '~/apis'

enum Page {
  Loading = 'loading',
  Register = 'register',
  AccountReviewing = 'account-reviewing',
  Attendance = 'attendance',
}

enum FormKey {
  Name = 'name',
  DistrictId = 'districtId',
}

const { LineProfile } = useLiff({
  liffId: {
    dev: '2007494898-BJjV7nbe',
    production: '',
  },
  liffInit: true,
  login: true,
})

const state = ref({
  data: {
    register: {
      [FormKey.Name]: '',
      [FormKey.DistrictId]: '',
      lineProfileId: '',
    },
    attendance: {
      date: '',
      time: '',
    },
  },
  feature: {
    page: Page.Loading,
  },
})

const {
  execute: RegisterRequest,
  status: RegisterStatus,
} = await useLineAccountMemberApi.create(state.value.data.register)

const handleRegister = async () => {
  await RegisterRequest()
}

const validate = (): FormError[] => {
  const { data } = state.value
  const errors = []
  if (!data.register[FormKey.Name])
    errors.push({ name: FormKey.Name, message: 'Required' })

  if (!data.register[FormKey.DistrictId])
    errors.push({ name: FormKey.DistrictId, message: 'Required' })
  return errors
}

watch(LineProfile, async (newVal) => {
  const { feature, data } = state.value
  if (newVal) {
    const { error } = await useLineAccountMemberApi.checkAccountStatus({
      lineProfileId: newVal.userId,
    })

    // 未有帳號 去註冊綁定
    if (error.value?.data.error === 'LINE_ACCOUNT_MEMBER_NOT_FOUND') {
      feature.page = Page.Register
      return
    }

    // 帳號審核中
    if (error.value?.data.error === 'LINE_ACCOUNT_MEMBER_NOT_ACTIVE') {
      feature.page = Page.AccountReviewing
      return
    }

    data.register.lineProfileId = newVal.userId
    feature.page = Page.Attendance
  }
})

const items = ref([
  {
    label: 'Backlog',
    value: 'backlog',
  },
  {
    label: 'Todo',
    value: 'todo',
  },
  {
    label: 'In Progress',
    value: 'in_progress',
  },
])
</script>

<template>
  <div>
    <div v-if="state.feature.page === Page.Loading">
      <h2>Loading</h2>
    </div>
    <div v-if="state.feature.page === Page.Register">
      <h2>Register</h2>
      <UForm
        :validate="validate"
        :state="state"
        class="space-y-4"
      >
        <UFormField
          label="姓名"
          :name="FormKey.Name"
        >
          <UInput v-model="state.data.register.name" />
        </UFormField>

        <UFormField
          label="區"
          :name="FormKey.DistrictId"
        >
          <USelect
            v-model="state.data.register.districtId"
            :items="items"
            class="w-48"
          />
        </UFormField>

        <UButton
          type="submit"
          :disabled="!state.data.register.name || !state.data.register.districtId"
          :loading="RegisterStatus === 'pending'"
          @click="handleRegister"
        >
          Submit
        </UButton>
      </UForm>
    </div>
    <div v-if="state.feature.page === Page.AccountReviewing">
      <h2>Account Reviewing</h2>
    </div>
    <div v-if="state.feature.page === Page.Attendance">
      aa
    </div>
  </div>
</template>
