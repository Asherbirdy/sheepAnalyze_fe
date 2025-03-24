<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
</script>

<template>
  <div>
    <UButton color="primary">
      Click me
    </UButton>
    <p>
      {{ $config.public.ENVIRONMENT }}
    </p>
  </div>
</template>
