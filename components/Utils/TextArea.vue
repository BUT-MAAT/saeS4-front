<template>
  <div class="textarea">
    <label :for="id">{{ label }}</label>
    <textarea :id="id" :name="name" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: "TextArea",
  props: {
    label: String,
    name: String,
    placeholder: String,
    id: String,
  },
}
</script>

<style scoped>
.textarea {
  display: flex;
  flex-flow: column nowrap;
  font-size: 18px;
}

textarea {
  height: 200px;
  font-family: Arial, serif;
  font-size: 14px;
  padding: 5px;
  border: 2px solid var(--dark-blue);
  border-radius: 10px;
}
</style>
