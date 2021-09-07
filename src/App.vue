<template>
  <div id="app">
    <page-header :inputLocation="api.inputLocation" :hasErr="output.hasError" @location="api.inputLocation = $event"></page-header>
    <div id="weatherIconContainer"><img src="http://openweathermap.org/img/wn/01d@4x.png" alt="" width="300" height="300"></div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  data() {
    return {
      api: {
        token: "18e14dd0589a07129fdf66b07af90ac8",
        inputLocation: "tehran",
        units: "metric",
        url: `https://api.openweathermap.org/data/2.5/weather`,
        iconUrl: "http://openweathermap.org/img/wn/01d@x4.png"
      },
      output: {
        main: {
          temp: null,
          feelsLike: null,
          min: null,
          max: null,
          humidity: null
        },
        weatherDetails: {
          Desc: null,
          icon: null
        },
        windSpeed: null,
        location: {
          country: null,
          city: null
        },
        hasError: false
      }
    };
  },
  components: {
    pageHeader: Header
  }
};
</script>

<style>
/* Fonts */
@import url("https://fonts.googleapis.com/css?family=Overpass");

/* colors */
:root {
  --primaryColor: #fff;
  --bgColor: linear-gradient(192.05deg, #47BFDF 0%, #4A91FF 100%);
  --errorTxtColor: #444E72;
}
* {
  font-family: 'Overpass';
}

body {
  width: 100%;
  height: 100vh;
  margin: 0;
  box-sizing: border-box;
  background: var(--bgColor);
  color: var(--primaryColor);
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  -ms-flex-flow: column;
  justify-content: flex-start;
  align-items: center;
}
#weatherIconContainer {
  width: 100%;
  height: 13em;
  position: relative;
}
#weatherIconContainer img {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
