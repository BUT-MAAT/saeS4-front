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
// TODO: add info popup
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
      this.selectedItems.splice(index, 1);
    },
    isInSelectedItems(item) {
      // cannot use `this.selectedItems.includes(item)`
      // because when same are reloaded it doesn't work
      let isInside = false;
      for (let selectedItem of this.selectedItems) {
        isInside = true;
        for (let field in selectedItem) {
          if (selectedItem[field] !== item[field]) {
            isInside = false;
            break;
          }
        }
      }
      return isInside
    },
  },
}
</script>

<style scoped>
/*
  TODO: Better style
  TODO: Better UX (handle too much items maybe with scrolls)
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
