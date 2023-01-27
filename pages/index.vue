<template>
  <div id="app">
    <Hero>
      <Title>Communauté d'agglomération du Beauvaisis</Title>
      <HeroSearchBar />
    </Hero>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Hero from "~/components/Hero/Hero.vue";
import HeroSearchBar from "~/components/Hero/HeroSearchBar.vue";

export default Vue.extend({
  name: 'IndexPage',
  components: {HeroSearchBar, Hero},
})
</script>
