<template>
  <PostalInput
    id="PostalCode"
    label="Code Postal"
    name="PostalCode"
    placeholder="Code Postal"
    ref="postal"
    @keydown="handleKeydown"
  />
</template>

<script>
export default {
  name: "LocationsInput",
  mounted() {
    console.log('tesddddddt')
    this.$refs.postal.testMethod();
  }
}
</script>

<style scoped>

</style>
