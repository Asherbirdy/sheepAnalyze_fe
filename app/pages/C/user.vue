<script setup lang="ts">
import { useUserApi } from '~/apis'
import { Role } from '~/enum'

const { data: UserListResponse } = await useUserApi.getUserList()
</script>

<template>
  <div class="flex-1 w-full">
    <div class="flex justify-between mb-3">
      <p class="text-lg font-bold">
        帳號管理
      </p>
    </div>
    <div
      class="flex flex-col w-full"
    >
      <UCard
        v-for="row in UserListResponse?.users"
        :key="row._id"
        class="mb-3 w-full"
      >
        <div class="flex flex-col gap-2 mb-2">
          <div class="flex justify-between">
            <p>{{ row.name }}</p>
            <UButton
              v-if="row.role !== Role.dev"
              variant="soft"
              size="sm"
              class="sm:flex-none"
            >
              編輯
            </UButton>
          </div>
          <p>電子信箱：{{ row.email }}</p>
          <p>角色：{{ row.role }}</p>
          <p>首頁權限：{{ row.landingPageAccess }}</p>
        </div>
      </UCard>
    </div>
  </div>
</template>
