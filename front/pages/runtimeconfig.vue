<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const env = process.server ? 'Server' : 'Client';
console.log(`[${env}] public.foo: ${runtimeConfig.public.foo}`);
console.log(`[${env}] secret: ${runtimeConfig.secret}`);
console.log(`[${env}] db.user: ${runtimeConfig.db?.user}`);
console.log(`[${env}] db.password: ${runtimeConfig.db?.password}`);
</script>

<template>
  <div>No Contents</div>
</template>