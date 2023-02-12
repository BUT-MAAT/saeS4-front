<template>
  <div>
    <div class="items-available">
      <div class="item"
           v-for="(item, index) in items"
           @click="selectItem(index)"
      >
        <span>{{ item[displayField] }}</span>
      </div>
    </div>
    <hr>
    <div class="items-selected">
       <!-- TODO: selected items -->
      <div class="selected-items">
        <div class="selected-item"
             v-for="(item, index) in selectedItems"
        >
          <span>{{ item[displayField] }}</span>
          <span class="remove-selected-item" @click="removeSelectedItem(index)"> - </span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "SelectMultiple",
  data() {
    return {
      selectedItems: [],
    }
  },
  props: {
    items: Array,
    displayField: String,
  },
  methods: {
    selectItem: function(index) {
      console.log("select");
      this.selectedItems.push(this.items[index]);
    },
    removeSelectedItem: function(index) {
      this.selectedItems.splice(index);
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
  background-color: var(--light-blue);
  padding: 10px;
}
.item:hover {
  cursor: pointer;
}


.selected-item {
  border: 1px solid black;
  border-radius: 4px;
  color: var(--white);
  background-color: var(--dark-blue);
  padding: 6px;
  display: flex;
  justify-content: space-between;
}
.remove-selected-item:hover {
  cursor: pointer;
}
</style>
