<template>
  <div class="content">
    <div class="imgbox">
      <img src="../assets/img/headerimg.webp" alt="" />
    </div>
    <Info :covid19Info="covid19Info"></Info>
    <case-num :caseNumDate="caseNumDate"></case-num>
    <china-map></china-map>
    <my-swiper></my-swiper>
    <spring-travel></spring-travel>
  </div>
</template>

<script>
import { getNcov } from "../network/getNcov";
import CaseNum from "./CaseNum.vue";
import Info from "./Info.vue";
import ChinaMap from './ChinaMap.vue'
import MySwiper from './MySwiper.vue'
import SpringTravel from './SpringTravel.vue';

export default {
  name: "Home",
  components: {
    Info,
    CaseNum,
    ChinaMap,
    MySwiper,
    SpringTravel,
  },
  data() {
    return {
      // 疫情信息covid19Info
      covid19Info: {
        note1: "",
        note2: "",
        note3: "",
        remark1: "",
        remark2: "",
        remark3: "",
      },
      caseNumDate: {
        modifyTime: "", //时间戳
        currentConfirmedCount: "", //现存
        confirmedCount: "", //累计
        suspectedCount: "", //累计境外输入
        curedCount: "", //累计治愈
        deadCount: "", //累计死亡
        seriousCount: "", //现存无症状
        suspectedIncr: "", //新增境外输入
        currentConfirmedIncr: "", //现存确证新增
        confirmedIncr: "", //累计确证人数新增
        curedIncr: "", //新增治愈
        deadIncr: "", //新增死亡
        seriousIncr: "", //无症状新增
      },
    };
  },
  created() {
    this.getNcov();
  },
  methods: {
    getNcov() {
      getNcov().then((res) => {
        // console.log(res);
        if (res.code === 200) {
          // 疫情信息
          this.covid19Info.note1 = res.newslist[0].desc.note1;
          this.covid19Info.note2 = res.newslist[0].desc.note2;
          this.covid19Info.note3 = res.newslist[0].desc.note3;
          this.covid19Info.remark1 = res.newslist[0].desc.remark1;
          this.covid19Info.remark2 = res.newslist[0].desc.remark2;
          this.covid19Info.remark3 = res.newslist[0].desc.remark3;
          // 疫情病例
          this.caseNumDate.modifyTime = res.newslist[0].desc.modifyTime;
          this.caseNumDate.confirmedCount = res.newslist[0].desc.confirmedCount;
          this.caseNumDate.currentConfirmedCount =
            res.newslist[0].desc.currentConfirmedCount;
          this.caseNumDate.suspectedCount = res.newslist[0].desc.suspectedCount;
          this.caseNumDate.curedCount = res.newslist[0].desc.curedCount;
          this.caseNumDate.deadCount = res.newslist[0].desc.deadCount;
          this.caseNumDate.seriousCount = res.newslist[0].desc.seriousCount;
          this.caseNumDate.suspectedIncr = res.newslist[0].desc.suspectedIncr;
          this.caseNumDate.currentConfirmedIncr =
            res.newslist[0].desc.currentConfirmedIncr;
          this.caseNumDate.confirmedIncr = res.newslist[0].desc.confirmedIncr;
          this.caseNumDate.curedIncr = res.newslist[0].desc.curedIncr;
          this.caseNumDate.deadIncr = res.newslist[0].desc.deadIncr;
          this.caseNumDate.seriousIncr = res.newslist[0].desc.seriousIncr;
        }
      });
    },
  },
};
</script>

<style scoped>
.imgbox {
  width: 100%;
  height: 200px;
  overflow: hidden;
}
img {
  width: 100%;
}
</style>