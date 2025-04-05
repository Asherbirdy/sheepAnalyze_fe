<script setup lang="ts">
import { useUserApi } from '~/apis'

definePageMeta({
  layout: 'dashboard',
})

const state = ref({
  data: {
    emailVerifiedModal: {
      otp: '',
    },
  },
})

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
      title="Email驗證"
    >
      <UButton
        label="Email 驗證"
        block
      />

      <template #body>
        <UForm
          :state="state.data"
        >
          <div class="">
            <UFormField
              label="Email"
              name="emailVerifiedModal.otp"
              class="flex-1 w-full gap-4"
            >
              <UInput
                label="驗證碼"
                class="flex-1 w-[calc(100%-124px)] mr-1 mb-2"
              />
              <UButton
                label="寄送 Email 驗證"
                variant="soft"
                class="inline-block"
              />
            </UFormField>
          </div>
        </UForm>
        <UButton
          label="驗證 Email"
          block
        />
      </template>
    </UModal>
  </div>
</template>

<!-- <style>
* {
  outline: 1px solid red;
}
</style> -->
