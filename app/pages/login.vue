<script setup lang="ts">
const state = reactive({
  name: 'Benjamin Canac',
  username: 'benjamincanac',
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
})

enum LoginFormKey {
  username = 'username',
  password = 'password',
}

const state2 = ref({
  data: {
    login: {
      [LoginFormKey.username]: '',
      [LoginFormKey.password]: '',
    },
    register: {
      username: '',
      password: '',
      confirmPassword: '',
    },
  },
})

const items = [
  {
    label: 'Login',
    description: 'Make changes to your account here. Click save when you\'re done.',
    icon: 'i-lucide-user',
    slot: 'login' as const,
  },
  {
    label: 'Register',
    description: 'Change your password here. After saving, you\'ll be logged out.',
    icon: 'i-lucide-lock',
    slot: 'register' as const,
  },
]
</script>

<template>
  <UTabs
    :items="items"
    class="gap-4 w-full"
    :ui="{ trigger: 'flex-1' }"
  >
    <template #login="{ item }">
      <p class="text-(--ui-text-muted) mb-4">
        {{ item.description }}
      </p>

      <UForm
        :state="state2.data.login"
        class="flex flex-col gap-4"
      >
        <UFormField
          label="Name"
          name="name"
        >
          <UInput
            v-model="state2.data.login.username"
            class="w-full"
          />
        </UFormField>
        <UFormField
          label="Username"
          name="username"
        >
          <UInput
            v-model="state2.data.login.password"
            class="w-full"
          />
        </UFormField>

        <UButton
          label="Save changes"
          type="submit"
          variant="soft"
          class="self-end"
        />
      </UForm>
    </template>

    <template #register="{ item }">
      <p class="text-(--ui-text-muted) mb-4">
        {{ item.description }}
      </p>

      <UForm
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
      </UForm>
    </template>
  </UTabs>
</template>
