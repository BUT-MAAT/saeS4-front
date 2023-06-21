<template>
  <section class="hero-container">
    <div class="hero-content">
      <slot />
    </div>
    <HeroWave />
  </section>
</template>

<script>
export default {
  name: "Hero"
}
</script>

<style scoped>
.hero-container {
  position: relative;
  width: 100%;
  height: calc(100vh - var(--navBar-height) - var(--topBar-height));
  background-image: url("@/images/HeroBackground.png");
  background-size: cover;
  background-repeat: no-repeat;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero-container::after {
  content: "";
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    78deg,
    rgba(66, 51, 51, 0.6) -14%,
    rgba(88, 71, 71, 0.3) 86%
  );

  z-index: 10;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80%;
  position: relative;
  z-index: 20;
}
</style>
