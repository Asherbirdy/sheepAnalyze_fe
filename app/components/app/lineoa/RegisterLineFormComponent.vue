<script setup lang='ts'>
import type { FormError } from '@nuxt/ui'

interface ModelType {
  name: string
  districtId: string
  lineProfileId: string
}

const model = defineModel<ModelType>('state', { required: true })

enum FormKey {
  Name = 'name',
  DistrictId = 'districtId',
}

const validate = (): FormError[] => {
  const errors = []
  if (!model.value.name)
    errors.push({ name: FormKey.Name, message: 'Required' })

  if (!model.value.districtId)
    errors.push({ name: FormKey.DistrictId, message: 'Required' })
  return errors
}

const items = ref([
  {
    label: 'Backlog',
    value: 'backlog',
  },
  {
    label: 'Todo',
    value: 'todo',
  },
  {
    label: 'In Progress',
    value: 'in_progress',
  },
])
</script>

<template>
  <UForm
    :validate="validate"
    :state="model"
    class="space-y-4"
  >
    <UFormField
      label="姓名"
      :name="FormKey.Name"
    >
      <UInput v-model="model.name" />
    </UFormField>

    <UFormField
      label="區"
      :name="FormKey.DistrictId"
    >
      <USelect
        v-model="model.districtId"
        :items="items"
        class="w-48"
      />
    </UFormField>
  </UForm>
</template>
