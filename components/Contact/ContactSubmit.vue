<template>
  <input type="submit" :value="value" />
</template>

<script>
export default {
  name: "ContactSubmit",
  props: {
    value: String,
  },
}
</script>

<style scoped>
input {
  border: 2px solid var(--dark-blue);
  border-radius: 10px;
  font-size: 18px;
  padding: 10px 20px;
}
</style>
