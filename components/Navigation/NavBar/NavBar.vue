<template>
  <nav class="navbar">
    <a class="navbar-brand" href="/static">
      <img
        src="@/images/LogoAgglo.png"
        alt="Logo agglomération Beauvaisis"
      />
    </a>

    <NavBarHamburger class="navbar-hamburger" @inputchecked="valueChanged" />

    <div class="navbar-items" id="navbarItems">
      <NavBarItem
        class="navbar-item"
        href="/"
        isActive="true"
      >Accueil</NavBarItem>
      <NavBarItem
        class="navbar-item"
        href="/news/presentation-generale"
      >Présentation</NavBarItem>
      <NavBarItem
        class="navbar-item"
        href="/news"
      >Actualité</NavBarItem>
      <NavBarItem
        class="navbar-item"
        href="/news/tourisme"
      >Tourisme</NavBarItem>
      <NavBarItem
        class="navbar-item"
        href="/contact"
      >Contact</NavBarItem>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: "NavBar",
  methods: {
    valueChanged(value: boolean) {
      console.log("HAMBURGER NAVBAR");
      const navbarItems = document.getElementById("navbarItems"),
        showClassName = "show";
      if (!navbarItems) return;

      return value ? navbarItems.classList.add(showClassName) : navbarItems.classList.remove(showClassName);
    },
  },
}

const valueChanged = (value: boolean) => {
  const navbarItems = document.getElementById("navbarItems"),
    showClassName = "show";
  if (!navbarItems) return;

  value
    ? navbarItems.classList.add(showClassName)
    : navbarItems.classList.remove(showClassName);
};
</script>

<style scoped>
.navbar {
  background-color: var(--white);
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: var(--navBar-height);
  line-height: var(--navBar-height);

  transition: all 0.2s ease-out;
}

.navbar-brand {
  display: block;
  height: var(--navBar-height);
  width: auto;
}

img {
  margin: 0 60px 0 68px;
  width: auto;
  height: 100%;
}

.navbar-items {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  margin: 0 20px;
}

.navbar-hamburger {
  display: none;
}

/* TODO: adapter la navbar en plus petit pour les petits écrans de pc (sans le hamburger) */
@media screen and (max-width: 1200px) {
  .navbar {
    flex-direction: column;
    height: 100%;
  }

  .navbar-brand {
    height: calc(var(--navBar-height) * 1.5);
    margin-right: auto;
  }

  .navbar-brand img {
    margin: auto 0;
  }

  .navbar-items {
    display: none;
    justify-content: flex-start;
    flex-direction: column;
    max-height: 0;
    transition: max-height 0.15s ease-out;
  }

  .navbar-items.show {
    display: flex;
    max-height: 100%;
  }

  .navbar-items > * {
    min-height: var(--navBar-height);
  }

  .navbar-hamburger {
    display: block;
    position: absolute;
    right: calc(var(--navBar-height) / 2);
    top: calc(var(--navBar-height) / 2);
  }
}
</style>
