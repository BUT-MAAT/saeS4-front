<template>
  <div class="select-multiple">
    <div class="items-available">
      <div class="item"
           v-for="(item, index) in items"
           :class="{ 'disabled-item': isInSelectedItems(item) }"
           @click="selectItem(index, $event)"
      >
        <span>{{ item[displayField] }}</span>
      </div>
    </div>
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
      for (let selectedItem of this.selectedItems) {
        if (this._isSameItem(selectedItem, item)) return true;
      }
      return false;
    },
    _isSameItem: function(itemA, itemB) {
      if (itemA === itemB) return true;

      const valuesItemA = Object.values(itemA);
      const valuesItemB = Object.values(itemB);

      if (valuesItemA.length !== valuesItemB.length) return false;

      for (let i in valuesItemA) {
        if (valuesItemA[i] !== valuesItemB[i]) return false;
      }

      return true;
    },
  },
}
</script>

<style scoped>
.items-available {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  height: 200px;
  overflow-y: scroll;
  border: 1px solid black;
  padding: 10px;
}
.item {
  border-radius: 4px;
  color: var(--white);
  background-color: var(--dark-blue);
  padding: 10px;
}
.item:hover {
  cursor: pointer;
}
.disabled-item {
  background-color: darkgray;
}

.items-selected {
  height: 100px;
  overflow-y: scroll;
  border: 1px solid black;
  padding: 10px;
}
.selected-items {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.selected-item {
  border-radius: 100px;
  color: black;
  background-color: var(--light-blue);
  padding: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  min-width: fit-content;
}
.remove-selected-item {
  margin-left: 10px;
}
.remove-selected-item:hover {
   cursor: pointer;
 }
.remove-selected-item-icon {
  fill: black;
  width: 16px;
  height: auto;
}

</style>
