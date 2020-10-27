<template>
  <div class="whole">
    <p>当前位置：<span style="cursor: pointer;">人力资源</span></p>
    <img :src="wdkq" />
      <img :src="qjd" />
      <img :src="ccd" />
      <img :src="jbsq" />
      <img :src="rwsq" />
      <img :src="kp" />
      <img :src="pxxx" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      wdkq: require("@/assets/image/rlzy1.png"),
      qjd: require("@/assets/image/rlzy2.png"),
      ccd: require("@/assets/image/rlzy3.png"),
      jbsq: require("@/assets/image/rlzy4.png"),
      rwsq: require("@/assets/image/rlzy5.png"),
      kp: require("@/assets/image/rlzy6.png"),
      pxxx: require("@/assets/image/rlzy7.png"),
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
img{
  margin: 30px 30px 0px 0px;
  cursor: pointer;
}
</style>