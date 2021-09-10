<template>
  <div id="weather">
    <!------------------ Main Data ------------------>
    <p id="date">{{ date }}</p>
    <h1 id="temp">{{ output.main.temp }}&#176;</h1>
    <p id="desc">{{ output.weatherDetails.desc }}</p>
    <!------------------ Info ------------------>
    <div id="weatherInfo">
      <ul>
        <li>
          <img
            src="../assets/icons/wind-solid.svg"
            alt="wind"
            width="35"
            height="35"
          />
          <span class="infoTitle">Wind </span
          ><span class="infoValue"> {{ output.windSpeed }}km/h</span>
        </li>
        <li>
          <img
            src="../assets/icons/tint-solid.svg"
            alt="wind"
            width="35"
            height="35"
          />
          <span class="infoTitle">Hum </span
          ><span class="infoValue"> {{ output.main.humidity }}%</span>
        </li>

        <!------------------ Details ------------------>
        <div id="details" class="showAnimation" v-if="showDetails">
          <li>
            <img
              src="../assets/icons/smile-beam-regular.svg"
              alt="wind"
              width="35"
              height="35"
            />
            <span class="infoTitle">Feels Like </span
            ><span class="infoValue"> {{ output.main.feelsLike }}&#176;</span>
          </li>

          <li>
            <img
              src="../assets/icons/arrow-down-solid.svg"
              alt="wind"
              width="35"
              height="35"
            />
            <span class="infoTitle">Min </span
            ><span class="infoValue"> {{ output.main.min }}&#176;</span>
          </li>

          <li>
            <img
              src="../assets/icons/arrow-up-solid.svg"
              alt="wind"
              width="35"
              height="35"
            />
            <span class="infoTitle">Max </span
            ><span class="infoValue"> {{ output.main.max }}&#176;</span>
          </li>
        </div>

        <!------------------ Show Details Transmitter ------------------>
        <p id="more">
          <img
            src="../assets/icons/chevron-down-solid.svg"
            alt="More"
            width="30"
            height="30"
            @click="showDetails = !showDetails"
            v-if="!showDetails"
          />
          <img
            src="../assets/icons/chevron-up-solid.svg"
            alt="Close"
            width="30"
            height="30"
            @click="showDetails = !showDetails"
            v-else
          />
        </p>
      </ul>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  props: {
    apiData: Object
  },
  data() {
    return {
      date: null,
      input: {
        api: null
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
          desc: null,
          icon: null
        },
        windSpeed: null
      },
      showDetails: false
    };
  },
  methods: {
    getWeather(location = "tehran") {
      // Url
      let apiUrl = `${this.input.api.url}?appid=${this.input.api.token}&q=${location}&units=${this.input.api.units}`;
      // Get data
      fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            this.output.main.temp = Math.round(data.main.temp);
            this.output.main.feelsLike = Math.round(data.main.feels_like);
            this.output.main.min = Math.round(data.main.temp_min);
            this.output.main.max = Math.round(data.main.temp_max);
            this.output.weatherDetails.desc = data.weather[0].description;
            this.output.windSpeed = Math.round(data.wind.speed);
            this.output.main.humidity = Math.round(data.main.humidity);
            // Send Icon
            this.$emit("icon", data.weather[0].icon)
            eventBus.$emit("isValidCity", true)
        }).catch((err) => {
          console.warn(err);
          eventBus.$emit("isValidCity", false)
        });
    }
  },
  computed: {
    getDate() {
      let date = new Date();
      let monthName = new Intl.DateTimeFormat("en-US", { month: "long" })
        .format;
      let month = monthName(date);
      let day = date.getUTCDate();
      this.date = `Today, ${day} ${month}`;
    }
  },
  created() {
    this.input.api = this.apiData; // Set api data
    eventBus.$on("location", data => this.getWeather(data)); // get location
    this.getDate;
  },
  mounted() {
    this.getWeather("Tehran");
  }
};
</script>
