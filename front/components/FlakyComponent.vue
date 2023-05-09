<!-- クライアントサイドでのエラーはコンソールに出力されるが、エラーページに遷移しない
-->
<script setup lang="ts">
onMounted(() => {
  // createError は Nuxt3 で提供される関数 https://nuxt.com/docs/api/utils/create-error
  throw createError('FlakyComponentでエラーが発生しました！');
})
</script>

<!-- サーバーサイドでエラーが発生すると500エラーページに遷移してしまう
<script setup lang="ts">
throw createError('FlakyComponentでエラーが発生しました！');
</script>
-->

<template>
  <div>サブコンポーネント</div>
</template>