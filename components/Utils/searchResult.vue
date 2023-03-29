<template>
  <div class="searchResult">
    <ul>
      <li v-for="(result,index) in results" :key="index" @click="clicked">
        {{ result }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "searchResult",
  props: {
    results: {
      type: Array,
      // required: true
    },
  },
  methods:{
    clicked: function (event){
      this.$emit('value-picked',event.target.innerText)
    }
  }
}
</script>

<style scoped>
ul{
  color:black;
}

</style>
