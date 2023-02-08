<template>
  <div class="topbar-button">
    <a class="topbar-content" :href="href">
      <span class="topbar-icon">
        <slot />
      </span>
    </a>
  </div>
</template>

<script lang="ts">
export default {
  name: "TopBarIcon",
  props: {
    href: {
      type: String,
      default: "",
      required: true,
    },
  },
}
</script>

<style scoped>
.topbar-content {
  display: block;
  position: relative;
  width: 44px;
  height: 44px;
  background-color: var(--light-blue) ;
  border-radius: 50%;
  margin-left: 22px;
}
.topbar-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
