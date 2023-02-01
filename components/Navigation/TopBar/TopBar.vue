<template>
  <nav class="topbar">
    <div class="topbar-icons">
      <TopBarIcon href="#">
        <IconMail />
      </TopBarIcon>
      <TopBarIcon href="tel:0344156800">
        <IconPhone />
      </TopBarIcon>
      <TopBarIcon href="https://www.facebook.com/beauvaisis">
        <IconFacebook />
      </TopBarIcon>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: "TopBar",
}
</script>

<style scoped>
.topbar {
  display: flex;
  width: 100%;
  height: 64px;
  background-color: var(--dark-blue);
  align-items: center;
  justify-content: end;
}

.topbar-icons {
  display: flex;
  align-items: center;
  justify-content: end;
  margin-right: 86px;
}

@media screen and (max-width: 520px) {
  .topbar {
    justify-content: center;
  }
  .topbar-icons {
    margin: auto;
  }
}
</style>
