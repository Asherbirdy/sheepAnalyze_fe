<script setup lang="ts">
import { useAuthApi } from '~/apis'
import LoginFormComponent from '~/components/page/login/LoginFormComponent.vue'
import { ClientRoutes, CookieEnums } from '~/enum'

const toast = useToast()

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
  status: LoginStatus,
} = await useAuthApi.login(state.value.data.login)

const onLogin = async () => {
  await LoginRequest()

  if (LoginError.value) {
    toast.add({
      title: '錯誤帳號或密碼',
      color: 'error',
    })
    console.error(LoginError.value)
    state.value.data.login.password = ''
    return
  }

  useCookie(CookieEnums.AccessToken).value = LoginResponse.value?.token.accessTokenJWT
  useCookie(CookieEnums.RefreshToken).value = LoginResponse.value?.token.refreshTokenJWT

  navigateTo(ClientRoutes.Home)
}

const tabs = [
  {
    label: '登入',
    icon: 'i-lucide-user',
    slot: 'login' as const,
  },
  {
    label: '註冊',
    icon: 'i-lucide-lock',
    slot: 'register' as const,
  },
]

const { data, refresh } = await useAuthApi.checkValidToken()

const init = async () => {
  await refresh()

  if (data.value?.msg === 'Token is valid') {
    navigateTo(ClientRoutes.Home)
  }
}

onMounted(init)
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
        :loading="LoginStatus === 'pending'"
        :disabled="(
          !state.data.login.email
          || !state.data.login.password
          || !regex.email.test(String(state.data.login.email))
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
