<template>
  <div class="scroll-list">
    <label>{{ label }}</label>
    <select id="select" :disabled="disabled === true">
      <option value="" disabled selected>{{ placeholder }}</option>
      <option v-for="option in options" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "ScrollList",
  props: {
    label: String,
    options: Array,
  },
  data() {
    return {
      disabled: false,
      placeholder: "--Choisissez une option--",
    }
  },
  methods: {
    setPlaceholder: function(value) {
      this.placeholder = value;
    },
    disable: function() {
      this.disabled = true;
    },
    enable: function() {
      this.disabled = false;
    },
    getSelected: function() {
      return document.getElementById("select").value;
    },
  },
}
</script>

<style scoped>
.scroll-list {
  display: flex;
  flex-direction: column;
  color: black;
}
</style>
