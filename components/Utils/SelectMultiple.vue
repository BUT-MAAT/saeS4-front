<template>
  <div>
    <div class="items-available">
      <div class="item" v-for="item in getItemsDisplayField()" >
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
    items: Array,
    displayField: String,
  },
  methods: {
    getItemsDisplayField() {
      return this.items.map(item => item[this.displayField]);
    }
  },
}
</script>

<style scoped>
/*
  TODO: Better item style
*/
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
