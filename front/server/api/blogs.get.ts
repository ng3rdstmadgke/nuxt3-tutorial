import fs from "fs"

export default defineEventHandler(
  async() => {
    return JSON.parse(fs.readFileSync(process.env.BLOG_DB, "utf-8")).articles
  }
)