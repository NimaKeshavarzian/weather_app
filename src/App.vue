<template>
  <div id="app">
    <page-header :hasErr="api.hasError"></page-header>
    <div id="weatherIconContainer">
      <img
        :src="api.iconUrl"
        alt="Weather"
        width="250"
        height="250"
      />
    </div>
    <weather :apiData="api" @hasError="this.api.hasError = $event" @icon="changeIcon($event)"></weather>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Weather_data from "./components/Weather_Data.vue";

export default {
  data() {
    return {
      api: {
        token: "18e14dd0589a07129fdf66b07af90ac8",
        units: "metric",
        url: `https://api.openweathermap.org/data/2.5/weather`,
        baseIconUrl: "http://openweathermap.org/img/wn/",
        iconUrl: "",
        hasError: false
      }
    };
  },
  methods: {
    changeIcon(icon) {
      this.api.iconUrl = this.api.baseIconUrl + icon + "@4x.png"
    }
  },
  components: {
    pageHeader: Header,
    weather: Weather_data
  }
};
</script>
