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
      {{ $config.public.env }}
    </p>
  </div>
</template>
