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
        ref="emailInputComponent"
        id="email"
        label="Email"
        type="email"
        name="email"
        placeholder="Votre Email"
        class="email"
        :pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
        @keydown.native="startSurvey"
      />
      <Button v-if="!isStarted"
              id="start-survey"
              type="button"
              value="Commencer"
              @click.native="startSurvey"/>
    </div>

    <div v-if="isStarted" class="form-content">
      <div class="form-section" id="section-person">
        <Input
          id="firstname"
          ref="firstname"
          label="Prénom"
          name="firstname"
          placeholder="Votre Prénom"
        />
        <Input
          id="lastname"
          ref="lastname"
          label="Nom"
          name="lastname"
          placeholder="Votre Nom"
        />
      </div>

      <div class="form-section" id="section-location">
        <LocationsInput ref="locations"/>
      </div>

      <div class="form-section" id="section-aliments">
        <SelectAliments ref="aliments"/>
      </div>

      <button id="submit-survey"
              type="submit"
              @click="submitSurvey"
      >
        Envoyer
      </button>
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
    isEmailValid: async function(event) {
      const emailInputComponent = this.$refs.emailInputComponent;

      if (!emailInputComponent.checkPattern()) {
        this.hasError = true;
        this.msgError = "Votre email n'est pas valide";
        return false;
      }

      const url = "http://localhost:9000/api/utils/mail_valide"
      const email = emailInputComponent.getValue();
      const data = (await fetch(url, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ "data": email }),
      }).then(response => response.json()));
      const emailValid = data.response;
      if (!emailValid) {
        this.hasError = true;
        this.msgError = "Vous avez déjà fait le sondage"; // TODO : change to an information page that tells he already send the survey
        return false;
      }

      return true;
    },
    startSurvey: async function(event) {
      if (event.type === "keydown") {
        if (event.key !== "Enter") return;
        event.preventDefault();
      }

      if (await this.isEmailValid()) {
        const emailInput = document.getElementById("email");
        emailInput.disabled = true;
        this.isStarted = true;
      }
    },
    checkInputValid: function(refInput) {
      const input = this.$refs[refInput];
      console.log(input);ç
    },
    submitSurvey: function(event) {
      event.preventDefault(); // TO REMOVE FOR SUBMITTING
      this.checkInputValid("firstname");
      this.checkInputValid("lastname");
      this.checkInputValid("locations");
      this.checkInputValid("aliments");
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
