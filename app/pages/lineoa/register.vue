<script setup lang='ts'>
const { LineProfile } = useLiff({
  liffId: {
    dev: '2007494898-BJjV7nbe',
    production: '',
  },
  liffInit: true,
  login: true,
})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen p-6 rounded-lg shadow-lg">
    <h2 class="text-2xl font-extrabol mb-4">
      點名者帳號綁定
    </h2>
    <img
      :src="LineProfile?.pictureUrl"
      alt="Line Profile"
      class="w-24 h-24 rounded-full border-4 border-white shadow-md"
    >
    <p class="text-lg mt-2">
      {{ LineProfile?.displayName }}
    </p>

    <UInput
      label="序號"
      :ui="{ root: 'w-full bg-white rounded-md shadow-sm' }"
      class="mt-4"
    />

    <UButton
      label="註冊"
      block
    />
  </div>
</template>
