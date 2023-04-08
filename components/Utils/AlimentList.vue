<template>
  <div class="AlimentContainer">
    <h3>Liste des aliments les plus consommés pour le {{ this.id }}</h3>
    <ul v-if="aliments.length !== 0" ref='AlimentList' @scroll="handleScroll">
      <li  v-for="(result,index) in aliments" :key="index">
        {{ result.nom_aliment }} ({{ result.nbChoisi }})
      </li>
    </ul>
    <h3 class="no-data" v-else>Aucune donnée disponible pour le moment</h3>
  </div>
</template>

<script>
export default {
  name: "Aliment",
  props: {
    aliments: {
      type: Array,
      required: true
    },
    id: []
  },
  methods: {
    handleScroll : function (event){
      // event.target.scrollTop = 0
      this.$emit("scrollAliment",event.target.scrollTop)
    },
    setScroll: function (scroll){
      let element = this.$refs.AlimentList
      element.scrollTop = scroll
    }
  }
}

</script>

<style scoped>
.AlimentContainer{
  background-color: #2c2c7c;
  width: 40vw;
}
.AlimentContainer h3{
  padding: 10px 0 10px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items:center ;
}
ul{
  height: 30vh;
  margin: 0;
  padding: 0;
  display: block;
  text-align: center;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;

}
.no-data{
  height: 30vh;
  justify-content: center;
  color: #ffffff;
}
li {
  list-style-type: none;
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  height: 25%;
  align-items: center;
  /*padding: 0px 10px 0px 10px;*/
  color: #ffffff;
}


li:nth-child(even){
  background-color: #7d7dff;
}
li:nth-child(odd){
  background-color: #313188;
}
</style>
