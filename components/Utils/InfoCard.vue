<template>
  <div class="card">
    <span class="info"
          @click="openInfoModal"
          v-if="hasInfo()"
    >
      <IconInfo class="info-icon"/>
    </span>

    <slot />

    <div class="modal" v-if="isModalOpen">
      <div class="modal-content">
              <span class="close-modal" @click="closeInfoModal">
        <IconClose />
      </span>
        <p>INFO MODAL</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    infos: Object,
  },
  data() {
    return {
      isModalOpen: false,
    }
  },
  methods: {
    hasInfo: function() {
      return this.infos ? Object.keys(this.infos).length > 0 : false;
    },
    openInfoModal: function() {
      this.isModalOpen = true;
    },
    closeInfoModal: function() {
      this.isModalOpen = false;
    },
  },
}
</script>

<style scoped>
.card {
  position: relative;
}
.info {
  position: absolute;
  top: -8px;
  left: -8px;
  cursor: pointer;
}
.info-icon {
  width: 16px;
  height: auto;
  fill: black;
}

.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background-color: var(--white);
  margin: auto;
  padding: 20px;
  border-radius: 20px;
  width: 60%;
  color: black;
}
.close-modal {
  float: right;
}
.close-modal:hover {
  cursor: pointer;
}
</style>
