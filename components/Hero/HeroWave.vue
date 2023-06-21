<template>
  <svg id="visual" viewBox="0 0 960 540" width="100%" height="540" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 499L87 504L175 508L262 524L349 501L436 513L524 518L611 510L698 504L785 525L873 506L960 503L960 541L873 541L785 541L698 541L611 541L524 541L436 541L349 541L262 541L175 541L87 541L0 541Z" fill="#FBFBFF" stroke-linecap="square" stroke-linejoin="bevel"></path>
  </svg>
</template>

<script>
export default {
  name: "HeroWave"
}
</script>

<style scoped>
svg {
  position: absolute;
  bottom: 0;
  z-index: 19;
}

svg path {
  fill: var(--white);
}
</style>
