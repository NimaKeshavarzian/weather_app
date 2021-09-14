<template>
    <div id="weatherIconContainer">
      <img
        :src="iconUrl"
        alt="Weather"
        width="250"
        height="250"
      />
    </div>
</template>

<script>
export default {
    props: {
        iconUrl: String
    }
}
</script>