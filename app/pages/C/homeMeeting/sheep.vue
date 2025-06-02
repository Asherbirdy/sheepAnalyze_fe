<script setup lang="ts">
import { useSheepApi } from '~/apis'

const { data } = await useSheepApi.list()
</script>

<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>
