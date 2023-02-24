<template>
  <div class="menu">
    <div class="filters">
      <ScrollList ref="categorie"
                  @change.native="onCategorieChange"
                  :items="categories"
                  display-field="nom_categorie"
                  label="Catégorie"
                  placeholder="-- Choisissez une catégorie --"
      />
      <ScrollList ref="ss-categorie"
                  @change.native="onSsCategorieChange"
                  :items="ssCategories"
                  display-field="nom_categorie"
                  label="Sous-catégorie"
                  placeholder="-- Choisissez une sous-catégorie --"
      />
      <ScrollList ref="ss-ss-categorie"
                  @change.native="onSsSsCategorieChange"
                  :items="ssSsCategories"
                  display-field="nom_categorie"
                  label="Sous-sous-catégorie"
                  placeholder="-- Choisissez une sous-sous-catégorie --"
                  :required="true"
      />
    </div>
    <hr>
    <SelectMultiple
      ref="selectMultiple"
      :items="aliments"
      display-field="nom_aliment"
      :min-to-select="10"
      :max-to-select="10"
    />
    <span v-if="!componentLoading" class="counter-items-selected" ref="counterItemsSelected">
      Vous avez sélectionné {{ this.getSelectedAliments().length }} aliments
    </span>
  </div>
</template>

<script>
export default {
  name: "SelectAliments",
  data() {
    return {
      componentLoading: true,
      categories: [],
      ssCategories: [],
      ssSsCategories: [],
      aliments: [],
    }
  },
  methods: {
    loadCategories: function() {
      const url ="http://localhost:9000/api/categories/categorie/all";
      return fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.categories = data;
        });
    },
    loadSsCategories: function() {
      const idCategorie = this.$refs["categorie"].getSelected().id_categorie;
      const url = `http://localhost:9000/api/categories/by_parent/${idCategorie}`;
      return fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.ssCategories = data;
        });
    },
    loadSsSsCategories: function() {
      const idSsCategorie = this.$refs["ss-categorie"].getSelected().id_categorie;
      const url = `http://localhost:9000/api/categories/by_parent/${idSsCategorie}`;
      return fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.ssSsCategories = data;
        });
    },
    loadAliments: function() {
      const idSsSsCategorie = this.$refs["ss-ss-categorie"].getSelected().id_categorie;
      const url = `http://localhost:9000/api/aliment/by_soussouscategorie/${idSsSsCategorie}?valeurs_nutritives=true`
      return fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.aliments = data;
        });
    },

    onCategorieChange: async function() {
      this.aliments.splice(0, this.aliments.length);
      this.$refs["ss-categorie"].clear();
      this.$refs["ss-ss-categorie"].clear();

      await this.loadSsCategories();

      this.$refs["ss-categorie"].enable();
      this.$refs["ss-categorie"].selectDefault();
      this.$refs["ss-ss-categorie"].disable();
      this.$refs["ss-ss-categorie"].selectDefault();
    },
    onSsCategorieChange: async function() {
      this.aliments.splice(0, this.aliments.length);
      this.$refs["ss-ss-categorie"].clear();

      await this.loadSsSsCategories();

      this.$refs["ss-ss-categorie"].enable();
      this.$refs["ss-ss-categorie"].selectDefault();
    },
    onSsSsCategorieChange: async function() {
      this.$refs.selectMultiple.startLoadingItems();
      await this.loadAliments();
      this.$refs.selectMultiple.stopLoadingItems();
    },

    getSelectedAliments: function() {
      return this.$refs.selectMultiple.getSelectedItems();
    },

    isValid: function() {
      const selectMultipleComponent = this.$refs.selectMultiple;
      return selectMultipleComponent.isValid();
    },
  },
  mounted: async function() {
    await this.loadCategories();

    this.$refs["ss-categorie"].disable();
    this.$refs["ss-ss-categorie"].disable();

    this.componentLoading = false;
    },
}
</script>

<style scoped>
hr {
  border: 1px solid black;
  margin: 20px 0;
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

.counter-items-selected {
  color: black;
  display: block;
  text-align: center;
  font-size: 24px;
}
</style>
