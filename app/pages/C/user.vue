<script setup lang="ts">
import { useUserApi } from '~/apis'

const { data: UserListResponse } = await useUserApi.getUserList()

// interface DataType {
//   modal: {
//     currentData: LandingPageGetAllData
//   }
// }

// interface FeatureType {
//   modal: {
//     open: boolean
//   }
// }

// const state = ref<StateType<any, any>>({
//   data: {
//   },
//   feature: {
//   },
// })
</script>

<template>
  <div class="flex-1 w-full">
    <div class="flex justify-between mb-3">
      <p class="text-lg font-bold">
        帳號管理
      </p>
    </div>
    <!-- 手機版 -->
    <div
      class="flex flex-col w-full"
    >
      <UCard
        v-for="row in UserListResponse?.users"
        :key="row._id"
        class="mb-3 w-full"
      >
        <div class="flex flex-wrap gap-2 mb-2">
          {{ row }}

          <div class="flex flex-wrap gap-2 justify-center">
            <UButton
              variant="soft"
              size="sm"
              class="sm:flex-none"
            >
              編輯標題
            </UButton>
            <UButton
              variant="soft"
              size="sm"
              class="sm:flex-none"
            >
              文字編輯器
            </UButton>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>
