<template>
  <div class="menu">
    <div class="filters">
      <ScrollList ref="categorie"
                  @change.native="onCategorieChange"
                  :options="categories"/>
      <ScrollList ref="ss-categorie"
                  @change.native="onSsCategorieChange"
                  :options="ssCategories"/>
      <ScrollList ref="ss-ss-categorie"
                  @change.native="onSsSsCategorieChange"
                  :options="ssSsCategories"/>
    </div>
    <hr>
    <div class="results">
      <CardAliment v-for="aliment in aliments"
        :name="aliment.name"
      />
    </div>
    <hr>
    <div class="selected">

    </div>
  </div>
</template>

<script>
export default {
  name: "SelectAliments",
  data() {
    return {
      categories: [],
      ssCategories: [],
      ssSsCategories: [],
      aliments: [],
    }
  },
  methods: {
    loadCategories: function() {
      this.categories = ["categ1", "categ2"];
    },
    loadSsCategories: function() {
      this.ssCategories = ["ss_categ"];
    },
    loadSsSsCategories: function() {
      this.ssSsCategories = ["ss_ss_categ"];
    },
    loadAliments: function() {
      this.aliments = [
        {id: 1, name: "Carotte",},
        {id: 2, name: "Patate",},
        {id: 3, name: "Salade",},
        {id: 4, name: "Oignon",},
        {id: 5, name: "Citron",},
        {id: 6, name: "Pomme",},
      ];
    },
    onCategorieChange: function() {
      this.$refs["ss-categorie"].setPlaceholder("--Choisissez une option--");
      console.log(this.$refs["ss-categorie"].placeholder);
      this.loadSsCategories();
    },
    onSsCategorieChange: function() {
      this.$refs["ss-ss-categorie"].setPlaceholder("--Choisissez une option--");
      this.loadSsSsCategories();
    },
    onSsSsCategorieChange: function() {
      this.loadAliments();
    },
    selectAliment: function(event) {

    },
  },
  mounted: function() {
    this.$refs["categorie"].setPlaceholder("--Choisissez une catégorie--")
    this.$refs["ss-categorie"].placeholder = "--Sélectionnez une catégorie avant--";
    this.$refs["ss-ss-categorie"].placeholder = "--Sélectionnez une sous-catégorie avant--";
    this.loadCategories();
  },
}
</script>

<style scoped>
hr {
  margin: 40px 0;
}
.menu {
  background-color: var(--white);
  padding: 40px;
}
.filters {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.results {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 10px;
}
</style>
