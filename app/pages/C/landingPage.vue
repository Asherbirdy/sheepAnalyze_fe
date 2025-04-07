<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'
import { h, resolveComponent } from 'vue'

const UButton = resolveComponent('UButton')
const UBadge = resolveComponent('UBadge')
const UDropdownMenu = resolveComponent('UDropdownMenu')

const toast = useToast()

interface Payment {
  // 先這些
  isActive: boolean
  title: string
  isCustom: boolean
  // 先放著
  id: string
  _id: string
  updatedAt: string
  date: string
  status: 'paid' | 'failed' | 'refunded'
  email: string
  amount: number
}

const data = ref<Payment[]>([
  {
    id: '4600',
    _id: '1',
    title: 'Payment 1',
    isActive: true,
    isCustom: true,
    updatedAt: '2024-03-11T15:30:00',
    date: '2024-03-11T15:30:00',
    status: 'paid',
    email: 'james.anderson@example.com',
    amount: 594,
  },
  {
    id: '4599',
    _id: '2',
    title: 'Payment 2',
    isActive: false,
    isCustom: false,
    updatedAt: '2024-03-11T10:10:00',
    date: '2024-03-11T10:10:00',
    status: 'failed',
    email: 'mia.white@example.com',
    amount: 276,
  },
  {
    id: '4598',
    _id: '3',
    title: 'Payment 3',
    isActive: true,
    isCustom: false,
    updatedAt: '2024-03-11T08:50:00',
    date: '2024-03-11T08:50:00',
    status: 'refunded',
    email: 'william.brown@example.com',
    amount: 315,
  },
  {
    id: '4597',
    _id: '4',
    title: 'Payment 4',
    isActive: true,
    isCustom: false,
    updatedAt: '2024-03-10T19:45:00',
    date: '2024-03-10T19:45:00',
    status: 'paid',
    email: 'emma.davis@example.com',
    amount: 529,
  },
  {
    id: '4596',
    _id: '5',
    title: 'Payment 5',
    isActive: true,
    isCustom: false,
    updatedAt: '2024-03-10T15:55:00',
    date: '2024-03-10T15:55:00',
    status: 'paid',
    email: 'ethan.harris@example.com',
    amount: 639,
  },
  {
    id: '4595',
    _id: '6',
    title: 'Payment 6',
    isActive: true,
    isCustom: false,
    updatedAt: '2024-03-10T13:40:00',
    date: '2024-03-10T13:40:00',
    status: 'refunded',
    email: 'ava.thomas@example.com',
    amount: 428,
  },
  {
    id: '4594',
    _id: '7',
    title: 'Payment 7',
    isActive: true,
    isCustom: false,
    updatedAt: '2024-03-10T09:15:00',
    date: '2024-03-10T09:15:00',
    status: 'paid',
    email: 'michael.wilson@example.com',
    amount: 683,
  },
  {
    id: '4593',
    _id: '8',
    title: 'Payment 8',
    isActive: true,
    isCustom: false,
    updatedAt: '2024-03-09T20:25:00',
    date: '2024-03-09T20:25:00',
    status: 'failed',
    email: 'olivia.taylor@example.com',
    amount: 947,
  },
  {
    id: '4592',
    _id: '9',
    title: 'Payment 9',
    isActive: true,
    isCustom: false,
    updatedAt: '2024-03-09T18:45:00',
    date: '2024-03-09T18:45:00',
    status: 'paid',
    email: 'benjamin.jackson@example.com',
    amount: 851,
  },
  {
    id: '4591',
    _id: '10',
    title: 'Payment 10',
    isActive: true,
    isCustom: false,
    updatedAt: '2024-03-09T16:05:00',
    date: '2024-03-09T16:05:00',
    status: 'paid',
    email: 'sophia.miller@example.com',
    amount: 762,
  },
  {
    id: '4590',
    _id: '11',
    title: 'Payment 11',
    isActive: true,
    isCustom: false,
    updatedAt: '2024-03-09T14:20:00',
    date: '2024-03-09T14:20:00',
    status: 'paid',
    email: 'noah.clark@example.com',
    amount: 573,
  },
  {
    id: '4589',
    _id: '12',
    title: 'Payment 12',
    isActive: true,
    isCustom: false,
    updatedAt: '2024-03-09T11:35:00',
    date: '2024-03-09T11:35:00',
    status: 'failed',
    email: 'isabella.lee@example.com',
    amount: 389,
  },
  {
    id: '4588',
    _id: '13',
    title: 'Payment 13',
    isActive: true,
    isCustom: false,
    updatedAt: '2024-03-08T22:50:00',
    date: '2024-03-08T22:50:00',
    status: 'refunded',
    email: 'liam.walker@example.com',
    amount: 701,
  },
  {
    id: '4587',
    _id: '14',
    title: 'Payment 14',
    isActive: true,
    isCustom: false,
    updatedAt: '2024-03-08T20:15:00',
    date: '2024-03-08T20:15:00',
    status: 'paid',
    email: 'charlotte.hall@example.com',
    amount: 856,
  },
  {
    id: '4586',
    _id: '15',
    title: 'Payment 15',
    isActive: true,
    isCustom: false,
    updatedAt: '2024-03-08T17:40:00',
    date: '2024-03-08T17:40:00',
    status: 'paid',
    email: 'mason.young@example.com',
    amount: 492,
  },
  {
    id: '4585',
    _id: '16',
    title: 'Payment 16',
    isActive: true,
    isCustom: false,
    updatedAt: '2024-03-08T14:55:00',
    date: '2024-03-08T14:55:00',
    status: 'failed',
    email: 'amelia.king@example.com',
    amount: 637,
  },
  {
    id: '4584',
    _id: '17',
    title: 'Payment 17',
    isActive: true,
    isCustom: false,
    updatedAt: '2024-03-08T12:30:00',
    date: '2024-03-08T12:30:00',
    status: 'paid',
    email: 'elijah.wright@example.com',
    amount: 784,
  },
  {
    id: '4583',
    _id: '18',
    title: 'Payment 18',
    isActive: true,
    isCustom: false,
    updatedAt: '2024-03-08T09:45:00',
    date: '2024-03-08T09:45:00',
    status: 'refunded',
    email: 'harper.scott@example.com',
    amount: 345,
  },
  {
    id: '4582',
    _id: '19',
    title: 'Payment 19',
    isActive: true,
    isCustom: false,
    updatedAt: '2024-03-07T23:10:00',
    date: '2024-03-07T23:10:00',
    status: 'paid',
    email: 'evelyn.green@example.com',
    amount: 918,
  },
  {
    id: '4581',
    _id: '20',
    title: 'Payment 20',
    isActive: true,
    isCustom: false,
    updatedAt: '2024-03-07T20:25:00',
    date: '2024-03-07T20:25:00',
    status: 'paid',
    email: 'logan.baker@example.com',
    amount: 567,
  },
])

const columns: TableColumn<Payment>[] = [
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
    accessorKey: 'id',
    header: '#',
    cell: ({ row }) => `#${row.getValue('id')}`,
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => {
      return new Date(row.getValue('date')).toLocaleString('en-US', {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const color = ({
        paid: 'success' as const,
        failed: 'error' as const,
        refunded: 'neutral' as const,
      })[row.getValue('status') as string]

      return h(UBadge, { class: 'capitalize', variant: 'subtle', color }, () => row.getValue('status'))
    },
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      const isSorted = column.getIsSorted()

      return h(UButton, {
        color: 'neutral',
        variant: 'ghost',
        label: 'Email',
        icon: isSorted ? (isSorted === 'asc' ? 'i-lucide-arrow-up-narrow-wide' : 'i-lucide-arrow-down-wide-narrow') : 'i-lucide-arrow-up-down',
        class: '-mx-2.5',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      })
    },
    cell: ({ row }) => h('div', { class: 'lowercase' }, row.getValue('email')),
  },
  {
    accessorKey: 'amount',
    header: () => h('div', { class: 'text-right' }, 'Amount'),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue('amount'))

      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR',
      }).format(amount)

      return h('div', { class: 'text-right font-medium' }, formatted)
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const items = [{
        type: 'label',
        label: 'Actions',
      }, {
        label: 'Copy payment ID',
        onSelect() {
          navigator.clipboard.writeText(row.original.id)

          toast.add({
            title: 'Payment ID copied to clipboard!',
            color: 'success',
            icon: 'i-lucide-circle-check',
          })
        },
      }, {
        label: row.getIsExpanded() ? 'Collapse' : 'Expand',
        onSelect() {
          row.toggleExpanded()
        },
      }, {
        type: 'separator',
      }, {
        label: 'View customer',
      }, {
        label: 'View payment details',
      }]

      return h('div', { class: 'text-right' }, h(UDropdownMenu, {
        'content': {
          align: 'end',
        },
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
      :data="data"
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
