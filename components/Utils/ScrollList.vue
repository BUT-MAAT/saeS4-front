<template>
  <select id="select">
    <option value="">--Choissisez une option--</option>
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
  methods: {
    getSelected: function() {
      return document.getElementById("select").value;
    }
  },
}
</script>

<style scoped>

</style>
