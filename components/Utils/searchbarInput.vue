<template>
  <div class="PostalInput">
    <Input
      :id="id"
      :label="label"
      :name="name"
      :placeholder="placeholder"
      ref="input"
      :charactersAllowed="charactersAllowed"
      :pattern="pattern"
      @valueUpdated="valueUpdated"
      :required="required"
    />
    <search-result :results=matchingPostaux @value-picked="valuePicked"></search-result>
  </div>
</template>

<script>

import IResearcher from "~/scripts/searchbar/IResearcher";
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
      default: " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789._-@",
    },
    researcher:{
      type: IResearcher,
      required: true,
    },
    pattern: RegExp,
    required: {
      type: Boolean,
      default: false,
    }
  },
  data(){
    return {
      matchingPostaux : [],
    }
  },
  methods: {
    /**
     * This function is call when the value is updated, it updates the searchbar result value
     * @param value the input's value
     */
    valueUpdated: function(value){
      this.researcher.getSearchResult(value).then(res =>{
        this.matchingPostaux = res
      })
        .catch(reason => {});
    },
    /**
     * set the input's value
     * @param value
     */
    setValue: function(value){
      this.$refs.input.setValue(value)
    },

    /**
     * This function is called when the user click on a searchbar value
     * it emit a new event, update the input's value and reset the search results
     * @param value
     */
    valuePicked: function (value){
      this.$refs.input.setValue(value)
      this.$emit("valuePicked",value)
      this.matchingPostaux = []
    },
  },
}
</script>

<style scoped>

</style>
