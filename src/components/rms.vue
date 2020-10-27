<template>
  <div class="whole">
    <p>当前位置：人力资源</p>
    <img :src="wdkq" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      wdkq: require("@/assets/image/rms.png"),
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
</style>