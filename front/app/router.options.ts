import type { RouterOptions } from '@nuxt/schema'
import { RouterOptions as VueRouterOption } from 'vue-router'

export default <RouterOptions> {
  routes(_routes: VueRouterOption["routes"]) {
    return [..._routes, {
      path: "/hoge",
      component: () => import("~/pages/index.vue")
    }]
  }
}