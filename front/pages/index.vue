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
import { ref } from 'vue'

interface Article {
  id: number
  title: string
}
const articles = ref<Article[]>([])
articles.value = [
  {
    id: 1,
    title: "Nuxt3入門",
  },
  {
    id: 2,
    title: "Jest再入門",
  },
]
</script>