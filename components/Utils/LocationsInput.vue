<template>
  <div class="location">
    <SearchbarInput
      id="address"
      label="Adresse"
      name="address"
      placeholder="Votre Adresse"
      ref="address"
      @valuePicked="AddressUpdated"
      :researcher="researcher"
      :required="true"
    />

    <Input
      id="city"
      label="Ville"
      name="city"
      placeholder="Votre Ville"
      ref="city"
      :required="true"
    />
    <Input
      id="postal"
      label="Code Postal"
      name="postal"
      placeholder="Votre Code Postal"
      ref="postal"
      :required="true"
    />
  </div>
</template>

<script>


import AddressResearcher from "~/scripts/searchbar/AddressResearcher";

export default {
  name: "LocationsInput",
  methods:{
    AddressUpdated: function(value){
      const address = this.researcher.ParseJson(value)
      this.$refs.address.setValue(address.street)
      this.$refs.city.setValue(address.city)
      this.$refs.postal.setValue(address.postal)
    },

    getAdress: function() {
      return this.$refs.address.getValue();
    },
    getPostalCode: function() {
      return this.$refs.postal.getValue();
    },
    getCity: function() {
      return this.$refs.city.getValue();
    },
    isValid: function() {
      const adressInput = this.$refs.address;
      const cityInput = this.$refs.city;
      const postalInput = this.$refs.postal;
      return adressInput.isValid() && cityInput.isValid() && postalInput.isValid();
    },
    checkErrors: function() {
      const adressInput = this.$refs.address;
      const cityInput = this.$refs.city;
      const postalInput = this.$refs.postal;
      postalInput.checkErrors();
      cityInput.checkErrors();
      adressInput.checkErrors();
    },
  },
  data(){
    return{
      researcher: new AddressResearcher()
    }
  },
}
</script>

<style scoped>

</style>
