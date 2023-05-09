<template>
  <div>
    <p>新着記事</p>
    <ul>
      <li v-for="item in data?.articles" :key="item.id">
        <NuxtLink :to="`/details/${item.id}`">{{ item.title }}</NuxtLink>
      </li>
    </ul>
    <div>
      <article v-if="data?.article">
        <p>タイトル: {{ data?.article.title }}</p>
        <hr>
        <div style="width: 500px">{{ data?.article.content }}</div>
      </article>
    </div>
  </div>

</template>

<script setup lang="ts">
interface Article {
  id: number
  title: string
  content: string
}

const { data, pending, error, refresh } = await useAsyncData(
  "getArticles",
  async (): Promise<{articles: Article[], article: Article}> => {
    return await Promise.all([
      $fetch<Article[]>(`/api/blogs/`, {method: "GET"}),
      $fetch<Article>(`/api/blogs/1`, {method: "GET"}),
    ]).then(
      ([articles, article]) => {
        return { articles, article }
    })
  }
)

console.log("data: ", data)
console.log("data.value: ", data.value)
console.log("data.value.articles: ", data.value?.articles)
console.log("data.value.article: ", data.value?.article)
console.log("pending: ", pending)
console.log("error: ", error)
console.log("refresh: ", refresh)
</script>