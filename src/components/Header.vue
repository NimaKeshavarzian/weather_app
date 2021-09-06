<template>
  <header id="pageHeader">
    <label for="location" id="inputLocationContainer">
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
export default {
  props: {
    inputLocation: String,
    hasErr: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      location: this.inputLocation
    };
  },
  methods: {
    locationChanged() {
      this.$emit("location", this.location);
    }
  }
};
</script>

<style>
#pageHeader {
  width: 100%;
  height: auto;
  position: sticky;
  top: 0;
  left: 0;

  padding: 1.3em 0.3em 0;
}
#inputLocationContainer {
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-template-rows: 2fr 1fr;
}
#inputLocationContainer * {
  color: var(--primaryColor);
  fill: var(--primaryColor);
}
#inputLocationContainer img {
  grid-row: 1/3;
}
#inputLocation {
  width: 5em;  
  background: none;
  border: none;
  font: normal 600 1.6em "overpass";
  line-height: 36.77px;
  text-transform: capitalize;
  padding-top: 0.3em;
  cursor: pointer;
}
#errorLog {
  grid-column: 2/3;
  color: var(--errorTxtColor);
}
</style>
