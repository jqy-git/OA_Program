<template>
  <div>
    <div class="whole">
      <p>
        当前位置：
        <span style="cursor: pointer" @click="toGrzx">个人中心 /</span>
        <span style="cursor: pointer">待办事宜</span>
      </p>

      <img :src="header" />
      <table>
        <tr>
          <td>主题</td>
          <td>当前处理人</td>
          <td>发起人</td>
          <td>发起时间</td>
          <td>期限</td>
          <td>状态</td>
        </tr>
        <tr
          v-for="(item, index) in list"
          :key="index"
          @click="toXiangQing(index)"
        >
          <td>{{ item.theme }}</td>
          <td>{{ item.clr }}</td>
          <td>{{ item.fqr }}</td>
          <td>{{ item.startTime }}</td>
          <td>{{ item.endTime }}</td>
          <td>{{ item.status }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      list: this.getList(),
      header: require("@/assets/image/dbsy_header.jpg"),
    };
  },
  methods: {
    getList() {
      return [
        {
          theme: "请假单 | 贾晓娟1",
          clr: "张丽娜",
          fqr: "贾晓娟",
          startTime: "2018-07-15 10:30",
          endTime: "2018-08-02",
          status: "正常",
        },
        {
          theme: "请假单 | 贾晓娟2",
          clr: "张丽娜",
          fqr: "贾晓娟",
          startTime: "2018-07-15 10:30",
          endTime: "2018-08-02",
          status: "正常",
        },
        {
          theme: "请假单 | 贾晓娟3",
          clr: "张丽娜",
          fqr: "贾晓娟",
          startTime: "2018-07-15 10:30",
          endTime: "2018-08-02",
          status: "正常",
        },
      ];
    },
    toGrzx() {
      this.$router.push({ path: "/grzx" });
    },
    toXiangQing(index) {
      this.$router.push({ path: "/grzx/dbsy/xq" });
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
tr:not(:first-child):hover {
  background-color: #beb2b2;
  cursor: pointer;
}
</style>