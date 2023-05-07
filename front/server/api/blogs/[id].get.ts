import fs from "fs"


export default defineEventHandler(async (event) => {
  const articles = JSON.parse(fs.readFileSync(process.env.BLOG_DB, "utf-8")).articles
  console.log(event)
  const found = articles.find((article) => +event.context.params.id === article.id)
  if (!found) {
    createError({
      statusCode: 404,
      statusMessage: "Not Found",
    })
  }
  return found;
})