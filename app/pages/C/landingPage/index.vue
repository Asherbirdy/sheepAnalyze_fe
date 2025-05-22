<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'
import type { LandingPageGetAllData } from '~/type'
import { useLandingPageApi } from '~/apis/useLandingPageApi'
import { useWindowSize } from '~/composables/common/useWindowSize'

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
          label: '前往頁面',
          onSelect() {
            navigateTo(`/lands/${row.original._id}`)
          },
        },
        {
          label: '前往編輯',
          onSelect() {
            navigateTo(`/C/landingPage/editor/${row.original._id}`)
          },
        },
        // {
        //   label: !row.original.isActive ? '使網站上線' : '使網站下線',
        //   onSelect() {

        //   },
        // }
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
    <div v-else>
      <UCard
        v-for="landingPage in LandingPageResponse?.data"
        :key="landingPage._id"
        class="mb-3 min-h-24"
      >
        <div class="flex justify-between">
          <UBadge
            :color="landingPage.isActive ? 'success' : 'info'"
            variant="soft"
          >
            {{ landingPage.isActive ? '上線' : '未上線' }}
          </UBadge>
          <UBadge
            color="neutral"
            variant="soft"
          >
            {{ landingPage.isCustom ? '是' : '否' }}
          </UBadge>
        </div>
        <h2>
          {{ landingPage.title }}
        </h2>
        <p>
          {{ landingPage.urlPathId }}
        </p>

        <UButton
          block
          variant="soft"
          size="sm"
        >
          Actions
        </UButton>
      </UCard>
    </div>
  </div>
</template>
