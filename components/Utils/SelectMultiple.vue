<template>
  <div class="select-multiple">
    <div class="items-available">
      <InfoCard class="item"
           v-for="(item, index) in items"
           :class="{ 'disabled-item': isInSelectedItems(item) }"
      >
        <span>{{ item[displayField] }}</span>
        <span class="select-item"
              @click="selectItem(index)"
        >
          <IconPlus class="select-item-icon" v-if="!isInSelectedItems(item)"/>
          <IconMinus class="select-item-icon" v-else/>
        </span>
      </InfoCard>
    </div>

    <div class="items-selected">
      <div class="selected-items">
        <InfoCard class="selected-item"
             v-for="(item, index) in selectedItems"
        >
          <span>{{ item[displayField] }}</span>
          <span class="remove-selected-item"
                @click="removeSelectedItemByIndex(index)"
          >
            <IconTrash class="remove-selected-item-icon" />
          </span>
        </InfoCard>
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
    minToSelect: Number,
    maxToSelect: Number,
  },
  methods: {
    selectItem: function(index) {
      const item = this.items[index];
      if (!this.isInSelectedItems(item) && this.selectedItems.length < this.maxToSelect) {
        this.selectedItems.push(item);
      }
      else {
        this.removeSelectedItem(item);
      }
    },
    removeSelectedItemByIndex: function(index) {
      this.selectedItems.splice(index, 1);
    },
    removeSelectedItem: function(item) {
      for (let index in this.selectedItems) {
        if (this._isSameItem(this.selectedItems[index], item)) {
          this.removeSelectedItemByIndex(index);
        }
      }
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

    getSelectedItems: function() {
      return this.selectedItems ? this.selectedItems : [];
    },

    isValid: function() {
      return this.minToSelect <= this.selectedItems.length && this.selectedItems.length <=this.maxToSelect;
    },
  },
}
</script>

<style scoped>
.items-available {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  height: 200px;
  overflow-y: scroll;
  border: 1px solid black;
  padding: 10px;
}
.item {
  border-radius: 4px;
  color: var(--white);
  background-color: var(--dark-blue);
  padding: 4px 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item:hover {
  cursor: default;
}
.disabled-item {
  background-color: darkgray;
}
.select-item {
  margin-left: 4px;
}
.select-item:hover {
  cursor: pointer;
}
.select-item-icon {
  width: 16px;
  height: auto;
  fill: var(--white);
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
  gap: 20px;
}
.selected-item {
  border-radius: 100px;
  color: black;
  background-color: var(--light-blue);
  padding: 4px 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  min-width: fit-content;
}
.selected-item:hover {
  cursor: default;
}
.remove-selected-item {
  margin-left: 4px;
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
