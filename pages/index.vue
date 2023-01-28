<template>
  <div id="app">
    <Hero>
      <Title>Communauté d'agglomération du Beauvaisis</Title>
      <HeroSearchBar />
    </Hero>
    <QuickAccess />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import QuickAccess from "~/components/Navigation/QuickAccess/QuickAccess.vue";

export default Vue.extend({
  name: 'IndexPage',
  components: {QuickAccess},
})
</script>
