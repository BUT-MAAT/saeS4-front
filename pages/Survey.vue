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
        :required="true"
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
          :required="true"
        />
        <Input
          id="lastname"
          ref="lastname"
          label="Nom"
          name="lastname"
          placeholder="Votre Nom"
          :required="true"
        />
      </div>

      <div class="form-section" id="section-location">
        <LocationsInput ref="locations"
        />
      </div>

      <div class="form-section" id="section-aliments">
        <SelectAliments ref="aliments"
        />
      </div>

      <Button id="submit-survey"
              type="submit"
              @click.native="submitSurvey"
      >
        Envoyer
      </Button>
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
    checkInputs: function() {
      const emailInput = this.$refs.emailInputComponent;
      const firstnameInput = this.$refs.firstname;
      const lastnameInput = this.$refs.lastname;
      const locationInput = this.$refs.locations;
      const alimentsSelect = this.$refs.aliments;
      alimentsSelect.checkErrors();
      locationInput.checkErrors();
      lastnameInput.checkErrors();
      firstnameInput.checkErrors();
      emailInput.checkErrors();
      return emailInput.isValid()
        && firstnameInput.isValid()
        && lastnameInput.isValid()
        && locationInput.isValid()
        && alimentsSelect.isValid();
    },
    checkAlimentInput: function() {
      const selectAlimentsComponent = this.$refs.aliments;
      return selectAlimentsComponent.isValid();
    },
    submitSurvey: async function(event) {
      //event.preventDefault(); // TO REMOVE FOR SUBMITTING
      if (!this.checkInputs()) {
        console.log("erreur input");
        event.preventDefault();
        return;
      }

      if (!this.checkAlimentInput()) {
        console.log("il faut 10 aliments");
        event.preventDefault();
        return;
      }

      const url = "http://localhost:9000/api/sondage/create"
      let data = {
        "nom": this.$refs.lastname.getValue().trim().toLowerCase().capitalize(),
        "prenom": this.$refs.firstname.getValue().toLowerCase().capitalize(),
        "mail": this.$refs.emailInputComponent.getValue().trim(),
        "adresse": this.$refs.locations.getAdress().trim(),
        "code_postal": this.$refs.locations.getPostalCode().trim(),
        "ville": this.$refs.locations.getCity().trim(),
        "liste_aliments" : [],
      }
      this.$refs.aliments.getSelectedAliments().forEach(aliment => {
        data.liste_aliments.push({
          "id_aliment": aliment.id_aliment,
          "nom_aliment": aliment.nom_aliment,
          "id_sous_sous_categorie": aliment.id_sous_sous_categorie,
        })
      });
      const rep = (await fetch(url, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(response =>  response.json()));

    },
  }
}
</script>

<style scoped>

form {
  width: 80%;
  margin: 40px auto;
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
#section-location >>> .input:nth-child(2) {
  margin: 20px 0;
}
#submit-survey {
  display: block;
  margin: auto;
}
</style>
