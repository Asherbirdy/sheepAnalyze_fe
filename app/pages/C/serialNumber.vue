<script setup lang="ts">
import { useSerialNumberApi } from '~/apis'

const { data: SerialNumbersResponse } = await useSerialNumberApi.getAll()
</script>

<template>
  <div>
    <UCard>
      <template #header>
        <Placeholder class="h-8" />
      </template>

      <Placeholder class="h-32" />

      <template #footer>
        <Placeholder class="h-8" />
      </template>
    </UCard>

    {{ SerialNumbersResponse }}
  </div>
</template>
