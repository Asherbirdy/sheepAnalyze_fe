<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute() as { params: { id: string } }
</script>

<template>
  <div>
    <h1>{{ route.params.id }}</h1>
  </div>
</template>
