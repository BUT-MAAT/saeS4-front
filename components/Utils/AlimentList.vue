<template>
  <div class="AlimentList">
    <h1 >Liste des aliments les plus consommés pour le {{ this.id }}</h1>
    <ul>
      <li v-for="(result,index) in aliments" :key="index">
        {{ result.nom_aliment }} ({{ result.nbChoisi }})
      </li>
    </ul>
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
}

</script>

<style scoped>
.AlimentList{
  background-color: #C8F24F;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  height: 30vh;
}
.AlimentList h1{
  height: 5vh;
}
ul{
  margin: 0;
  padding: 0;
  display: block;
  text-align: center;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  overflow-x: hidden;
  height: 25vh;
  overflow-y: auto;

}
li {
  list-style-type: none;
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  height: 15%;
  align-items: center;
  /*padding: 0px 10px 0px 10px;*/
  color: #ffffff;
}


li:nth-child(even){
  background-color: var(--dark-blue);
}
li:nth-child(odd){
  background-color: var(--light-blue);
}
</style>
