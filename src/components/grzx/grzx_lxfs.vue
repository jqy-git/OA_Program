<template>
  <div>
    <div class="whole">
         <p>
        当前位置：
        <span style="cursor: pointer" @click="toGrzx">个人中心 /</span>
        <span style="cursor: pointer">修改联系方式</span>
      </p>
      <img :src="dbsy" />
      <table>
          <tr>
              <td>姓名</td>
              <td>工号</td>
              <td>座机</td>
              <td>公司电信手机号码</td>
              <td>Skype/虚拟网</td>
          </tr>
          <tr>
              <td>张丽娜</td>
              <td>H1180</td>
              <td>89012980</td>
              <td><input type="text"></td>
              <td><input type="text"></td>
              <td></td>
          </tr>
          <tr>
              <td colspan="5">
                  <button style="background-color: #b81c22;">确认修改</button>
                  <button style="background-color: #4c4948;">取消修改</button>
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
      dbsy: require("@/assets/image/dbsy_header.jpg"),
    };
  },
  methods:{
      toGrzx() {
      this.$router.push({ path: "/grzx" });
      this.$emit("toFu", true);
    },
  }
};
</script>

<style scoped>
.whole {
  background-color: white;
  padding-left: 120px;
  height: 850px;
  padding-top: 40px;
}
p {
  margin-bottom: 20px;
}
table {
  margin-top: 10px;
  font-size: 12px;
  border-collapse: collapse;
  width: 770px;
}
td {
  text-align: center;
  border: 2px #dfd4d4 solid;
  padding: 5px;
}
button{
    border-radius: 30px;
    outline: none;
    border: none;
    cursor: pointer;
    width: 150px;
    height: 30px;
    color: white;
}
</style>