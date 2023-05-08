<template>
  <div>
    <p>新着記事</p>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <!--
        <NuxtLink :to="{path: '/details', query: {id: article.id}}">{{ article.title }}</NuxtLink>
        -->
        <NuxtLink :to="`/details/${article.id}`">{{ article.title }}</NuxtLink>
      </li>
    </ul>
    <Advertisement />
  </div>

</template>

<script setup lang="ts">
// useFetchを使う場合
const { data: articles, pending, error, refresh } = await useFetch("/api/blogs")

// useAsyncDataを使う場合
// const { data: articles, pending, error, refresh } = await useAsyncData(
//   "getArticles",
//   () => { return $fetch("/api/blogs") }
// )

// $fetchを使う場合
// const articles = await $fetch(`/api/blogs/`).then((data) => {
//   return ref(data);
// });

// 複数のAPIに非同期でアクセスする場合
// const articles = ref([])
// const {data1, data2} = await Promise.all([
//   $fetch(`/api/blogs/`, {method: "GET"}),
//   $fetch(`/api/blogs/1`, {method: "GET"}),
// ]).then(
//   ([data1, data2]) => {
//     return { data1, data2 }
//   }
// )
// articles.value = data1
</script>