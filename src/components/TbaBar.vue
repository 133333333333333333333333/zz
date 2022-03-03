<template>
  <div class="tab-bar">
    <ul class="tab-bar-list">
      <li
        v-for="(item, index) in local"
        :key="index"
        class="tab-bar-item"
        @click="tabClick(index)"
        :class="{ active: currentIndex === index }"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      local: ["国内疫情", "世界疫情"],
    };
  },
  props: {
    currentIndex: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    tabClick(index) {
      this.$parent.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.tab-bar-list {
  display: flex;
  justify-content: space-around;
}
.tab-bar-item {
  width: 40%;
  padding: 10px 0;
  margin: 0 5%;
  box-sizing: border-box;
  background-color: #eee;
  text-align: center;
  border-bottom: 2px solid #fff;
}
.active{
  border-bottom: 2px solid blue;
  color: black;
}
</style>