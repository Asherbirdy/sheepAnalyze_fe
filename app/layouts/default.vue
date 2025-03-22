<script lang="ts" setup>
import { PublicRoutes } from '~/enum'

// 定義導航路由
const routes = [
  {
    label: '表單教學',
    to: PublicRoutes.News,
  },
  {
    label: '登入',
    to: PublicRoutes.Login,
  },
]
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-gray-100 p-4 flex justify-between">
      <div>LOGO</div>
      <div class="hidden md:block">
        <nav class="flex space-x-4">
          <NuxtLink
            v-for="route in routes"
            :key="route.to"
            :to="route.to"
            class="text-gray-600"
          >
            {{ route.label }}
          </NuxtLink>
        </nav>
      </div>
      <div class="md:hidden">
        <UButton icon="i-heroicons-bars-3" size="md" color="primary" variant="ghost" />
      </div>
    </header>
    <main class="flex-grow mx-2">
      <slot />
    </main>
    <footer class="bg-gray-100 p-4 mt-16">
      <div class="text-center">
        Footer
      </div>
    </footer>
  </div>
</template>
