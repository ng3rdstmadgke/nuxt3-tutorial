<template>
  <div>
    <article v-if="article">
      <p>タイトル: {{ article.title }}</p>
      <hr>
      <div style="width: 500px">{{ article.content }}</div>
    </article>
    <NuxtLink to="/">戻る</NuxtLink>
    <div>
      <button @click="navigate">navigateTo</button>
    </div>
    <Advertisement />
  </div>
</template>

<script setup lang="ts">
// 明示的なインポートは不要だが、IDEの補完を効かせるために記述している
import { useRoute } from 'vue-router'

// https://router.vuejs.org/guide/advanced/composition-api.html
const route = useRoute();
const { id } = route.params;
// useFetchを使う場合
const { data: article } = useFetch(`/api/blogs/${id}`)

// useAsyncDataを使う場合
// const { data: article, pending, error, refresh } = await useAsyncData(
//   "getArticle",
//   () => { return $fetch(`/api/blogs/${id}`) }
// )

// $fetchを使う場合
// const article = await $fetch(`/api/blogs/${id}`).then((data) => {
//   return ref(data);
// });

const navigate = () => {
  return navigateTo({
    path: "/",
    query: { hoge: "piyo" }
  })
}
</script>
