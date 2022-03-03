<template>
  <div class="city-map">
    城市:{{ city }}
    <div id="city"></div>
  </div>
</template>

<script>
export default {
  name: "City",
  props: {
    city: {
      type: String,
      default: "",
    },
  },
  mounted(){
    this.$charts.provinceMap('city',this.city)
  }
};
</script>

<style scoped>
.city-map{
  padding: 10px;
}
#city{
  width: 100%;
  height: 600px;
}
</style>