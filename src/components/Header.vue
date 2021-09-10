<template>
  <header id="pageHeader">
    <label for="inputLocation" id="inputLocationContainer">
      <img
        src="../assets/icons/location_on.svg"
        alt="Location"
        width="40"
        height="40"/>
      <input
        type="text"
        name="inputLocation"
        id="inputLocation"
        v-model="location"
        @change="locationChanged"
    />
    <span id="errorLog" v-if="!validCity">Please enter a valid location.</span></label>
  </header>
</template>

<script>
import {eventBus} from '../main'

export default {
  data() {
    return {
      location: "Tehran",
      validCity: true
    };
  },
  methods: {
    locationChanged() {
    eventBus.$emit("location", this.location);
    eventBus.$on("isValidCity", isValidCity => this.validCity = isValidCity)
    }
  },
  created() {
    eventBus.$on("inputLocation", inputLocation => this.location = inputLocation)
  }
};
</script>
