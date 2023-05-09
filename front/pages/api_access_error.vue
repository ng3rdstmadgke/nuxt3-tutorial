<template>
  <div>APIアクセスエラーハンドリング</div>
  <div v-if="articles">
    成功!!
  </div>
  <div v-else-if="error">
    失敗、、、 ({{ error }})
  </div>
</template>

<script setup lang="ts">
const {data: articles, error} = useFetch("/api/error")
console.log("articles: ", articles)
console.log("error: ", error)
</script>