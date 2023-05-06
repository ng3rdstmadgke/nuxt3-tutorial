<template>
  <div>
    <p>新着記事</p>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <NuxtLink :to="{path: '/details', query: {id: article.id}}">{{ article.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// 明示的なインポートは不要だが、IDEの補完を効かせるために記述している
import { useArticles } from '~/composables/useArticles'
const { fetchArticles, articles } = useArticles()
fetchArticles()
</script>