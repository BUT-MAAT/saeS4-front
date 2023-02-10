<template>
  <select id="select">
    <option value="" disabled selected>{{ placeholder }}</option>
    <option v-for="option in options" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  name: "ScrollList",
  props: {
    options: Array,
  },
  data() {
    return {
      placeholder: "--Choisissez une option--",
    }
  },
  methods: {
    setPlaceholder: function(value) {
      this.placeholder = value;
    },
    getSelected: function() {
      return document.getElementById("select").value;
    },
  },
}
</script>

<style scoped>

</style>
