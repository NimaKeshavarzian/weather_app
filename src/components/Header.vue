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
    <span id="errorLog" v-if="hasErr">Please enter a valid location.</span></label>
  </header>
</template>

<script>
import {eventBus} from '../main'

export default {
  props: {
    hasErr: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      location: "Tehran"
    };
  },
  methods: {
    locationChanged() {
      eventBus.$emit("location", this.location);
    }
  },
  created() {
    eventBus.$on("inputLocation", (inputLocation) => this.location = inputLocation)
  }
};
</script>
