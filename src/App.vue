<template>
  <div id="app">
    <!-- Loader -->
    <loader v-if="isNotLoaded"></loader>
    <!-- Get location -->
    <page-header></page-header>
    <!-- Weather status Icon -->
    <weather-status-icon :iconUrl="api.iconUrl"></weather-status-icon>
    <!-- Weather -->
    <weather :apiData="api" @icon="changeIcon($event)"></weather>
  </div>
</template>

<script>
import Loader from "./components/loader.vue"; // loader
import Header from "./components/Header.vue"; // get location
import Weather_Status_Icon from "./components/weather_status_icon.vue"; // weather status icon
import Weather_data from "./components/Weather_Data.vue"; // get data

export default {
  data() {
    return {
      api: {
        token: "18e14dd0589a07129fdf66b07af90ac8", // api token
        units: "metric", // data units
        url: `https://api.openweathermap.org/data/2.5/weather`, // api base url
        baseIconUrl: "http://openweathermap.org/img/wn/", // api base icon url
        iconUrl: "", // icon url then get icon code
      },
      isValidCity: false, // Check city
      isNotLoaded: true // Check is page loaded
    };
  },
  methods: {
    changeIcon(icon) {
      this.api.iconUrl = this.api.baseIconUrl + icon + "@4x.png"
    }
  },
  components: {
    loader: Loader, // loader
    pageHeader: Header, // get location,
    weatherStatusIcon: Weather_Status_Icon, // Weather status icon
    weather: Weather_data // get data
  },
  created() {
    this.isNotLoaded = !this.isNotLoaded
  }
};
</script>
