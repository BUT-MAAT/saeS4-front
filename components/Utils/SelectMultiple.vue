<template>
  <div>
    <div class="items-available">
      <div class="item" v-for="item in items" >
        <span>{{ item }}</span>
      </div>
    </div>
    <hr>
    <div class="items-selected">
       <!-- TODO: selected items -->
    </div>
  </div>

</template>

<script>
export default {
  name: "SelectMultiple",
  data() {
    return {
      itemsSelected: [],
    }
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.items-available {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 10px;
}
.item {
  border: 1px solid black;
  border-radius: 4px;
  color: black;
  padding: 10px;
}
.item:hover {
  cursor: pointer;
}
</style>
