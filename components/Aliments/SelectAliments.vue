<template>
  <div class="menu">
    <div class="filters">
      <ScrollList ref="categorie"
                  @change.native="onCategorieChange"
                  :items="categories"
                  display-field="nom_categorie"
                  label="Catégorie"
      />
      <ScrollList ref="ss-categorie"
                  @change.native="onSsCategorieChange"
                  :items="ssCategories"
                  display-field="nom_categorie"
                  label="Sous-catégorie"
      />
      <ScrollList ref="ss-ss-categorie"
                  @change.native="onSsSsCategorieChange"
                  :items="ssSsCategories"
                  display-field="nom_categorie"
                  label="Sous-sous-catégorie"
      />
    </div>
    <hr>
    <SelectMultiple
      :items="aliments"
      display-field="nom_aliment"
    />
  </div>
</template>

<script>
// TODO: Auto select when there is only 1 item in ScrollList
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
      const idCategorie = this.$refs["categorie"].getSelected().id_categorie;
      const url = `http://localhost:9000/api/categories/by_parent?parent_id=${idCategorie}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.ssCategories = data;
        });
    },
    loadSsSsCategories: function() {
      const idSsCategorie = this.$refs["ss-categorie"].getSelected().id_categorie;
      const url = `http://localhost:9000/api/categories/by_parent?parent_id=${idSsCategorie}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.ssSsCategories = data;
        });
    },
    loadAliments: function() {
      const idSsSsCategorie = this.$refs["ss-ss-categorie"].getSelected().id_categorie;
      const url = `http://localhost:9000/api/aliment/by_soussouscategorie?soussouscategorie_id=${idSsSsCategorie}`
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.aliments = data;
        });
    },
    getAlimentNames: function() {
      return this.aliments.map(aliment => aliment.name);
    },

    onCategorieChange: function() {
      this.$refs["ss-categorie"].enable();
      this.$refs["ss-categorie"].selectDefault();
      this.loadSsCategories();
    },
    onSsCategorieChange: function() {
      this.$refs["ss-ss-categorie"].enable();
      this.$refs["ss-ss-categorie"].selectDefault();
      this.loadSsSsCategories();
    },
    onSsSsCategorieChange: function() {
      this.loadAliments();
    },

    selectAliment: function(event) {

    },
  },
  mounted: function() {
    this.$refs["categorie"].setPlaceholder("--Choisissez une catégorie--");
    this.$refs["ss-categorie"].setPlaceholder("--Choisissez une sous-catégorie--");
    this.$refs["ss-categorie"].disable();
    this.$refs["ss-ss-categorie"].setPlaceholder("--Choisissez une sous-sous-catégorie--");
    this.$refs["ss-ss-categorie"].disable();
    this.loadCategories();
  },
}
</script>

<style scoped>
/*
  TODO: Better ScrollList style
  TODO: Better component style
*/
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
</style>
