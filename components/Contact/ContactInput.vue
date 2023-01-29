<template>
  <div class="contact-input">
    <label :for="id">{{ label }}</label>
    <input :id="id" :type="type" :name="name" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: "ContactInput",
  props: {
    label: String,
    type: {
      type: String,
      value: "text",
    },
    name: String,
    placeholder: String,
    id: String,
  },
}
</script>

<style scoped>
.contact-input {
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
