<template>
  <div>
    <swiper ref="mySwiper">
      <swiper-slide v-for="(item, index) in swiperData" :key="index">
        <img :src="item.image" alt="" />
      </swiper-slide>
    </swiper>
    <div class="button-box">
      <div
        v-for="(item, index) in swiperData"
        :key="index"
        class="button"
        :class="{ active: index === currentIndex }"
        @click="clickHandle(index)"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "MySwiper",
  data() {
    let that = this;
    return {
      currentIndex: 0,
      swiperData: [
        {
          image:
            "https://img1.dxycdn.com/2020/0220/014/3397684583507458039-135.png",
          title: "新增疑似/新增确诊",
        },
        {
          image:
            "https://img1.dxycdn.com/2020/0220/697/3397684611424536901-135.png",
          title: "现存确诊/现存疑似",
        },
        {
          image:
            "https://img1.dxycdn.com/2020/0220/861/3397684624309439853-135.png",
          title: "死亡/治愈",
        },
        {
          image:
            "https://img1.dxycdn.com/2020/0220/168/3397686703073768694-135.png",
          title: "病死率",
        },
        {
          image:
            "https://img1.dxycdn.com/2020/0220/709/3397686724548816431-135.png",
          title: "治愈率",
        },
      ],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: true,
        on: {
          slideChangeTransitionEnd() {
            console.log(swiper.activeIndex); //切换结束时，告诉我现在是第几个slide
            that.currentIndex = this;
          },
          slideChange: function () {
            console.log(this.activeIndex);
          },
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },

  methods: {
    clickHandle(index) {
      this.currentIndex = index;
      this.swiper.slideTo(index, 1000, false);
    },
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
.button-box {
  display: table;
  width: 100%;
}
.button {
  display: table-cell;
  background-color: #eee;
  font-size: 12px;
  width: 10%;
  height: 30px;
  padding: 5px;

  border-radius: 5px;
  text-align: center;
  align-items: center;
  vertical-align: middle;
}
.active {
  background-color: skyblue;
}
</style>