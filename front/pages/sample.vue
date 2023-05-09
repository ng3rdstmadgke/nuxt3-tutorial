<template>
  <div>
    <div>
      <p>hoge</p>
      <p>id: {{ data?.hoge.id }}</p>
      <p>title: {{ data?.hoge.title }}</p>
    </div>
    <div>
      <p>fuga</p>
      <p>id: {{ data?.fuga.id }}</p>
      <p>title: {{ data?.fuga.title }}</p>
    </div>
  </div>

</template>

<script setup lang="ts">
interface Item {
  id: number;
  title: string;
}

const { data, pending, error, refresh } = await useAsyncData(
  "getArticles",
  async (): Promise<{hoge: Item, fuga: Item}> => {
    return await Promise.all([
      $fetch<Item>(`/api/hoge/`, {method: "GET"}),
      $fetch<Item>(`/api/fuga/`, {method: "GET"}),
    ]).then(
      ([hoge, fuga]) => {
        return { hoge, fuga }
    })
  }
)

console.log("data.value.hoge: ", data.value?.hoge)
console.log("data.value.fuga: ", data.value?.fuga)
</script>