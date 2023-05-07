<template>
  <div>
    <article v-if="article">
      <p>タイトル: {{ article.title }}</p>
      <hr>
      <div style="width: 500px">{{ article.content }}</div>
    </article>
    <NuxtLink to="/">戻る</NuxtLink>
    <Advertisement />
  </div>
</template>

<script setup lang="ts">
// 明示的なインポートは不要だが、IDEの補完を効かせるために記述している
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useArticles } from '~/composables/useArticles'


// https://router.vuejs.org/guide/advanced/composition-api.html
const route = useRoute();
const { id } = route.query;
const { data: article } = useFetch(`/api/blogs/${id}`)
</script>
