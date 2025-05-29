<script setup lang='ts'>
import type { FormError } from '@nuxt/ui'
import type { LineoaRegisterDataType, LineoaRegisterFeatureType, StateType } from '~/type'
import { useAttendanceAccountApi } from '~/apis'

enum FormKey {
  SerialNumber = 'serialNumber',
}

const { LineProfile } = useLiff({
  liffId: {
    dev: '2007494898-BJjV7nbe',
    production: '',
  },
  liffInit: true,
  login: true,
})

const state = ref<StateType<LineoaRegisterDataType, LineoaRegisterFeatureType>>({
  data: {
    form: {
      [FormKey.SerialNumber]: '',
    },
  },
  feature: {
    submit: {
      isLoading: false,
    },
  },
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state[FormKey.SerialNumber]) {
    errors.push({
      name: FormKey.SerialNumber,
      message: '請輸入序號',
    })
  }
  return errors
}

const handleBindAccount = async () => {
  const { feature, data } = state.value

  const { execute } = await useAttendanceAccountApi.create({
    lineProfileId: LineProfile?.value?.userId || '',
    serialNumber: data.form[FormKey.SerialNumber],
  })

  feature.submit.isLoading = true
  execute()
  feature.submit.isLoading = false
}
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <h2 class="text-2xl font-extrabol mb-4">
      點名者帳號綁定
    </h2>
    <img
      :src="LineProfile?.pictureUrl"
      alt="Line Profile"
      class="w-24 h-24 rounded-full border-4 border-white shadow-md"
    >
    <p class="text-lg mt-2">
      {{ LineProfile?.displayName }}
    </p>
    <p class="text-sm text-gray-500">
      Id: {{ LineProfile?.userId }}
    </p>
    <UForm
      :validate="validate"
      :ui="{ root: 'space-y-4' }"
      :state="state.data.form"
    >
      <UFormField
        label="序號"
        :name="FormKey.SerialNumber"
      >
        <UInput
          v-model="state.data.form.serialNumber"
          label="序號"
          :ui="{ root: 'w-full' }"
        />
      </UFormField>
    </UForm>
    <UButton
      label="註冊"
      :disabled="state.data.form.serialNumber.length !== 8"
      :loading="state.feature.submit.isLoading"
      @click="handleBindAccount"
    />
  </div>
</template>
