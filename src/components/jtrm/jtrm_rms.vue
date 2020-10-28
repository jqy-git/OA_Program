<template>
  <div class="whole">
    <p>
      当前位置：<span @click="toJtrm" style="cursor: pointer">集团任免/</span>
      <span style="cursor: pointer">任免书</span>
    </p>
    <img :src="rms" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      rms: require("@/assets/image/rms.jpg"),
    };
  },
  methods: {
    toJtrm() {
      this.$router.push({ path: "/jtrm" });
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
</style>