<template>
  <div class="breadcrumb">
    <div class="breadcrumb-content">
      <span v-for="item in path.split('/')" :key="item">
        <a href="#">{{ item }}</a>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Breadcrum",
  props: {
    path: {
      type: String,
      default: "",
      required: true,
    },
  },
}
</script>

<style scoped>
.breadcrumb {
  position: relative;
  height: 100%;
  background-color: var(--light-blue);
  border-radius: 0 20px 20px 0;
}

.breadcrumb-content {
  display: flex;
  height: 100%;
  padding-inline-start: 0;
}

span {
  color: var(--white);
  margin: auto;
}

span:first-child {
  display: inline-block;
  padding-left: 10px;
}

span:last-child {
  display: inline-block;
  padding-right: 10px;
}

span::after {
  color: var(--white);
  content: ">";
  margin: 0 20px;
}

span:last-child::after {
  content: "";
  display: none;
}

a {
  color: var(--white);
  text-decoration: none;
  text-transform: capitalize;
}
@media screen and (max-width: 800px) {
  .breadcrumb {
    border-radius: 20px;
  }
}
</style>
