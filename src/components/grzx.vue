<template>
  <div class="whole">
    <p>当前位置：个人中心</p>
    <img :src="dbsy" />
    <img :src="ybsy" />
    <img :src="bjsy" />
    <img :src="lcsz" />
    <img :src="lxfs" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      dbsy: require("@/assets/image/grzx1.png"),
      ybsy: require("@/assets/image/grzx2.png"),
      bjsy: require("@/assets/image/grzx3.png"),
      lcsz: require("@/assets/image/grzx4.png"),
      lxfs: require("@/assets/image/grzx5.png"),
    };
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