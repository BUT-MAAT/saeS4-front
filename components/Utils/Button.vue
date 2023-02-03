<template>
  <input type="button" :id="id" :value="value" />
</template>

<script>
export default {
  name: "Button",
  props: {
    value: String,
    id: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
input {
  background-color: var(--white);
  border: 2px solid var(--dark-blue);
  border-radius: 10px;
  font-size: 18px;
  padding: 10px 20px;
  transition: background-color .2s;
}
input:hover {
  cursor: pointer;
  background-color: var(--active);
}
</style>
