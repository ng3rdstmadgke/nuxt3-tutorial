<script setup lang="ts">
const runtimeConfig = useAppConfig();
const env = process.server ? 'Server' : 'Client';
console.log(`[${env}] bar: ${runtimeConfig.bar}`);
</script>

<template>
  <div>No Contents</div>
</template>