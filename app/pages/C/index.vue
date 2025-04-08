<script setup lang="ts">
import { useAuthApi, useUserApi } from '~/apis'

const state = ref({
  data: {
    emailVerifiedModal: {
      otp: '',
    },
  },
  emailCountdown: {
    status: false,
    time: 60,
    countdown: 0,
  },
})

interface Model {
  otp: string
}
/*
  * USER API
*/
const { data: UserInfoResponse } = await useUserApi.showMe()

/*
  * AUTH API
*/
const { execute: executeEmailRequest } = await useAuthApi.sendOTP()

/*
  * bindOTPEmail API
*/
const { execute: emailVerifyRequest } = await useAuthApi.bindOTPEmail({
  OTP: state.value.data.emailVerifiedModal.otp,
})

/*
  * SEND EMAIL VERIFY
*/
const onEmailRequest = async () => {
  const { emailCountdown } = state.value
  await executeEmailRequest()
  emailCountdown.status = true
  emailCountdown.countdown = emailCountdown.time
}

/*
  * EMAIL VERIFY
*/
const onEmailVerify = async () => {
  await emailVerifyRequest()
}

/*
  * EMAIL COUNT DOWN
*/
watch(state.value.emailCountdown, (value) => {
  if (value.countdown > 0) {
    setTimeout(() => {
      state.value.emailCountdown.countdown--
    }, 1000)
    return
  }
  state.value.emailCountdown.status = false
  state.value.emailCountdown.countdown = state.value.emailCountdown.time
})

const validate = (state: Partial<Model>) => {
  const errors = []
  if (!state.otp) {
    errors.push({
      name: 'otp',
      message: '驗證碼不能為空',
    })
  }
  return errors
}
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
          :state="state.data.emailVerifiedModal"
          :validate="validate"
        >
          <div class="">
            <UFormField
              label="驗證碼"
              name="otp"
              class="flex-1 justify-between w-full gap-4 mb-2"
            >
              <UInput
                v-model="state.data.emailVerifiedModal.otp"
                label="驗證碼"
                class="flex-1 w-[calc(100%-124px)] mr-1"
                placeholder="請輸入驗證碼"
              />
              <UButton
                :disabled="state.emailCountdown.status"
                :label="state.emailCountdown.status ? `${state.emailCountdown.countdown}秒` : '寄送 Email 驗證'"
                variant="soft"
                class="inline-block"
                @click="onEmailRequest"
              />
            </UFormField>
          </div>
        </UForm>
        <UButton
          label="驗證 Email"
          block
          @click="onEmailVerify"
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
