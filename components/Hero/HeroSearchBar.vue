<template>
  <div class="searchbar-container">
    <input type="text" placeholder="Rechercher..." />
    <button><IconSearch /></button>
  </div>
</template>

<script>
export default {
  name: "HeroSearchBar"
}
</script>

<style scoped>
.searchbar-container {
  width: 67%;
  max-width: 550px;
  height: 64px;
}

input {
  display: inline-block;
  width: calc(95% - 64px); /* FIXME: space between input and btn */
  padding: 0;
  height: 64px;
  border: 0;
  border-radius: 16px 0 0 16px;
  opacity: 0.6;
  vertical-align: top;
  text-align: center;
  font-size: 18px;
}

input::placeholder {
  text-align: center;
}

button {
  width: 64px;
  height: 64px;
  background-color: var(--light-blue);
  border: 0;
  border-radius: 0 16px 16px 0;
}

button:hover {
  cursor: pointer;
}
</style>
