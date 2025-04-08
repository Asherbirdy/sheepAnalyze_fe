<script setup lang="ts">
const route = useRoute('C-landingPageEditor-id')
</script>

<template>
  <div>
    <h1>{{ route.params.id }}</h1>
  </div>
</template>
