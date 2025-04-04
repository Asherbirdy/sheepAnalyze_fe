<script lang="ts" setup>
import { useMenuStore } from '~/composables'

const menuStore = useMenuStore()
const items = ref(menuStore.getMenu())
</script>

<template>
  <div>
    <header class="flex items-center justify-between bg-gray-100">
      <h1 class="p-5">
        LOGO
      </h1>
      <div class="md:hidden">
        <UDropdownMenu
          :items="items"
          :ui="{
            content: 'w-48',
          }"
        >
          <UButton
            icon="i-lucide-menu"
            variant="ghost"
          />
        </UDropdownMenu>
      </div>
    </header>
    <!-- 側邊選單 - 網頁 -->
    <div class="flex h-[calc(100vh-64px)] ">
      <UNavigationMenu
        orientation="vertical"
        :items="items"
        class="data-[orientation=vertical]:w-48 m-3 md:block hidden"
      />
      <UContainer class="flex-1 m-3">
        <slot />
      </UContainer>
    </div>
  </div>
</template>

<!-- <style>
* {
  outline: 1px solid red;
}
</style> -->
