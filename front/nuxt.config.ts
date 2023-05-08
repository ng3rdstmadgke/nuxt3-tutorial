// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    public: {
      foo: "bar"
    },
    secret: "/path/to/secret",
    db: {
      user: "test",
      password: "passw0rd"
    },
    test: {
      username: "username",
      userName: "userName",
      user_name: "user_name",
    }
  }
})
