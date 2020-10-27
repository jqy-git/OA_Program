<template>
  <div>
    <div class="whole" v-show="show">
      <p>当前位置：<span style="cursor: pointer">个人中心</span></p>
      <img :src="dbsy" @click="toDbsy" />
      <img :src="ybsy" />
      <img :src="bjsy" />
      <img :src="lcsz" />
      <img :src="lxfs" />
    </div>
    <router-view @toFu="getShow" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show:true,
      dbsy: require("@/assets/image/grzx1.png"),
      ybsy: require("@/assets/image/grzx2.png"),
      bjsy: require("@/assets/image/grzx3.png"),
      lcsz: require("@/assets/image/grzx4.png"),
      lxfs: require("@/assets/image/grzx5.png"),
    };
  },
  methods: {
    toDbsy() {
      this.$router.push({ path: "/grzx/dbsy" });
      this.show = false;
    },
    getShow(val){
      this.show = val;
    }
  },
};
</script>

<style scoped>
.whole {
  background-color: white;
  padding-left: 120px;
  height: 850px;
  padding-top: 40px;
}
img {
  margin: 30px 30px 0px 0px;
  cursor: pointer;
}
</style>