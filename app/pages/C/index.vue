<script setup lang="ts">
import { useUserApi } from '~/apis'

definePageMeta({
  layout: 'dashboard',
})

const {
  data: UserInfoResponse,
} = await useUserApi.showMe()
</script>

<template>
  <div>
    <UCard>
      <h2>姓名：{{ UserInfoResponse?.user.name }}</h2>
      <h2>電子信箱：{{ UserInfoResponse?.user.email }}</h2>
      <h2>區域：{{ UserInfoResponse?.user.district.name }}</h2>
      <h2>Email驗證：{{ UserInfoResponse?.user.emailVerified }}</h2>
      <h2>權限：{{ UserInfoResponse?.user.role }}</h2>
      <h2>網頁權限：{{ UserInfoResponse?.user.landingPageAccess }}</h2>
    </UCard>
  </div>
</template>
