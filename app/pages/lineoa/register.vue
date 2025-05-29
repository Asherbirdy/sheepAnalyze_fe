<script setup lang='ts'>
const { LineProfile } = useLiff({
  liffId: {
    dev: '2007494898-BJjV7nbe',
    production: '',
  },
  liffInit: true,
  login: true,
})
</script>

<template>
  <div>
    <pre>
      LineProfile: {{ LineProfile }}
    </pre>
  </div>
</template>
