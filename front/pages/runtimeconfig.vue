<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const env = process.server ? 'Server' : 'Client';
console.log(`[${env}] public.foo: ${runtimeConfig.public.foo}`);
console.log(`[${env}] secret: ${runtimeConfig.secret}`);
console.log(`[${env}] db.user: ${runtimeConfig.db?.user}`);
console.log(`[${env}] db.password: ${runtimeConfig.db?.password}`);
console.log(`[${env}] test.username: ${runtimeConfig.test?.username}`);
console.log(`[${env}] test.userName: ${runtimeConfig.test?.userName}`);
console.log(`[${env}] test.user_name: ${runtimeConfig.test?.user_name}`);
</script>

<template>
  <div>No Contents</div>
</template>