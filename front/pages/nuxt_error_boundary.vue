<script>
const log = (err) => console.log(err)
</script>

<template>
  <div>
    <!-- @error にはエラーイベントが発生した際のコールバックを指定 -->
    <NuxtErrorBoundary @error="log">
      <!-- <SetupError /> -->
      <FlakyComponent />
      <!-- #はv-bind -->
      <template #error="{ error }">
        <p>
          An error occurd: {{ error }}
        </p>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>