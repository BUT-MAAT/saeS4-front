<template>
  <div class="AlimentList">
    dzadzadzddazdzaza
    <ul>
      <li v-for="(result,index) in aliments" :key="index">
        {{ result.nom_aliment }}
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
  },
}

</script>

<style scoped>

</style>
