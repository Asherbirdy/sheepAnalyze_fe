<script setup lang="ts">
import { appName } from '~/constants'

useHead({
  title: appName,
})

const colorMode = useColorMode()

onMounted(() => {
  colorMode.value = 'light'
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <UApp>
      <NuxtPage />
    </UApp>
  </NuxtLayout>
</template>
