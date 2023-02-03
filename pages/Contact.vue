<template>
  <div class="contact-page">
    <div class="contactus-page">
      <div class="contactus-header">
        <SectionTitle>Contactez-nous</SectionTitle>
      </div>
      <div class="contactus-form">
        <form action="">
          <Input
            class="contactus-input"
            id="contactus-nom"
            name="nom"
            label="Nom"
            placeholder="Votre nom"
            type="text"/>
          <Input
            class="contactus-input"
            id="contactus-prenom"
            name="prenom"
            label="Prénom"
            placeholder="Votre prénom"
            type="text"
          />
          <Input
            class="contactus-input"
            id="contactus-email"
            name="email"
            label="Email"
            placeholder="Votre email"
            type="email"
          />
          <TextArea
            class="contactus-input"
            id="contactus-message"
            name="message"
            label="Message"
            placeholder="Votre message"
          />
          <SubmitButton class="contactus-submit" value="Envoyer" />
        </form>
      </div>
    </div>

    <div class="contactinfo-page">
      <div class="contactinfo-header">
        <SectionTitle>Informations contact</SectionTitle>
      </div>
      <div class="contactinfo-body">
        <div class="contact-info-body-item">
          <p>Adresse</p>
          <a href="http://maps.google.com/?q=48 rue Desgroux, Beauvais, France">
            48 rue Desgroux<br />Beauvais, France</a>
        </div>
        <div class="contact-info-body-item">
          <p>Téléphone</p>
          <a href="tel:0344156800">03 44 15 68 00</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>
.contact-page {
  display: flex;
  justify-content: space-around;
  margin: 40px 0;
}

.contactinfo-header,
.contactus-header {
  margin-bottom: 40px;
}

.contactinfo-page {
  align-self: center;
}

.contactinfo-body {
  width: 20vw;
  text-align: center;
  margin: 0 auto;
}

.contact-info-body-item {
  margin-bottom: 40px;
  font-size: 24px;
}

.contact-info-body-item a {
  color: var(--dark-blue);
  text-decoration: none;
}

.contact-info-body-item a:hover {
  text-decoration: underline;
}

.contactus-form {
  width: 60vw;
  margin: auto;
  background-color: var(--light-blue);
  padding: 40px;
  border-radius: 10px;
  color: var(--white);
}

.contactus-input {
  margin-bottom: 40px;
}

@media screen and (max-width: 1380px) {
  .contact-page {
    flex-direction: column;
  }

  .contact-page > * {
    margin: 20px 0;
  }

  .contactinfo-page {
    order: -1;
  }
}
</style>
