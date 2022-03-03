<template>
  <div class="info">
    <p class="title">
      💀病毒信息
    </p>
    <div class="content">
      <p>{{ covid19Info.note1 }}</p>
      <p>{{ covid19Info.note2 }}</p>
      <p>{{ covid19Info.note3 }}</p>
      <p>{{ covid19Info.remark1 }}</p>
      <p>{{ covid19Info.remark2 }}</p>
      <p>{{ covid19Info.remark3 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
  props: {
    covid19Info: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.info{
  padding: 10px;
  background-color: #eee;
  margin: 10px 0;
}
.info .title{
  font-size: 18px;
  margin: 5px 0;
}
.content p{
  font-size: 14px;
}
</style>