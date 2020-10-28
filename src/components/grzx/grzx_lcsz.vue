<template>
  <div>
    <div class="whole">
         <p>
        当前位置：
        <span style="cursor: pointer" @click="toGrzx">个人中心 /</span>
        <span style="cursor: pointer">设置流程审批交接人</span>
      </p>
      <img :src="dbsy" />
      <table>
          <tr>
              <td style="width:35%">已设置交接人</td>
              <td style="width:15%">未设置</td>
              <td style="width:50%"></td>
          </tr>
          <tr>
              <td>设置</td>
              <td><input type="text"></td>
              <td></td>
          </tr>
          <tr>
              <td colspan="3">
                  <button style="background-color: #b81c22;">设置交接人</button>
                  <button style="background-color: #4c4948;">取消交接人</button>
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