<template>
  <div class="input">
    <label :for="id">{{ label }}</label>
    <input :id="id" :type="type" :name="name" :placeholder="placeholder"
           @keydown="checkCharacterAllowed" @input="valueUpdated"
           :required="required"/>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    label: String,
    type: {
      type: String,
      default: "text",
    },
    name: String,
    placeholder: String,
    id: {
      type: String,
      required: true,
    },
    charactersAllowed: {
      type: String,
      default: " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789._-@",
    },
    pattern: RegExp,
    required: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    getValue: function(event) {
      return document.getElementById(this.id).value;
    },
    checkCharacterAllowed: function(event) {
      const whitespaces = ["Backspace", "Enter", "Tab", "ArrowLeft", "ArrowRight"];
      if (!(this.charactersAllowed.includes(event.key) || whitespaces.includes(event.key))) {
        event.preventDefault();
      }
    },
    valueUpdated: function(event){
      this.$emit("valueUpdated",event.target.value);
    },
    setValue: function(value){
      document.getElementById(this.id).value = value
    },
    checkPattern: function() {
      if (this.pattern) {
        return !!this.getValue().match(this.pattern);
      }
      return true;
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
