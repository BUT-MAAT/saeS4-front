<template>
  <div class="topbar">
    <div class="topbar-icons">
      <TopBarIcon href="https://youtube.com">
        <IconMail></IconMail>
      </TopBarIcon>
      <TopBarIcon href="https://youtube.com">
        <IconMail></IconMail>
      </TopBarIcon>
      <TopBarIcon href="https://youtube.com">
        <IconMail></IconMail>
      </TopBarIcon>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "TopBar",
  components: {},

}
</script>

<style scoped>
.topbar {
  display: flex;
  width: 100%;
  height: 64px;
  background-color: #18314f;
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
