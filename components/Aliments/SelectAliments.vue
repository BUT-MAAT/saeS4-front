<!-- TODO: Generic component in util -->
<template>
  <div class="menu">
    <div class="filters">
      <ScrollList ref="categorie"
                  @change.native="onCategorieChange"
                  :options="getCategorieNames(this.categories)"
                  display-name="nom_categorie"/>
      <ScrollList ref="ss-categorie"
                  @change.native="onSsCategorieChange"
                  :options="getCategorieNames(this.ssCategories)"/>
      <ScrollList ref="ss-ss-categorie"
                  @change.native="onSsSsCategorieChange"
                  :options="getCategorieNames(this.ssSsCategories)"/>
    </div>
    <hr>
    <div class="results">
      <CardAliment v-for="aliment in aliments"
        :name="aliment.name"
      />
    </div>
    <hr>
    <div class="selected">
      <!-- TODO: selected aliments component -->
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
      const url ="http://localhost:9000/api/categories/categorie/all";
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.categories = data;
        });
    },
    loadSsCategories: function() {
      // TODO: get idCategorie
      const idCategorie = 1;
      const url = `http://localhost:9000/api/categories/by_parent?parent_id=${idCategorie}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.ssCategories = data;
        });
    },
    loadSsSsCategories: function() {
      // TODO: get idCategorie
      const idCategorie = 101;
      const url = `http://localhost:9000/api/categories/by_parent?parent_id=${idCategorie}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.ssSsCategories = data;
        });
    },
    loadAliments: function() {
      // TODO: load from db all aliments depending ss_ss_categories
      this.aliments = [
        {id: 1, name: "Carotte",},
        {id: 2, name: "Patate",},
        {id: 3, name: "Salade",},
        {id: 4, name: "Oignon",},
        {id: 5, name: "Citron",},
        {id: 6, name: "Pomme",},
      ];
    },

    getCategorieNames: function(categorieList) {
      return categorieList.map(option => option.nom_categorie);
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
/* TODO: style */
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