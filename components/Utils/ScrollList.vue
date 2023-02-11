<template>
  <div class="scroll-list">
    <label>{{ label }}</label>
    <select class="selectScrollList" ref="select" :disabled="disabled === true">
      <option value="" disabled selected>{{ placeholder }}</option>
      <option v-for="item in getItemsDisplayField()" :value="item">
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "ScrollList",
  props: {
    label: String,
    items: Array,
    displayField: String,
  },
  data() {
    return {
      disabled: false,
      placeholder: "--Choisissez une option--",
    }
  },
  methods: {
    getItemsDisplayField: function() {
      return this.items.map(item => item[this.displayField]);
    },
    setPlaceholder: function(value) {
      this.placeholder = value;
    },
    disable: function() {
      this.disabled = true;
    },
    enable: function() {
      this.disabled = false;
    },
    selectDefault: function() {
      this.enable();
      this.$refs.select.selectedIndex = 0;
      if (this.items.length === 1) {
        this.$refs.select.selectedIndex = 1;
        this.$el.dispatchEvent(new Event("change"));
        this.disable();
      }
    },
    getSelected: function() {
      return this.items[this.$refs.select.selectedIndex - 1];
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
