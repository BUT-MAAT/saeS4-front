<template>
  <div class="datetime">
    <IconDateTime class="icon-datetime" />
    <p>{{ date }}</p>
  </div>
</template>

<script lang="ts">
export default {
  name:"DateTime",
  props: {
    date: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.datetime {
  position: relative;
  display: flex;
  gap: 10px;
  background-color: var(--light-blue);
  border-radius: 20px 0 0 20px;
  height: 100%;
}

.icon-datetime {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
}

.datetime p {
  margin: auto 5px auto 40px;
}

@media screen and (max-width: 800px) {
  .datetime {
    border-radius: 20px;
  }
}
</style>
