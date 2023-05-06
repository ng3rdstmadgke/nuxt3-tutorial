// 明示的なインポートは不要だが、IDEの補完を効かせるために記述している
import { ref } from 'vue'

interface Article {
  id: number;
  title: string;
  content: string;
}

// 今は固定値で返す 本来はAPIから取得する
const demoArticles = [
  {
    id: 1,
    title: "Nuxt3入門",
    content: "Nuxt3の入門記事です!!",
  },
  {
    id: 2,
    title: "Jest再入門",
    content: "Jestの再入門記事です!!",
  },
]

export function useArticles() {
  const articles = ref<Article[]>(demoArticles)
  const article = ref<Article | null>(null)

  // 記事一覧の取得 (本来はAPIから取得する)
  const fetchArticles = (): void => {
    articles.value = demoArticles
  }

  // 記事詳細の取得 (本来はAPIから取得する)
  const fetchArticle = (id: number): void => {
    article.value = demoArticles.find((article) => article.id === id) || null
  }

  return {
    articles,
    article,
    fetchArticles,
    fetchArticle,
  };
}