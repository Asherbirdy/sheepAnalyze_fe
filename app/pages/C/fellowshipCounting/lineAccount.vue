<script setup lang="ts">
import { useLineAccountMemberApi } from '~/apis'

const { data } = await useLineAccountMemberApi.getAll()
</script>

<template>
  <div>
    <h1>Fellowship Counting</h1>
    <p>{{ data }}</p>
  </div>
</template>
