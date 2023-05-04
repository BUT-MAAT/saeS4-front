<template>
  <div>
    <round-translation-element v-for="(value,key) in textAdhesion"
      :highltightedText=infoData[key]
      :text=value
    />
    <ResultMap
    />
  </div>


</template>

<script>
import ResultMap from "~/components/Utils/ResultMap.Vue";
import RoundTranslationElement from "../components/Utils/RoundTranslationElement.vue";

export default {
  name: "Test.vue",
  components: {RoundTranslationElement, ResultMap},
  mounted() {
    const url = "http://localhost:9000/api/statistiques/"
    fetch(url)
      .then((response) => response.json())
      .then((data) =>{
        this.infoData[0] = data.nombre_reponses
        console.log(this.infoData)
      })
  },
  data(){
    return{
      textAdhesion:[["jusqu'à aujourd'hui, le formulaire a été remplis "," fois"]],

      infoData:["?","?","?"]
    }
  },

}
</script>

<style scoped>
div{

}
</style>
