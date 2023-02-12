<template>
  <div class="card">
    <span class="info"
          @click="revealInfo"
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

  },
  methods: {
    revealInfo: function() {
      console.log("INFO");
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
