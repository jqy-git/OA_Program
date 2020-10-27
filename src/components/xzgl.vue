<template>
  <div class="whole">
    <p>当前位置：集团制度</p>
    <img :src="sqlc" />
    <div class="xiangqing">
      <img :src="bgyp" />
      <img :src="gdzc" />
      <img :src="kdsq" />
      <img :src="clsy" />
      <img :src="jpsq" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sqlc: require("@/assets/image/xzgl.jpg"),
      bgyp: require("@/assets/image/xzgl1.png"),
      gdzc: require("@/assets/image/xzgl2.png"),
      kdsq: require("@/assets/image/xzgl3.png"),
      clsy: require("@/assets/image/xzgl4.png"),
      jpsq: require("@/assets/image/xzgl5.png"),
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
.xiangqing img{
  margin: 30px 30px 0px 0px;
  cursor: pointer;
}
</style>