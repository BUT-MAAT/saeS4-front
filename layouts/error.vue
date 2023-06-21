<template>
  <div class="error-container">
    <h1 v-if="error.statusCode === 404">Error 404<br>Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  name: "error",
  props: ['error'],
  layout: 'empty' // you can set a custom layout for the error page
}
</script>

<style scoped>
.error-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
