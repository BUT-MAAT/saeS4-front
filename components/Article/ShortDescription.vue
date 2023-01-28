<template>
  <div class="short-description">
    <h2><slot /></h2>
  </div>
</template>

<style scoped>
.short-description {
  margin: auto;
  color: var(--white);
}
h2 {
  text-align: center;
  font-size: 28px;
}
</style>
