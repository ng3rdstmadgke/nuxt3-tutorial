<template>
  <div>
    <hr>
    <p style="margin: 0.2em 0;">広告</p>
    <ul style="list-style-type: none; padding-left: 0;">
      <li v-for="ad in ads" :key="ad.id">
        <a :href="ad.url" target="_blank">{{ ad.title }}</a>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
// 明示的なインポートは不要だが、IDEの補完を効かせるために記述している
import { ref } from 'vue'

interface Ad {
  id: number
  title: string
  url: string
}

const ads = ref<Ad[]>([])
ads.value = [
  {
    id: 1,
    title: 'Google',
    url: 'https://www.google.com/'
  },
  {
    id: 2,
    title: 'Yahoo',
    url: 'https://www.yahoo.co.jp/'
  }
]
</script>
