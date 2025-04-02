<script setup lang="ts">
interface Model {
  email: string
  password: string
}

const modelValue = defineModel<Model>(
  {
    type: Object,
    default: () => ({
      email: '',
      password: '',
    }),
  },
)
</script>

<template>
  <UForm
    :state="modelValue"
    class="flex flex-col gap-4"
  >
    <UFormField
      label="Name"
      name="name"
    >
      <UInput
        v-model="modelValue.email"
        class="w-full"
      />
    </UFormField>
    <UFormField
      label="Username"
      name="username"
    >
      <UInput
        v-model="modelValue.password"
        class="w-full"
      />
    </UFormField>
  </UForm>
</template>
