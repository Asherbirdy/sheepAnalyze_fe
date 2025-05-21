<script setup lang='ts'>
import { useMeetingCenterApi } from '~/apis'

const {
  data: MeetingCenterResponse,
  refresh: MeetingCenterRequest,
} = await useMeetingCenterApi.getAll()

const {
  execute: MeetingCenterCreateRequest,
  status: MeetingCenterCreateStatus,
} = await useMeetingCenterApi.create()

const data = computed(() => MeetingCenterResponse.value?.data)

const districtOne = computed(() => data.value?.filter(
  item => item.districtName === '一區',
))
const districtTwo = computed(() => data.value?.filter(
  item => item.districtName === '二區',
))
const districtThree = computed(() => data.value?.filter(
  item => item.districtName === '三區',
))
const districtFour = computed(() => data.value?.filter(
  item => item.districtName === '四區',
))

const tabs = [
  { label: '報名名單', slot: 'join' },
  { label: '搭乘遊覽車', slot: 'departure' },
  { label: '自行前往', slot: 'selfGo' },
]

const updateData = async () => {
  await MeetingCenterCreateRequest()
  await MeetingCenterRequest()
}
</script>

<template>
  <div>
    <UButton
      size="sm"
      variant="soft"
      :loading="MeetingCenterCreateStatus === 'pending'"
      @click="updateData"
    >
      更新數據
    </UButton>
    <UTabs
      :items="tabs"
      variant="link"
      class="gap-4 w-full"
      :ui="{ trigger: 'flex-1' }"
    >
      <template #join>
        <div>總報名：{{ data?.length }}位</div>
        <p class="text-sm text-red-600">
          請於5/27日前<br>協助調查是否搭乘遊覽車～謝謝
        </p>
        <p>一區</p>
        <div class="flex flex-wrap gap-2">
          <UBadge
            v-for="(item, index) in districtOne"
            :key="index"
            color="info"
            variant="soft"
            size="sm"
          >
            {{ item.name }}
          </UBadge>
        </div>
        <p>二區</p>
        <div class="flex flex-wrap gap-2">
          <UBadge
            v-for="(item, index) in districtTwo"
            :key="index"
            color="info"
            variant="soft"
            size="sm"
          >
            {{ item.name }}
          </UBadge>
        </div>
        <p>三區</p>
        <div class="flex flex-wrap gap-2">
          <UBadge
            v-for="(item, index) in districtThree"
            :key="index"
            color="info"
            variant="soft"
            size="sm"
          >
            {{ item.name }}
          </UBadge>
        </div>
        <p>四區</p>
        <div class="flex flex-wrap gap-2">
          <UBadge
            v-for="(item, index) in districtFour"
            :key="index"
            color="info"
            variant="soft"
            size="sm"
          >
            {{ item.name }}
          </UBadge>
        </div>
      </template>
      <template #departure>
        <div>
          <p>搭乘去程遊覽車</p>
          <p>一區:</p>
          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="(item, index) in districtOne?.filter(item => item.departure === '搭乘去程')"
              :key="index"
              color="info"
              variant="soft"
              size="sm"
            >
              {{ item.name }}
            </UBadge>
          </div>
          <p>二區:</p>
          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="(item, index) in districtTwo?.filter(item => item.departure === '搭乘去程')"
              :key="index"
              color="info"
              variant="soft"
              size="sm"
            >
              {{ item.name }}
            </UBadge>
          </div>
          <p>三區:</p>
          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="(item, index) in districtThree?.filter(item => item.departure === '搭乘去程')"
              :key="index"
              color="info"
              variant="soft"
              size="sm"
            >
              {{ item.name }}
            </UBadge>
          </div>
          <p>四區:</p>
          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="(item, index) in districtFour?.filter(item => item.departure === '搭乘去程')"
              :key="index"
              color="info"
              variant="soft"
              size="sm"
            >
              {{ item.name }}
            </UBadge>
          </div>
        </div>
        <p>----------------</p>
        <p>搭乘回程遊覽車</p>
        <p>一區:</p>
        <div class="flex flex-wrap gap-2">
          <UBadge
            v-for="(item, index) in districtOne?.filter(item => item.returnRide === '搭乘回程')"
            :key="index"
            color="info"
            variant="soft"
            size="sm"
          >
            {{ item.name }}
          </UBadge>
        </div>
        <p>二區:</p>
        <div class="flex flex-wrap gap-2">
          <UBadge
            v-for="(item, index) in districtTwo?.filter(item => item.returnRide === '搭乘回程')"
            :key="index"
            color="info"
            variant="soft"
            size="sm"
          >
            {{ item.name }}
          </UBadge>
        </div>
        <p>三區:</p>
        <div class="flex flex-wrap gap-2">
          <UBadge
            v-for="(item, index) in districtThree?.filter(item => item.returnRide === '搭乘回程')"
            :key="index"
            color="info"
            variant="soft"
            size="sm"
          >
            {{ item.name }}
          </UBadge>
        </div>
        <p>四區:</p>
        <div class="flex flex-wrap gap-2">
          <UBadge
            v-for="(item, index) in districtFour?.filter(item => item.returnRide === '搭乘回程')"
            :key="index"
            color="info"
            variant="soft"
            size="sm"
          >
            {{ item.name }}
          </UBadge>
        </div>
      </template>
      <template #selfGo>
        <p>自行前往(早):</p>
        <div class="flex flex-wrap gap-2">
          <UBadge
            v-for="(item, index) in data?.filter(item => item.departure === '自行前往')"
            :key="index"
            color="info"
            variant="soft"
            size="sm"
          >
            {{ item.name }}
          </UBadge>
        </div>
        <p>不搭回程(午):</p>
        <div class="flex flex-wrap gap-2">
          <UBadge
            v-for="(item, index) in data?.filter(item => item.returnRide === '不搭回程')"
            :key="index"
            color="info"
            variant="soft"
            size="sm"
          >
            {{ item.name }}
          </UBadge>
        </div>
      </template>
    </UTabs>
  </div>
</template>
