<template>
  <div class="scroll-list">
    <label>{{ label }}</label>
    <select ref="select" :disabled="disabled === true">
      <option value="" disabled selected>{{ placeholder }}</option>
      <option v-for="item in items" :value="item">
        {{ item[displayField] }}
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
    placeholder: {
      type: String,
      default: "--"
    }
  },
  data() {
    return {
      disabled: false,
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
select {
  height: 48px;
  border-radius: 10px;
  border: 2px solid var(--light-blue);
  font-size: 16px;
}
</style>
