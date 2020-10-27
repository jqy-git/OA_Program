<template>
  <div class="whole">
    <div class="line_1">
      <p>当前位置：通讯信息</p>
      <img :src="header" />
      <input type="text" />
      <button>搜索</button><br />
    </div>
    <div class="line_2">
      <span>机构选择：</span>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <span>机构选择：</span>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <input type="text">
      <img :src="search" />
      (姓名、英文名模糊查询)
    </div>
    <table>
        <tr>
            <td>序号</td>
            <td>所在部门</td>
            <td>职务</td>
            <td>姓名</td>
            <td>英文名</td>
            <td>分机</td>
            <td>移动电话</td>
            <td>邮箱</td>
            <td>Skype/虚拟网</td>
        </tr>
        <tr v-for="(item,index) in list" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.department }}</td>
          <td>{{ item.job }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.eName }}</td>
          <td>{{ item.tel }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.skype }}</td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: require("@/assets/image/header.jpg"),
      search: require("@/assets/image/seach.jpg"),
      list: this.getList(),
    };
  },
  methods:{
    getList(){
      return[
        {
          id:1,
          department:"孚纬进出口",
          job:"采购助理",
          name:"贾晓娟",
          eName:"jiaxiaojuan",
          tel:"89012899(2899)",
          phone:"13736092745",
          email:"adeline.wu@fdsintl.com",
          skype:1,
        }
      ]
    }
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
img {
  transform: translate(0, 9px);
}
.line_1 input {
  height: 25px;
  width: 237px;
}
button {
  height: 29px;
  width: 52px;
}
.line_2 {
  line-height: 50px;
}
select {
  width: 120px;
  height: 20px;
}
.line_2 input{
    width: 120px;
    height: 18px;
    margin-left: 10px;
}
.line_2 img{
    transform: translate(-5px,6px);
}
table{
    font-size: 12px;
    border-collapse:collapse;
    border:1px #666666 solid;
}
td{
  text-align: center;
  border:2px #666666 solid;
  padding: 5px;
}
</style>