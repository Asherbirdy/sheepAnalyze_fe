<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'
import type { LandingPageGetAllData } from '~/type'
import { useLandingPageApi } from '~/apis/useLandingPageApi'
import { useWindowSize } from '~/composables/common/useWindowSize'
import { ClientRoutes, PublicRoutes } from '~/enum'

const table = useTemplateRef<HTMLTableElement>('table')
const UButton = resolveComponent('UButton')
const UBadge = resolveComponent('UBadge')
const UDropdownMenu = resolveComponent('UDropdownMenu')

const { data: LandingPageResponse } = await useLandingPageApi.getAll()
const { isMdSize } = useWindowSize()
const columns: TableColumn<LandingPageGetAllData>[] = [
  {
    accessorKey: 'isActive',
    header: 'Status',
    cell: ({ row }) => h(UBadge, {
      class: 'capitalize',
      variant: 'subtle',
      color: row.getValue('isActive') ? 'success' : 'info',
    }, () => row.getValue('isActive') ? '上線' : '未上線'),
  },
  {
    accessorKey: 'title',
    header: 'Title',
    cell: ({ row }) => row.getValue('title'),
  },
  {
    accessorKey: 'isCustom',
    header: 'Custom',
    cell: ({ row }) => h(UBadge, {
      class: 'capitalize',
      variant: 'subtle',
      color: row.getValue('isCustom') ? 'info' : 'neutral',
    }, () => row.getValue('isCustom') ? '客製化' : '公版'),
  },
  {
    accessorKey: 'urlPathId',
    header: 'URL Path ID',
    cell: ({ row }) => row.getValue('urlPathId'),
  },
  {
    accessorKey: 'updatedAt',
    header: 'Updated At',
    cell: ({ row }) => row.getValue('updatedAt'),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const items = [
        {
          type: 'label',
          label: 'Actions',
        },
        {
          label: '前往編輯',
          onSelect() {
            navigateTo(`${ClientRoutes.LandingPageEditor}/${row.original._id}`)
          },
        },
      ]

      return h('div', { class: 'text-right' }, h(UDropdownMenu, {
        'content': { align: 'end' },
        items,
        'aria-label': 'Actions dropdown',
      }, () => h(UButton, {
        'icon': 'i-lucide-ellipsis-vertical',
        'color': 'neutral',
        'variant': 'ghost',
        'class': 'ml-auto',
        'aria-label': 'Actions dropdown',
      })))
    },
  },
]
const urlBase = computed(() => window.location.origin)
</script>

<template>
  <div class="flex-1 divide-y divide-(--ui-border-accented) w-full">
    <UTable
      v-if="!isMdSize"
      ref="table"
      :data="LandingPageResponse?.data"
      :columns="columns"
      sticky
      class="h-96"
    >
      <template #expanded="{ row }">
        <pre>{{ row.original }}</pre>
      </template>
    </UTable>
    <!-- 手機版 -->
    <div
      v-else
      class="flex flex-col justify-center items-center"
    >
      <UCard
        v-for="row in LandingPageResponse?.data"
        :key="row._id"
        class="mb-3 max-h-48 max-w-[320px]"
      >
        <div class="flex justify-between">
          <UBadge
            :color="row.isActive ? 'success' : 'info'"
            variant="soft"
          >
            {{ row.isActive ? '上線' : '未上線' }}
          </UBadge>
          <UBadge
            color="neutral"
            variant="soft"
          >
            {{ row.isCustom ? '客製化' : '公版' }}
          </UBadge>
        </div>
        <h2 class="text-lg font-bold">
          {{ row.title }}
        </h2>
        <p>
          ID: {{ row.urlPathId }}
        </p>
        <p class="text-sm break-words">
          網址: {{ `${urlBase}${PublicRoutes.LandingPage}/${row._id}` }}
        </p>

        <div class="flex gap-2">
          <UButton
            block
            variant="soft"
            size="sm"
            @click="navigateTo(`${ClientRoutes.LandingPageEditor}/${row._id}`)"
          >
            前往編輯
          </UButton>
        </div>
      </UCard>
    </div>
  </div>
</template>
