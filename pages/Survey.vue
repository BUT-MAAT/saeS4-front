<!--
TODO: Better style
TODO: use grid for personal information inputs
TODO: use api to suggest and autocomplete the adress
-->

<template>
  <form action="">
    <div class="" id="section-email">
      <span v-if="!isStarted && hasError" class="text-error">
        {{ msgError }}
      </span>
      <p v-if="!isStarted">
        Veuillez entrer votre email pour pouvoir commencer le sondage
      </p>
      <Input
      id="email"
      label="Email"
      type="email"
      name="email"
      placeholder="Votre Email"
      class="email"
      />
      <Button v-if="!isStarted"
        id="start-survey"
        value="Commencer"
        @click.native="startSurvey"/>
    </div>

    <div v-if="isStarted" class="form-content">
      <div class="form-section" id="section-person">
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
      hasError: false,
      msgError: "",
    }
  },
  methods : {
    isEmailValid: function(event) {
      const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      const email = document.getElementById("email").value;
      if (!email.match(validRegex)) {
        this.hasError = true;
        this.msgError = "Votre email n'est pas valide";
        return false;
      }
      // TODO: Check email if already done the survey
      return true;
    },
    startSurvey: function(event) {
      if (this.isEmailValid()) {
        const emailInput = document.getElementById("email");
        emailInput.disabled = true;
        this.isStarted = true;
      }
    },
  }
}
</script>

<style scoped>
form {
  width: 80%;
  margin: 40px auto;
}

.form-content {
  background-color: var(--dark-blue);
  padding: 40px;
  border-radius: 10px;
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

#section-email {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

#section-email > p {
  text-align: center;
  font-weight: bold;
  font-size: 32px;
}

.text-error {
  text-align: center;
  color: red;
  font-size: 24px;
  font-weight: normal;
}

.email {
  width: 100%;
}

#start-survey {
  width: fit-content;
}

#section-person {
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
}

#section-person > * {
  width: 48%;
}
</style>
