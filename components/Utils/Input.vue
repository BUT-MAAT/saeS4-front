<template>
  <div class="input">
    <label :for="id">{{ label }}</label>
    <input :id="id" :type="type" :name="name" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    label: String,
    type: {
      type: String,
      value: "text",
    },
    name: String,
    placeholder: String,
    id: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.input {
  display: flex;
  flex-flow: column nowrap;
  font-size: 18px;
}
input {
  height: 40px;
  border-radius: 10px;
  font-size: 18px;
  border: 2px solid var(--dark-blue);
  padding: 20px;
}
</style>
