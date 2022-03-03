
<template>
  <div class="case-num">
    <div class="container">
      <div class="title">
        <span>截至{{ caseNumDate.modifyTime }}全国数据统计</span>
      </div>
    </div>
    <div class="num">
      <ul>
        <li>
          <div class="itembox">
            <div class="head">
              较昨日<span>{{
                caseNumDate.currentConfirmedIncr > 0
                  ? "+" + caseNumDate.currentConfirmedIncr
                  : "-" + caseNumDate.currentConfirmedIncr
              }}</span>
            </div>
            <div class="body">
              <div>{{ caseNumDate.currentConfirmedCount }}</div>
            </div>
            <div class="foot">现存确诊</div>
          </div>
        </li>
        <li>
          <div class="itembox">
            <div class="head">
              较昨日<span>{{
                caseNumDate.confirmedIncr > 0
                  ? "+" + caseNumDate.confirmedIncr
                  : "-" + caseNumDate.confirmedIncr
              }}</span>
            </div>
            <div class="body">
              <div>{{ caseNumDate.confirmedCount }}</div>
            </div>
            <div class="foot">累计确诊</div>
          </div>
        </li>
        <li>
          <div class="itembox">
            <div class="head">
              较昨日<span>{{
                caseNumDate.suspectedIncr > 0
                  ? "+" + caseNumDate.suspectedIncr
                  : "-" + caseNumDate.suspectedIncr
              }}</span>
            </div>
            <div class="body">
              <div>{{ caseNumDate.suspectedCount }}</div>
            </div>
            <div class="foot">累计境外输入</div>
          </div>
        </li>
        <li>
          <div class="itembox">
            <div class="head">
              较昨日<span>{{
                caseNumDate.curedIncr > 0
                  ? "+" + caseNumDate.curedIncr
                  : "-" + caseNumDate.curedIncr
              }}</span>
            </div>
            <div class="body">
              <div>{{ caseNumDate.curedCount }}</div>
            </div>
            <div class="foot">累计治愈</div>
          </div>
        </li>
        <li>
          <div class="itembox">
            <div class="head">
              较昨日<span>{{
                caseNumDate.deadIncr > 0
                  ? "+" + caseNumDate.deadIncr
                  : "-" + caseNumDate.deadIncr
              }}</span>
            </div>
            <div class="body">
              <div>{{ caseNumDate.deadCount }}</div>
            </div>
            <div class="foot">累计死亡</div>
          </div>
        </li>
        <li>
          <div class="itembox">
            <div class="head">
              较昨日<span>{{
                caseNumDate.seriousIncr > 0
                  ? "+" + caseNumDate.seriousIncr
                  : "-" + caseNumDate.seriousIncr
              }}</span>
            </div>
            <div class="body">
              <div>{{ caseNumDate.seriousCount }}</div>
            </div>
            <div class="foot">现存无症状</div>
          </div>
        </li>
      </ul>
    </div>
   
  </div>
</template>

<script>
export default {
  name: "CaseNum",
  props: {
    caseNumDate: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  
  computed: {
    // formatDate(date) {
    //   var date = new Date(date);
    //   var YY = date.getFullYear() + "_";
    //   var MM =
    //     (date.getMonth() + 1 < 10
    //       ? "0" + (date.getMonth() + 1)
    //       : date.getMonth() + 1) + "_";
    //   var DD =
    //     (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + "  ";
    //   var hh =
    //     (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
    //   var mm =
    //     date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    //   return YY + MM + DD + hh + mm;
    // },
    //  timestampToTime(timestamp) {
    //     var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    //     var Y = date.getFullYear() + '-';
    //     var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1):date.getMonth()+1) + '-';
    //     var D = (date.getDate()< 10 ? '0'+date.getDate():date.getDate())+ ' ';
    //     var h = (date.getHours() < 10 ? '0'+date.getHours():date.getHours())+ ':';
    //     var m = (date.getMinutes() < 10 ? '0'+date.getMinutes():date.getMinutes()) + ':';
    //     var s = date.getSeconds() < 10 ? '0'+date.getSeconds():date.getSeconds();
    //     return Y+M+D+h+m+s;
    // }
  },
  methods: {},
};
</script>

<style scoped>
.case-num {
  padding: 10px;
  background-color: #eee;
  margin: 10px 0;
}
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
li {
  width: 30%;
  margin: 10px 0;
}
.itembox {
  text-align: center;
}
.head {
  font-size: 12px;
}
.body {
  font-size: 20px;
  color: red;
  text-align: center;
}
.foot {
  font-size: 14px;
}


</style>