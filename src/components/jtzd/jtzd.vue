<template>
  <div>
    <p>当前位置：<span style="cursor: pointer">集团制度</span></p>
    <img :src="header" />
    <input type="text" />
    <button>搜索</button>
    <ul style="height:120px">
      <li v-for="(item, index) in list.slice(startIndex,endIndex)" :key="index">
        {{ item.neirong }}
        <span style="float: right">{{ item.shijian }}</span>
      </li>
    </ul>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="list.length"
      :page-size="pageSize"
      :current-page.sync="currentPage"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "jtzd",
  data() {
    return {
      header: require("@/assets/image/header.jpg"),
      list: this.getGongGao(),
      pageSize: 3,
      currentPage:1,
    };
  },
  methods: {
    getGongGao() {
      return [
        {
          neirong: "8关于事项跟踪系统应用的培训通知2018",
          shijian: "2018-05-20",
        },
        {
          neirong: "7关于事项跟踪系统应用的培训通知2018",
          shijian: "2018-05-20",
        },
        {
          neirong: "6关于事项跟踪系统应用的培训通知2018",
          shijian: "2018-05-20",
        },
        {
          neirong: "5关于事项跟踪系统应用的培训通知2018",
          shijian: "2018-05-20",
        },
        {
          neirong: "4关于事项跟踪系统应用的培训通知2018",
          shijian: "2018-05-20",
        },
        {
          neirong: "3关于事项跟踪系统应用的培训通知2018",
          shijian: "2018-05-20",
        },
        {
          neirong: "2关于事项跟踪系统应用的培训通知2018",
          shijian: "2018-05-20",
        },
      ];
    },
  },
  computed:{
    startIndex:function(){
      return this.pageSize * (this.currentPage - 1);
    },
    endIndex:function(){
      return this.pageSize * this.currentPage ;
    }
  },
};
</script>

<style scoped>
div {
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
input {
  height: 25px;
  width: 237px;
}
button {
  height: 29px;
  width: 52px;
}
li {
  margin-top: 10px;
  line-height: 30px;
  color: #4c4948;
  font-size: 12px;
  width: 785px;
  padding-left: 5px;
}
li:hover {
  background-color: #666666;
  color: white;
  cursor: pointer;
}
</style>