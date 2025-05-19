<script setup lang="ts">
import { useSerialNumberApi } from '~/apis'

const { data: SerialNumbersResponse } = await useSerialNumberApi.getAll()
</script>

<template>
  <div>
    <div class="flex items-center gap-2 justify-between">
      <p class="text-md font-bold mb-4">
        序號列表
      </p>
      <UButton>
        創建序號
      </UButton>
    </div>
    <UCard
      v-for="serialNumber in SerialNumbersResponse?.userSerialNumber"
      :key="serialNumber._id"
      class="mb-4"
    >
      <template #header>
        <div class="flex items-center gap-2 justify-between">
          <div class="flex items-center gap-2">
            <UBadge :color="serialNumber.isUsed ? 'success' : 'warning'">
              {{ serialNumber.isUsed ? '已使用' : '未使用' }}
            </UBadge>
            <p>{{ serialNumber.notes || '無備註' }}</p>
          </div>
          <UIcon name="i-lucide-trash" />
        </div>
      </template>
      <p>
        序號：{{ serialNumber.serialNumber }}
      </p>
      <p>角色：{{ serialNumber.role }}</p>
      <p>區：{{ serialNumber.districtId.name }}</p>
      <p>創建時間：{{ serialNumber.createdAt }}</p>
    </UCard>
  </div>
</template>
