<template>
  <div class="PostalInput">
    <Input
      id="PostalCode"
      label="Code Postal"
      name="PostalCode"
      placeholder="Code Postal"
      ref="input"
      charactersAllowed="0123456789"
      @valueUpdated="valueUpdated"
    />
    <search-result :results=matchingPostaux @value-picked="valuePicked"></search-result>
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
  },
  data(){
    return {
      matchingPostaux : [],
      postauxList : json.postal_code,
    }
  },
  methods: {
    valueUpdated: function(value){
      console.log(value)
      let tmpTab = this.postauxList
        .map(item => item.toString())
        .filter(item => item.includes(value))
      tmpTab.length = tmpTab.length < 5 ? tmpTab.length : 5
      this.matchingPostaux = tmpTab;
      console.log(tmpTab)
    },
    valuePicked: function (value){
      console.log(value)
      this.$refs.input.setValue(value)
      this.matchingPostaux = []
    },
  },
}
</script>

<style scoped>

</style>
