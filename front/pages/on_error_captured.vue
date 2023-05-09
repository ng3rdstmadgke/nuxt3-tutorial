<template>
  <div>
    <p>{{ message }}</p>
    <FlakyComponent />
  </div>
</template>

<script setup lang="ts">
import { onErrorCaptured } from "vue"
const message = ref("init")

onErrorCaptured((err: any) => {
  message.value = err.message
  console.log("onErrorCapterd: ", err)
  console.log("message: ", message.value)

  // falseを返却すると、エラーが伝搬しなくなる
  // return false
})
</script>