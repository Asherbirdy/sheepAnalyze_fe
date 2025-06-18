<script setup lang="ts">
import { useLineAccountMemberApi } from '~/apis'

const { data: LineAccountResponse } = await useLineAccountMemberApi.getAll()
</script>

<template>
  <div>
    <h1>Line帳號管理</h1>
    <UBadge
      v-for="item in LineAccountResponse?.data"
      :key="item._id"
      class="m-1"
      :color="item.active ? 'primary' : 'warning'"
      variant="soft"
    >
      {{ item.name }}{{ item.active ? '' : '(未審核)' }}
    </UBadge>
  </div>
</template>
