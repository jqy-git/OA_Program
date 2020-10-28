<template>
  <div>
    <div class="whole">
      <p>
        当前位置：
        <span style="cursor: pointer" @click="toXzgl"> 行政管理 /</span>
        <span style="cursor: pointer">固定资产申请</span>
      </p>
      <div class="head">
          <span style="margin: 15px 0px 0px 45%;">固定资产申请</span>
          <span style="margin: 15px 20px 0px 0px; cursor: pointer;" @click="toXzgl">X</span>
      </div>
      <table>
        <tr>
            <td>
                <img :src="yes" style="cursor: pointer;">
                <img :src="no" style="cursor: pointer;">
            </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yes: require("@/assets/image/yes.jpg"),
      no: require("@/assets/image/no.jpg"),
    };
  },
  methods: {
    toXzgl(){
      this.$router.push({ path: "/xzgl" });
    }
  },
};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
.whole {
  background-color: white;
  padding-left: 120px;
  height: 850px;
  padding-top: 40px;
}
p {
  margin-bottom: 20px;
}
.head {
  background-color: #b81c22;
  color: white;
  border-radius: 10px 10px 0px 0px;
  width: 770px;
  height: 50px;
}

table {
  font-size: 12px;
  border-collapse: collapse;
  width: 770px;
}
td {
  text-align: center;
  border: 2px #dfd4d4 solid;
  padding: 20px;
}
</style>