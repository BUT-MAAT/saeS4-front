<template>
  <div id="app">
    <Hero>
      <Title>Communauté d'agglomération du Beauvaisis</Title>
      <HeroSearchBar />
    </Hero>
    <QuickAccess />
    <News />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
