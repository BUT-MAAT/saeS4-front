<template>
  <div class="hero-title">
    <h1><slot /></h1>
  </div>
</template>

<script>
export default {
  name: "HeroTitle"
}
</script>

<style scoped>
h1 {
  color: var(--white);
  font-size: 48px;
  font-weight: bold;
  text-align: center;
}

h1::after {
  content: "";
  display: block;
  margin: 24px auto auto;
  width: 312px;
  border-bottom: 4px solid var(--light-blue);
  border-radius: 4px;
}

</style>
