<template>
  <div class="location">
    <PostalInput
      id="PostalCode"
      label="Code Postal"
      name="PostalCode"
      placeholder="Code Postal"
      ref="postal"
      @keydown="handleKeydown"
    />
  </div>

</template>

<script>
import test from "/scripts/test"

export default {
  name: "LocationsInput",
  mounted() {
    console.log('tesddddddt')
    new test(11,111);
    // this.$refs.postal.testMethod();
  },
  methods:{
    updateValue: function(){
      console.log("svp pitié")
    }
  }
}
</script>

<style scoped>

</style>
