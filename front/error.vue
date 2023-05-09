<script setup lang="ts">
import { NuxtApp } from "#app"

const props = defineProps<{ error: NuxtApp["payload"]["error"]}>();
const errorHandler = () => clearError({redirect: "/"})
const isDev = process.dev
</script>

<template>
  <p>エラーが発生しました。</p>
  <button @click="errorHandler">トップページに戻る</button>
  <p v-if="isDev">{{ error }}</p>
</template>