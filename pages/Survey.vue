<template>
  <form action="">
    <div class="form-section email-input">
      <Input
      id="email"
      label="Email"
      type="email"
      name="email"
      placeholder="Votre Email"
      />
      <Button id="start-survey" value="Commencer" @click.native="startSurvey"/>
    </div>

    <div v-if="isStarted">
      <div class="form-section person-information">
        <Input
          id="firstname"
          label="Prénom"
          name="firstname"
          placeholder="Votre Prénom"
        />
        <Input
          id="lastname"
          label="Nom"
          name="lastname"
          placeholder="Votre Nom"
        />
      </div>

      <div class="form-section">

      </div>
    </div>

  </form>
</template>

<script>

export default {
  name: "Survey",
  data() {
    return {
      isStarted: false,
    }
  },
  methods : {
    startSurvey: function(event) {
      this.isStarted = true;
    },
  }
}
</script>

<style scoped>
@keyframes startSurveyAnim {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-200px);
  }
}

.startSurveyAnim {
  animation: startSurveyAnim .5s linear both;
}

form {
  width: 80%;
  margin: auto;
}
.form-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  background-color: var(--light-blue);
  padding: 40px;
  margin: 20px 0;
  border-radius: 10px;
  color: var(--white);
}

.person-information {
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
}
.person-information > * {
  width: 48%;
}
</style>
