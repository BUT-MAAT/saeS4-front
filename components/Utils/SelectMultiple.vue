<template>
  <div>
    <div class="items-available">
      <div class="item"
           :class="{ 'disabled-item': isInSelectedItems(item) }"
           v-for="(item, index) in items"
           @click="selectItem(index, $event)"
      >
        <span>{{ item[displayField] }}</span>
      </div>
    </div>
    <hr>
    <div class="items-selected">
      <div class="selected-items">
        <div class="selected-item"
             v-for="(item, index) in selectedItems"
        >
          <span>{{ item[displayField] }}</span>
          <span class="remove-selected-item" @click="removeSelectedItem(index, $event)">
            <IconTrash class="remove-selected-item-icon" />
          </span>
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
      const item = this.items[index];
      if (!this.isInSelectedItems(item)) {
        this.selectedItems.push(item);
      }
    },
    removeSelectedItem: function(index) {
      this.selectedItems.splice(index);
    },
    isInSelectedItems(item) {
      return this.selectedItems.includes(item);
    },
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
.disabled-item {
  background-color: darkgray;
}


.selected-item {
  border: 1px solid black;
  border-radius: 4px;
  color: var(--white);
  background-color: var(--dark-blue);
  padding: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.remove-selected-item:hover {
   cursor: pointer;
 }
.remove-selected-item-icon {
  fill: var(--white);
  width: 16px;
  height: auto;
}

</style>
