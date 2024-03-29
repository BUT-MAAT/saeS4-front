<template>
  <div class="menu" :class="{ 'error': hasError}">
    <span class="label">Veuillez choisir 10 aliments</span>
    <span v-if="hasError" class="error-text">Champ invalide</span>
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
      Vous avez sélectionné {{ this.getSelectedAliments().length }} sur {{ this.getMaxAliments() }} aliments
    </span>
  </div>
</template>

<script>
  const infosLabels = [
    "energie_ue_kj",
    "energie_ue_kcal",
    "eau",
    "glucides",
    "lipides",
    "sucres",
    "fructose",
    "glucose",
    "lactose",
    "maltose",
    "saccharos",
    "amidon",
    "fibres_alimentaires",
    "alcool",
    "sel",
    "calcium",
    "fer",
    "magnesium",
    "potassium",
    "sodium",
    "zinc",
    "vitamine_D",
    "vitamine_E",
    "vitamine_K1",
    "vitamine_K2",
    "vitamine_C",
    "vitamine_B1",
    "vitamine_B2",
    "vitamine_b3",
    "vitamine_b5",
  ];
export default {
  name: "SelectAliments",
  data() {
    return {
      componentLoading: true,
      categories: [],
      ssCategories: [],
      ssSsCategories: [],
      aliments: [],

      infosLabels: infosLabels,

      hasError: false,
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
          data.forEach(aliment => {
            let infosToKeep = {};
            for (let key in aliment.valeurs_nutritives) {
              if (this.infosLabels.includes(key) && Object.keys(aliment.valeurs_nutritives).includes(key)) {
                infosToKeep[key] = aliment.valeurs_nutritives[key];
              }
            }
            aliment.infos = infosToKeep;
          });
          console.log(data);
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
      console.log(this.aliments);
      this.$refs.selectMultiple.stopLoadingItems();
    },

    getSelectedAliments: function() {
      return this.$refs.selectMultiple.getSelectedItems();
    },
    getMaxAliments: function() {
      return this.$refs.selectMultiple.maxToSelect;
    },

    isValid: function() {
      const selectMultipleComponent = this.$refs.selectMultiple;
      return selectMultipleComponent.isValid();
    },
    checkErrors: function() {
      this.hasError = !this.isValid();
      if (this.hasError) this.scrollToMe();
    },
    scrollToMe: function() {
      const el = this.$refs.input;
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
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

.label {
  color: var(--dark-blue);
  display: block;
  text-align: center;
  font-size: 24px;
}
.menu {
  background-color: var(--white);
  border-radius: 10px;
  padding: 40px;
  border: 3px solid var(--white);
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

.error {
  border: 3px solid var(--error);
}
.error-text {
  color: var(--error);
  display: block;
  text-align: center;
  font-size: 18px;

}
</style>
