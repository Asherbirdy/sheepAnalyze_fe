<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'
import type { LandingPageGetAllData } from '~/type'
import { useLandingPageApi } from '~/apis/useLandingPageApi'

const toast = useToast()
const UButton = resolveComponent('UButton')
const UBadge = resolveComponent('UBadge')
const UDropdownMenu = resolveComponent('UDropdownMenu')

const { data: LandingPageResponse } = await useLandingPageApi.getAll()

const columns: TableColumn<LandingPageGetAllData>[] = [
  {
    accessorKey: 'isActive',
    header: 'Status',
    cell: ({ row }) => {
      const isActive = row.getValue('isActive')
      return h(UBadge, {
        class: 'capitalize',
        variant: 'subtle',
        color: isActive ? 'success' : 'info',
      }, () => isActive ? '上線' : '未上線')
    },
  },
  {
    accessorKey: 'title',
    header: 'Title',
    cell: ({ row }) => row.getValue('title'),
  },
  {
    accessorKey: 'isCustom',
    header: 'Custom',
    cell: ({ row }) => {
      const isCustom = row.getValue('isCustom')
      return h(UBadge, {
        class: 'capitalize',
        variant: 'subtle',
        color: isCustom ? 'info' : 'neutral',
      }, () => isCustom ? '客製化' : '公版')
    },
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
          label: 'Copy payment ID',
          onSelect() {
            navigator.clipboard.writeText(row.original._id)
            toast.add({
              title: 'Payment ID copied to clipboard!',
              color: 'success',
              icon: 'i-lucide-circle-check',
            })
          },
        },
        {
          label: '前往編輯',
          onSelect() {
            navigateTo(`/C/landingPageEditor/${row.original._id}`)
          },
        },
        {
          label: row.getIsExpanded() ? 'Collapse' : 'Expand',
          onSelect() {
            row.toggleExpanded()
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

const table = useTemplateRef('table')
</script>

<template>
  <div class="flex-1 divide-y divide-(--ui-border-accented) w-full">
    <UTable
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
  </div>
</template>
