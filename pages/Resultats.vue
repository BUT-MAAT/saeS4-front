<template>
  <div>
    <div class="stats-round">
      <round-translation-element v-for="(value,key) in textAdhesion"
                                 :highltightedText=infoData[key]
                                 :text=value
      />
    </div>

    <ResultMap
    />
    <div class="top">
      <div class="top-aliment">
        <AlimentList
          text="Aliments les plus choisis"
          :aliments="top_10_aliments"
          :overflow="false"
          listColor="#572a2e"
          backColor="#3f1d20"
          hoverColor="#b57f8a"
        ></AlimentList>
      </div>
      <div class="top-categorie">
        <AlimentList
          text="Categories les plus choisis"
          :aliments="top_10_categorie"
          :overflow="false"
          listColor="#572a2e"
          backColor="#3f1d20"
          hoverColor="#b57f8a"
        ></AlimentList>
      </div>
    </div>

  </div>


</template>

<script>
import ResultMap from "~/components/Utils/ResultMap.Vue";
import RoundTranslationElement from "../components/Utils/RoundTranslationElement.vue";
import Aliment from "../components/Utils/AlimentList.vue";

export default {
  name: "Resultats",
  components: {Aliment, RoundTranslationElement, ResultMap},
  mounted() {
    const url = "http://localhost:9000/api/statistiques/"
    fetch(url)
      .then((response) => response.json())
      .then((data) =>{
        this.$set(this.infoData, 0, data.nombre_reponses.toString());
        this.$set(this.infoData, 1, `${data.aliment_plus_choisi.nom_aliment} (${data.aliment_plus_choisi.nb_selections})`);
        this.$set(this.infoData, 2, `${data.categorie_plus_choisi.nom_categorie} (${data.categorie_plus_choisi.nb_selections})`);
        this.top_10_aliments = data.aliments_top_10.map(({nom_aliment,nb_selections})=>{
          return `${nom_aliment} (${nb_selections})`
        });
        this.top_10_categorie = data.categories_triees.map(({nom_categorie,nb_selections})=>{
          return `${nom_categorie} (${nb_selections})`
        });
        console.log(this.top_10_aliments)
      })
  },
  data(){
    return{
      textAdhesion:[
        ["jusqu'à aujourd'hui, le formulaire a été remplis "," fois"],
        ["L'aliment le plus choisi est",""],
        ["La catégorie la plus choisi est ",""]
      ],
      top_10_aliments: [],
      top_10_categorie: [],
      infoData:["?","?","?"]
    }
  },

}
</script>

<style scoped>
.stats-round{
  padding-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.top{
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.top div{
  margin-bottom: 20px;
}

</style>
