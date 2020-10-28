<template>
  <div>
    <div class="whole">
      <p>
        当前位置：
        <span style="cursor: pointer" @click="toXzgl"> 行政管理 /</span>
        <span style="cursor: pointer">车辆使用情况及外出申请</span>
      </p>
      <div class="head">
        <span style="margin: 15px 0px 0px 45%">车辆使用情况及外出申请</span>
        <span style="margin: 15px 20px 0px 0px; cursor: pointer" @click="toXzgl"
          >X</span
        >
      </div>
      <table>
        <tr>
          <td>姓名:张丽娜</td>
          <td>岗位：平面设计</td>
          <td>工号：H118</td>
          <td>所属部门：综合管理部</td>
        </tr>
        <tr>
          <td>
            驾驶员
            <select>
              <option>自行驾驶</option>
            </select>
          </td>
          <td colspan="2">
            出发时间
            <input type="text" />
          </td>
          <td>
            返回时间
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td>
            公司车辆
            <select>
              <option></option>
            </select>
          </td>
          <td>
            出发里程
            <input type="text" style="width:30px"/>
          </td>
          <td>
            返回里程
            <input type="text" style="width:30px"/>
          </td>
          <td>
            对司机评价<select>
              <option></option>
            </select>
          </td>
        </tr>
        <tr>
          <td>地点</td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td>用车理由</td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td>紧急程度</td>
          <td colspan="3">
            <input type="radio" />正常 <input type="radio" />紧急
            <input type="radio" />特急
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
</style>