<template>

  <div class="travel">
   <h3>春节出行政策查询</h3>
    <div class="begin">
       <span>出发地区</span>
    <el-cascader
    v-model="selectedOptions"
    :options="options"
    placeholder="请选择出发地区"
     filterable
    @change="handleChange">
    </el-cascader>

</div>
<div class="begin">
       <span>到达地区</span>
    <el-cascader
    v-model="value"
    :options="options"
    :placeholder="'请选择到达地区'"
     filterable
    @change="handleChange">
    </el-cascader>

  </div>
  <van-button class="button" block type="primary">查询政策</van-button>

  </div>
</template>

<script>
// import { getCityTravel } from "../network/getNcov";
import options from '../plugin/data.js'
import Travel from "../views/Travel.vue";
export default {
  name: "SpringTravel",
  components: {
    Travel,
  },
  data() {
    return {
      show: false,
      cascaderValue: "",
      options: options,
      selectedOptions: '',
      value: ''

    };
  },
  created() {
  },
  methods: {
    onFinish({ selectedOptions }) {
      show.value = false;
      fieldValue.value = selectedOptions.map((option) => option.text).join("/");
    },
    handleChange(value) {
        console.log(value);
      }
  },
};
</script>

<style scoped>
.begin {
  width: 90%;
 margin-left: 40px;
}

.el-cascader {
  width: 70%;
  margin: 10px ;
  /* height: 300px; */
}
span {
  font-size: 14px;
  /* margin-left: 20px; */
}
h3 {
  margin: 10px;
}
.van-button {
  width: 90%;
  margin: auto;
  box-sizing: border-box;
}
</style>