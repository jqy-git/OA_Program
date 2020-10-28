<template>
  <div>
    <div class="whole">
      <p>
        当前位置：
        <span style="cursor: pointer" @click="toXzgl"> 行政管理 /</span>
        <span style="cursor: pointer">办公用品申请</span>
      </p>
      <div class="head">
        <span style="margin: 15px 0px 0px 45%">办公用品申请</span>
        <span style="margin: 15px 20px 0px 0px; cursor: pointer" @click="toXzgl"
          >X</span
        >
      </div>
      <table>
        <tr>
          <td style="width: 20%">姓名:张丽娜</td>
          <td>岗位：平面设计</td>
          <td>工号：H118</td>
          <td>所属部门：综合管理部</td>
        </tr>
        <tr>
          <td rowspan="5">所需办公用品</td>
          <td colspan="3">
            <img :src="pic1" style="float: left" />
            <input type="text" />水笔 <input type="text" />铅笔
            <input type="text" />红笔 <input type="text" />记号笔
            <input type="text" />白板笔
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <img :src="pic2" style="float: left" />
            <input type="text" />A4纸 <input type="text" />A3纸
            <input type="text" />A4铜牌纸 <input type="text" />A3铜牌纸
            <input type="text" />A4不干胶 <input type="text" />A4牛皮纸
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <img :src="pic3" style="float: left" />
            <input type="text" />票夹(大) <input type="text" />票夹(中)
            <input type="text" />票夹(小) <input type="text" />文件夹
            <input type="text" />档案袋
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <img :src="pic4" style="float: left" />
            <div>
              <input type="text" />记事本 <input type="text" />橡皮
              <input type="text" />计算器 <input type="text" />回形针
              <input type="text" />双面胶 <input type="text" />固体胶
              <input type="text" />液体胶 <input type="text" />剪刀
              <input type="text" />美工刀 <input type="text" />钉书机
              <input type="text" />钉书针 <input type="text" />直尺
              <input type="text" />卷尺
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="3">
            备注 ：<textarea cols="15" rows="2"></textarea>
            说明：请在对应办公用品前输入您所需数量，如其他特殊要求，请在备注上说明
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <img :src="yes" style="cursor: pointer" />
            <img :src="no" style="cursor: pointer" />
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
      pic1: require("@/assets/image/bgyp1.png"),
      pic2: require("@/assets/image/bgyp2.png"),
      pic3: require("@/assets/image/bgyp3.png"),
      pic4: require("@/assets/image/bgyp4.png"),
    };
  },
  methods: {
    toXzgl() {
      this.$router.push({ path: "/xzgl" });
    },
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
input {
  border-bottom: 1px solid;
  width: 30px;
  margin-left: 30px;
  border-top: none;
  border-left: none;
  border-right: none;
}
</style>