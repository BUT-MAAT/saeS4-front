<template>
  <div class="menu">
    <div class="filters">
      <ScrollList ref="categorie" :options="['categ1', 'categ2', 'categ3']"/>
      <ScrollList ref="ss_categorie" />
      <ScrollList ref="ss_ss_categorie" />
    </div>
    <div class="results">

    </div>
    <div class="selected">

    </div>
  </div>
</template>

<script>
export default {
  name: "SelectAliments"
}
</script>

<style scoped>
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
