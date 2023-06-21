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
        <span class="close-modal">
          <IconClose class="close-modal-icon" @click.native="closeInfoModal"/>
        </span>
        <span class="modal-title">{{ name }}</span>
        <span v-for="(infoValue, infoName) in infos"
              v-if="infoValue"
        >
          {{ infoName }} : {{ infoValue }} <br>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    name: String,
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  background-color: var(--white);
  margin: auto;
  padding: 20px 40px;
  border-radius: 20px;
  width: fit-content;
  min-width: 20%;
  max-width: 60%;
  max-height: 60%;
  overflow: scroll;
  color: black;
  font-size: 18px;
}
.modal-title {
  margin-bottom: 20px;
  font-weight: bold;
}
.close-modal {
  position: absolute;
  right: 4vh;
}

.close-modal-icon {
  position: fixed;
}

.close-modal:hover {
  cursor: pointer;
}
</style>
