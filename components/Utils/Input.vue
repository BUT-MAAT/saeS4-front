<template>
  <div class="input" ref="input">
    <div class="input-top">
      <label :for="id" :class="{ 'error-label': hasError }">
        {{ label }}
      </label>
      <span class="error-text" v-if="hasError">Champ invalide</span>
    </div>
    <input :id="id" :type="type" :name="name" :placeholder="placeholder"
           @keydown="checkCharacterAllowed" @input="valueUpdated"
           :class="{ 'error-input': hasError }"
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
    charactersAllowed: String,
    pattern: RegExp,
    required: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      hasError: false,
    }
  },
  methods: {
    getValue: function(event) {
      return document.getElementById(this.id).value;
    },
    checkCharacterAllowed: function(event) {
      if (!this.charactersAllowed) return;
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
    isValid: function() {
      if (!this.required) return this.checkPattern();
      return this.getValue().trim() !== "" && this.checkPattern();
    },
    checkErrors: function() {
      this.hasError = !this.isValid();
      if (this.hasError) this.scrollToMe();
    },
    scrollToMe: function() {
      const el = this.$refs.input;
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
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
.input-top {
  display: flex;
  justify-content: space-between;
}
input {
  height: 40px;
  border-radius: 10px;
  font-size: 18px;
  border: 2px solid var(--dark-blue);
  padding: 20px;
}

.error-text {
  color: var(--error);
}
.error-input {
  border: 3px solid var(--error);
}
</style>
