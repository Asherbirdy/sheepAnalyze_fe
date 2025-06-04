<script setup lang="ts">
import { useSheepApi } from '~/apis'

const { data: SheepListResponse } = await useSheepApi.list()
</script>

<template>
  <div>
    <pre>{{ SheepListResponse }}</pre>
  </div>
</template>
