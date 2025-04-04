<script setup lang="ts">
import { useAuthApi } from '~/apis'
import { LoginFormComponent, RegisterFormComponent } from '~/components'
import { ClientRoutes, CookieEnums } from '~/enum'

const toast = useToast()

const state = ref({
  data: {
    login: {
      email: '',
      password: '',
    },
    register: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      serialNumber: '',
    },
  },
})

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
  const { login } = state.value.data
  await LoginRequest()

  if (LoginError.value) {
    toast.add({
      title: '錯誤帳號或密碼',
      color: 'error',
    })
    console.error(LoginError.value)
    login.password = ''
    return
  }

  useCookie(CookieEnums.AccessToken).value = LoginResponse.value?.token.accessTokenJWT
  useCookie(CookieEnums.RefreshToken).value = LoginResponse.value?.token.refreshTokenJWT

  navigateTo(ClientRoutes.Home)
}

/*
  * REGISTER API
*/
const {
  data: RegisterResponse,
  execute: RegisterRequest,
  status: RegisterStatus,
  error: RegisterError,
} = await useAuthApi.register(state.value.data.register)

const onRegister = async () => {
  const { register } = state.value.data
  await RegisterRequest()

  if (RegisterError.value) {
    toast.add({
      title: '錯誤序號或重複註冊',
      color: 'error',
    })

    register.serialNumber = ''
    register.password = ''
    register.confirmPassword = ''
    return
  }

  toast.add({
    title: '註冊成功 請登入',
    color: 'success',
  })

  state.value.data.register.name = ''
  state.value.data.register.email = ''
  state.value.data.register.password = ''
  state.value.data.register.confirmPassword = ''
  state.value.data.register.serialNumber = ''

  useCookie(CookieEnums.AccessToken).value = RegisterResponse.value?.token.accessTokenJWT
  useCookie(CookieEnums.RefreshToken).value = RegisterResponse.value?.token.refreshTokenJWT

  navigateTo(ClientRoutes.Home)
}
/*
  * CHECK VALID TOKEN API
*/
const {
  data: CheckValidTokenResponse,
  refresh: CheckValidTokenRefresh,
} = await useAuthApi.checkValidToken()

/*
  * ON MOUNTED
*/
const init = async () => {
  await CheckValidTokenRefresh()

  if (CheckValidTokenResponse.value?.msg === 'Token is valid') {
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
      <RegisterFormComponent v-model="state.data.register" />
      <UButton
        label="註冊"
        type="submit"
        variant="soft"
        class="self-end"
        :loading="RegisterStatus === 'pending'"
        :disabled="(
          !state.data.register.name
          || !state.data.register.email
          || !state.data.register.password
          || !state.data.register.confirmPassword
          || !state.data.register.serialNumber
          || !regex.email.test(String(state.data.register.email))
          || state.data.register.password !== state.data.register.confirmPassword
        )"
        @click="onRegister"
      />
    </template>
  </UTabs>
</template>
