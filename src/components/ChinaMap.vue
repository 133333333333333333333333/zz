<template>
  <div class="mapbox">
    <p class="title">疫情地图</p>
    <tba-bar :currentIndex="currentIndex"></tba-bar>
    <div id="chinaMap" :index="0" v-show="showMap == 0"></div>
    <div id="worldMap" :index="1" v-show="showMap == 1"></div>
  </div>
</template>

<script>
import { getNcovCity, getWorldNcov } from "../network/getNcov";
import TbaBar from "./TbaBar.vue";

export default {
  components: { TbaBar },
  name: "ChinaMap",
  data() {
    return {
      currentIndex: 0,
    };
  },
  created() {},
  mounted() {
    //{name:'内蒙古',value:10,itemStyle:{normal:{areaColor:#f00}}}
    getNcovCity().then((res) => {
      // console.log(res.data.data);
      var allCitys = [];
      var data = res.data.data;
      for (var i = 0; i < res.data.data.length; i++) {
        var temp = {
          name: data[i].provinceShortName,
          value: data[i].currentConfirmedCount,
        };
        allCitys.push(temp);
      }
      // console.log(allCitys);
      this.$charts.chinaMap("chinaMap", allCitys);
      
    });
    getWorldNcov().then((res) => {
      // console.log(res);
      var allCountries = [];
      var data = res.newslist;
      for (var i = 0; i < data.length; i++) {
        var temp={
          name:data[i].provinceName,
          value: data[i].currentConfirmedCount,
        }
        allCountries.push(temp);
      }
      // console.log(allCountries)
      this.$charts.worldMap("worldMap", allCountries);
    });
  },
  computed: {
    showMap() {
      switch (true) {
        case this.currentIndex == 0:
          return 0;
        case this.currentIndex == 1:
          return 1;
      }
    },
  },
  methods: {},
};
</script>

<style scoped>
.mapbox {
  width: 100%;
  padding: 10px 0;
  background-color: #eee;
  overflow: hidden;
}
.title {
  margin: 5px;
  padding-left: 5px;
  border-left: 3px solid blue;
  /* background-color: #fff; */
}
#chinaMap {
  width: 100%;
  height: 300px;
  color: #fff;
}
#worldMap {
  width: 358px;
  height: 300px;
  color: #fff;
}
</style>