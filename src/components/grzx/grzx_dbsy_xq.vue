<template>
  <div>
    <div class="whole" v-show="show">
      <p>
        当前位置：
        <span style="cursor: pointer" @click="toGrzx"> 个人中心 /</span>
        <span style="cursor: pointer" @click="toDbsy">待办事宜</span>
      </p>
      <div class="head">
          <span style="margin: 15px 0px 0px 45%;">请假单</span>
          <span style="margin: 15px 20px 0px 0px; cursor: pointer;" @click="toDbsy">X</span>
      </div>
      <table>
        <tr>
          <td>姓名:张丽娜</td>
          <td>岗位：平面设计</td>
          <td>工号：H118</td>
          <td>所属部门：综合管理部</td>
        </tr>
        <tr>
          <td>交接人：贾晓娟</td>
          <td colspan="2">
            请假开始事件
            <input type="text" />
          </td>
          <td colspan="">
            请假结束事件
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td></td>
          <td colspan="2">
            请假时长
            <input type="text" />
          </td>
          <td colspan="">
            请假类型
            <input type="text" />
          </td>
        </tr>
        <tr style="height:100px">
            <td>请假原因</td>
            <td colspan="3"><input type="text"></td>
        </tr>
        <tr>
            <td>紧急程度</td>
            <td colspan="2">
                <input type="radio">正常
                <input type="radio">紧急
                <input type="radio">特急
            </td>
            <td>是否补假</td>
        </tr>
        <tr style="height:100px">
            <td>添加附件</td>
            <td colspan="3"><input type="file"></td>
        </tr>
        <tr style="height:100px">
            <td>部门人员意见</td>
            <td colspan="3"><input type="text"></td>
        </tr>
        <tr>
            <td colspan="4">
                <img :src="yes" >
                <img :src="no" >
            </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["ren"],
  data() {
    return {
      show: true,
      list: this.getList(),
      yes: require("@/assets/image/yes.jpg"),
      no: require("@/assets/image/no.jpg"),
    };
  },
  methods: {
    getList() {
      return [
        {
          theme: "贾晓娟1的详情",
          clr: "",
          fqr: "",
          startTime: "",
          endTime: "",
          status: "",
        },
        {
          theme: "贾晓娟2的详情",
          clr: "",
          fqr: "",
          startTime: "",
          endTime: "",
          status: "",
        },
        {
          theme: "贾晓娟3的详情",
          clr: "",
          fqr: "",
          startTime: "",
          endTime: "",
          status: "",
        },
      ];
    },
    toDbsy(){
      this.$router.push({ path: "/grzx/dbsy" });
      this.$emit("toFu", true);
    },
    toGrzx(){
      this.$emit("toGrzx");
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