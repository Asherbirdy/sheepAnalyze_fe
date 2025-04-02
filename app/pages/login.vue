<script setup lang="ts">
import { useAuthApi } from '~/apis'
import LoginFormComponent from '~/components/page/login/LoginFormComponent.vue'
import { CookieEnums } from '~/enum'

const state = ref({
  data: {
    login: {
      email: '',
      password: '',
    },
    register: {
      username: '',
      password: '',
      confirmPassword: '',
    },
  },
})

/*
  * LOGIN API
*/
const {
  data: LoginResponse,
  execute: LoginRequest,
  error: LoginError,
  // status: loginStatus,
} = await useAuthApi.login(state.value.data.login)

const onLogin = async () => {
  await LoginRequest()

  if (LoginError.value) {
    // console.log(LoginError.value.data.error === 'WRONG_EMAIL_OR_PASSWORD')
    // eslint-disable-next-line no-alert
    alert('錯誤帳號或密碼')
    console.error(LoginError.value)
    return
  }

  useCookie(CookieEnums.AccessToken).value = LoginResponse.value?.token.accessTokenJWT
  useCookie(CookieEnums.RefreshToken).value = LoginResponse.value?.token.refreshTokenJWT
}

const tabs = [
  {
    label: 'Login',
    icon: 'i-lucide-user',
    slot: 'login' as const,
  },
  {
    label: 'Register',
    icon: 'i-lucide-lock',
    slot: 'register' as const,
  },
]
</script>

<template>
  <UTabs
    :items="tabs"
    class="gap-4 w-full"
    :ui="{ trigger: 'flex-1' }"
  >
    <template #login>
      <LoginFormComponent v-model="state.data.login" />
      <UButton
        label="登入"
        type="submit"
        variant="soft"
        class="self-end"
        :disabled="(
          !state.data.login.email
          || !state.data.login.password
        )"

        @click="onLogin"
      />
    </template>

    <template #register>
      <!-- <UForm
        :state="state"
        class="flex flex-col gap-4"
      >
        <UFormField
          label="Current Password"
          name="current"
          required
        >
          <UInput
            v-model="state.currentPassword"
            type="password"
            required
            class="w-full"
          />
        </UFormField>
        <UFormField
          label="New Password"
          name="new"
          required
        >
          <UInput
            v-model="state.newPassword"
            type="password"
            required
            class="w-full"
          />
        </UFormField>
        <UFormField
          label="Confirm Password"
          name="confirm"
          required
        >
          <UInput
            v-model="state.confirmPassword"
            type="password"
            required
            class="w-full"
          />
        </UFormField>

        <UButton
          label="Change password"
          type="submit"
          variant="soft"
          class="self-end"
        />
      </UForm> -->
    </template>
  </UTabs>
</template>
