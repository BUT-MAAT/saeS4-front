<template>
  <div class="input">
    <label :for="id">{{ label }}</label>
    <input :id="id" :type="type" :name="name" :placeholder="placeholder" @keydown="checkCharacterAllowed" @input="updateValue"/>
    <div class="postalResult">
      <ul>
        <li v-for="(postal,index) in matchingPostaux" :key="index">
          {{ postal }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import json from '/static/postal.json'
export default {
  name: "PostalInput",
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
      default: "0123456789",
    },
    pattern: RegExp,
  },
  mounted() {
    console.log("UUUUUUUUUUUUUUUUUUUUUUUUUUUUu")
    console.log(typeof this.postauxList[0])
    console.log()

  },
  data(){
    return {
      matchingPostaux : [],
      postauxList : json.postal_code,
    }
  },
  methods: {
    checkCharacterAllowed: function(event) {
      const whitespaces = ["Backspace", "Enter"]
      if (!(this.charactersAllowed.includes(event.key) || whitespaces.includes(event.key))) {
        event.preventDefault();
      }
    },
    checkPattern: function() {
      if (this.pattern) {
        return !!document.getElementById(this.id).value.match(this.pattern);
      }
      return true;
    },
    updateValue: function(event){
      console.log("testgi")
      console.log(event.target.innerHTML)
      let tmpTab = this.postauxList
        .map(item => item.toString())
        .filter(item => item.includes(""))
    },
    testMethod: function(){
      console.log("lamethodedetestmarche")
    }
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
