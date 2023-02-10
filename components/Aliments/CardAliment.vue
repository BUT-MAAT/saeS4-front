<template>
  <span class="card">{{ name }}</span>
</template>

<script>
export default {
  name: "CardAliment",
  props: {
    name: {
      type: String,
      required: true,
    }
  },
}
</script>

<style scoped>
.card {
  border: 1px solid black;
  border-radius: 4px;
  color: black;
  padding: 10px;
}
.card:hover {
  cursor: pointer;
}
</style>
