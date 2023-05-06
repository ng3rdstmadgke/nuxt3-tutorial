<template>
  <div>
    <header>サンプルアプリ</header>
    <div class="container">
      <article v-if="article">
        <p>タイトル: {{ article.title }}</p>
        <hr>
        <div style="width: 500px">{{ article.content }}</div>
      </article>
      <nuxtlink to="/">戻る</nuxtlink>
    </div>
    <footer>2022</footer>
  </div>
</template>

<script setup lang="ts">
// 明示的なインポートは不要だが、IDEの補完を効かせるために記述している
import { ref } from 'vue'
import { useRoute } from 'vue-router'

interface Article {
  id: number
  title: string
  content: string
}

// https://router.vuejs.org/guide/advanced/composition-api.html
const route = useRoute();
const { id } = route.query;
const articles = [
  {
    id: 1,
    title: "Nuxt3入門",
    content: "Nuxt3の入門記事です。",
  },
  {
    id: 2,
    title: "Jest再入門",
    content: "Jestの再入門記事です。",
  },
]

const article = ref<Article | null>(null)
// +id は文字列を数値に変換する
article.value = articles.find(article => +id === article.id) ?? null
</script>


<style scoped>
header {
  border-bottom-style: solid;
  padding: 1rem;
}
footer {
  margin-top: 2rem;
  background-color: #8080ee;
  padding: 1rem;
}
.container {
  margin: 2rem;
}
</style>