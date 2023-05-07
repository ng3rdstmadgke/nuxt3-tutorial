<template>
  <div>
    <p>新着記事</p>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <NuxtLink :to="{path: '/details', query: {id: article.id}}">{{ article.title }}</NuxtLink>
      </li>
    </ul>
    <Advertisement />
  </div>

</template>

<script setup lang="ts">
const { data: articles, pending, error, refresh } = await useFetch("/api/blogs")
/**
 * useFetch/useLazyFetchの戻り値の型定義
 * 
 * type AsyncData<DataT> = {
 *   data: Ref<DataT> // <- レスポンスボディ
 *   pending: Ref<boolean>
 *   refresh: () => Promise<void>
 *   execute: () => Promise<void>
 *   error: Ref<Error | boolean>
 * }
 */
</script>