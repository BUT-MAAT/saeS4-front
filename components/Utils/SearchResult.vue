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
.searchResult {
  background-color: var(--white);
  border: 2px solid var(--dark-blue);
  border-radius: 5px;
  max-height: 100px;
  overflow-y: scroll;
}
ul {
  color:black;
  list-style: none;
}
li:hover {
  cursor: pointer;
}
</style>
