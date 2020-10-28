<template>
  <div class="whole">
    <p>当前位置：<span style="cursor: pointer">行政管理</span></p>
    <img :src="sqlc" />
    <div class="xiangqing">
      <img :src="bgyp" @click="toBgyp" />
      <img :src="gdzc" @click="toGdzc" />
      <img :src="kdsq" @click="toKdsq" />
      <img :src="clsy" @click="toClsy" />
      <img :src="jpsq" @click="toJpsq" />
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
  methods: {
    toBgyp() {
      this.$router.push({ path: "/xzgl/bgyp" });
    },
    toGdzc() {
      this.$router.push({ path: "/xzgl/gdzc" });
    },
    toKdsq() {
      this.$router.push({ path: "/xzgl/Kdsq" });
    },
    toClsy() {
      this.$router.push({ path: "/xzgl/clsy" });
    },
    toJpsq() {
      this.$router.push({ path: "/xzgl/jpsq" });
    },
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
.xiangqing img {
  margin: 30px 30px 0px 0px;
  cursor: pointer;
}
</style>