<template>
  <div class="card">
    <span class="info"
          @click="revealInfo"
          v-if="hasInfo()"
    >
      <IconInfo class="info-icon"/>
    </span>
    <slot />
  </div>
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    infos: Object,
  },
  methods: {
    hasInfo: function() {
      return this.infos ? Object.keys(this.infos).length > 0 : false;
    },
    revealInfo: function() {
      console.log(this.infos);
    },
  },
}
</script>

<style scoped>
.card {
  position: relative;
}
.info {
  position: absolute;
  top: -8px;
  left: -8px;
  cursor: pointer;
}
.info-icon {
  width: 16px;
  height: auto;
  fill: black;
}
</style>
