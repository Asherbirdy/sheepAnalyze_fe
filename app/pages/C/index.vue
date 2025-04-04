<script setup lang="ts">
import { useUserApi } from '~/apis'

definePageMeta({
  layout: 'dashboard',
})

// const state = ref({
//   data: {},
// })

const { data: UserInfoResponse } = await useUserApi.showMe()
</script>

<template>
  <div class="flex flex-col justify-between gap-4 h-full">
    <UCard>
      <h2>姓名：{{ UserInfoResponse?.user.name }}</h2>
      <h2>電子信箱：{{ UserInfoResponse?.user.email }}</h2>
      <h2>區域：{{ UserInfoResponse?.user.district.name }}</h2>
      <h2>Email驗證：{{ UserInfoResponse?.user.emailVerified }}</h2>
      <h2>權限：{{ UserInfoResponse?.user.role }}</h2>
      <h2>網頁權限：{{ UserInfoResponse?.user.landingPageAccess }}</h2>
    </UCard>

    <UModal
      :dismissible="false"
      title="Modal non-dismissible"
    >
      <UButton
        label="Email 驗證"
        block
      />

      <template #body>
        <Placeholder class="h-48" />
      </template>
    </UModal>
  </div>
</template>

<!-- <style>
* {
  outline: 1px solid red;
}
</style> -->
