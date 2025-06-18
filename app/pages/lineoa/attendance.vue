<script setup lang="ts">
import { useLineAccountMemberApi } from '~/apis'

enum Page {
  Loading = 'loading',
  Register = 'register',
  AccountReviewing = 'account-reviewing',
  Attendance = 'attendance',
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
  data: {},
  feature: {
    page: Page.Loading,
  },
})

watch(LineProfile, async (newVal) => {
  const { feature } = state.value
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

    feature.page = Page.Attendance
  }
})
</script>

<template>
  <div>
    <div v-if="state.feature.page === Page.Loading">
      <h2>Loading</h2>
    </div>
    <div v-if="state.feature.page === Page.Register">
      <h2>Register</h2>
    </div>
    <div v-if="state.feature.page === Page.AccountReviewing">
      <h2>Account Reviewing</h2>
    </div>
    <div v-if="state.feature.page === Page.Attendance">
      aa
    </div>
  </div>
</template>
