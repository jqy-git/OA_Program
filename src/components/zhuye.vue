<template>
  <div>
    <div class="body-right-top">
      <div class="body-right-1">
        <ul style="padding: 0; margin: 0">
          <li class="li-head">
            <img :src="laba" class="laba" />
            <span class="front">豪雅公告</span>
            <span class="back">更多> ></span>
          </li>
          <li
            class="li-body li-body-1"
            v-for="(item, index) in gonggaoList.slice(0, 7)"
            :key="index"
            :class="{
              active: checkRed(index),
              acBorder: checkBorder(index),
            }"
          >
            <span class="gonggao">{{ item.title }}</span>
            <span class="shijian">{{ item.data }}</span>
          </li>
        </ul>
      </div>

      <div class="body-right-2">
        <ul>
          <li class="li-head">
            <img :src="laba" class="laba" />
            <span class="front">任免书</span>
            <span class="back2">更多> ></span>
          </li>
          <li
            class="li-body li-body-2"
            v-for="(item, index) in renmianshuList"
            :key="index"
            :class="{ active: checkRed(index) }"
          >
            <span class="gonggao">{{ item.neirong }}</span>
          </li>
        </ul>
      </div>

      <div class="body-right-3">
        <ul>
          <li class="li-head">
            <img :src="laba" class="laba" />
            <span class="front">代办事宜</span>
            <span class="back3">更多> ></span>
          </li>
          <li
            class="li-body li-body-3"
            v-for="(item, index) in daibanList"
            :key="index"
            :class="{ active: checkRed(index) }"
          >
            <span class="daiban">{{ item.neirong }}</span>
            <span class="daibansj">{{ item.shijian }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="body-right-center">
      <div class="body-right-4">
        <ul style="padding: 0; margin: 0">
          <li class="li-head">
            <img :src="laba" class="laba" />
            <span class="front">代办事宜</span>
            <span class="back">更多> ></span>
          </li>

          <img :src="demo" class="demo" />
          <div class="wenzhang">
            <p class="biaoti4">
              <img
                :src="dian"
                class="redCir"
                style="transform: translate(0px, -3px)"
              />
              <!-- 7张小月请假带待您审批 -->
              {{ daiban4_1List.title }}
            </p>
            <p class="xiangqing">
              {{ daiban4_1List.content }}
              <!-- 4月20日，我们迎来了“小猪佩奇“专场生日会，美味 的佩奇蛋糕，
                    精美的专属礼物，特制的生日卡片，给了 小伙伴们带来了一个又
                    一个的惊喜，引来他们一阵阵的 欢呼，社会人，掌声送给豪雅人！
                    “社会人就这么说”的游戏环节，
                    社会人就这么说，社会人就这么说大家个个都卯足了 劲儿~…… -->
            </p>
            <a href="" class="alabel"> &lt;查看全文&gt; </a>
            <!-- <p class="riqi4">2018-4-23</p> -->
            <p class="riqi4">{{ daiban4_1List.data }}</p>
          </div>
          <li
            class="li-body li-body-4"
            v-for="(item, index) in daiban4List"
            :key="index"
            :class="{
              acBorder: checkBorder(index),
            }"
          >
            <span class="gonggao">{{ item.neirong }}</span>
            <span class="shijian4">{{ item.shijian }}</span>
          </li>
        </ul>
      </div>

      <div class="body-right-5">
        <ul style="padding: 0; margin: 0">
          <li class="li-head">
            <img :src="laba" class="laba" />
            <span class="front">新闻资讯</span>
            <span class="back">更多> ></span>
          </li>
          <div class="pic_demo">
            <img :src="demo" class="demo" />
            <img :src="demo" class="demo" />
            <img :src="demo" class="demo" />
          </div>

          <li
            class="wenzhang li-5"
            v-for="(item, index) in wenzhangList"
            :key="index"
            :class="{ bor_botm: isAct(index) }"
          >
            <p class="biaoti5"><img :src="dian2" /> {{ item.title }}</p>
            <p class="zhengwen">
              {{ item.neirong }}
              <a href="" class="alabel"> &lt;查看全文&gt; </a>
            </p>
            <p class="riqi4">{{ item.time }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      demo: require("@/assets/image/demo.jpg"),
      dian: require("@/assets/image/xyd1.png"),
      dian2: require("@/assets/image/dyd1.png"),
      
      gonggaoList: [],
      renmianshuList: this.getRenMianShu(),
      daibanList: this.getDaiBan(),
      daiban4List: this.getDaiBan4(),
      daiban4_1List: "",
      wenzhangList: this.getWenZhang(),
      laba: require("@/assets/image/icon9.png"),
      jiantou: require("@/assets/image/jt1.png"),
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
    checkRed(index) {
      if (index == 0 || index == 1 || index == 2) return true;
      else return false;
    },
    checkBorder(index) {
      if (index == 0) return true;
      else return false;
    },
    getRenMianShu() {
      return [
        {
          neirong: "任免书【豪雅2018】001号",
        },
        {
          neirong: "任免书【豪雅2018】002号",
        },
        {
          neirong: "任免书【豪雅2018】003号",
        },
        {
          neirong: "任免书【豪雅2018】004号",
        },
        {
          neirong: "任免书【豪雅2018】005号",
        },
        {
          neirong: "任免书【豪雅2018】006号",
        },
        {
          neirong: "任免书【豪雅2018】007号",
        },
        {
          neirong: "任免书【豪雅2018】008号",
        },
        {
          neirong: "任免书【豪雅2018】009号",
        },
        {
          neirong: "任免书【豪雅2018】010号",
        },
      ];
    },
    getDaiBan() {
      return [
        {
          neirong: "张小月请假单待您审批",
          shijian: "2018-05-20",
        },
        {
          neirong: "张小月请假单待您审批",
          shijian: "2018-05-20",
        },
        {
          neirong: "张小月请假单待您审批",
          shijian: "2018-05-20",
        },
        {
          neirong: "张小月请假单待您审批",
          shijian: "2018-05-20",
        },
        {
          neirong: "张小月请假单待您审批",
          shijian: "2018-05-20",
        },
        {
          neirong: "张小月请假单待您审批",
          shijian: "2018-05-20",
        },
        {
          neirong: "张小月请假单待您审批",
          shijian: "2018-05-20",
        },
      ];
    },
    getDaiBan4() {
      return [
        {
          neirong: "6张小月请假单待您审批",
          shijian: "2018-05-20",
        },
        {
          neirong: "5张小月请假单待您审批",
          shijian: "2018-05-20",
        },
        {
          neirong: "4张小月请假单待您审批",
          shijian: "2018-05-20",
        },
        {
          neirong: "3张小月请假单待您审批",
          shijian: "2018-05-20",
        },
        {
          neirong: "2张小月请假单待您审批",
          shijian: "2018-05-20",
        },
        {
          neirong: "1张小月请假单待您审批",
          shijian: "2018-05-20",
        },
        {
          neirong: "-1张小月请假单待您审批",
          shijian: "2018-05-20",
        },
      ];
    },
    getWenZhang() {
      return [
        {
          title: "6张小月请假带待您审批",
          neirong:
            "2月21日下午，宁波市口岸办张极星主任、陈利珍副主任、林维忠处长， 海曙商务局方卓毅局长、竹琰副局长一行来我司……",
          time: "2018-5-20",
        },
        {
          title: "6张小月请假带待您审批",
          neirong:
            "2月21日下午，宁波市口岸办张极星主任、陈利珍副主任、林维忠处长， 海曙商务局方卓毅局长、竹琰副局长一行来我司……",
          time: "2018-5-20",
        },
        {
          title: "6张小月请假带待您审批",
          neirong:
            "2月21日下午，宁波市口岸办张极星主任、陈利珍副主任、林维忠处长， 海曙商务局方卓毅局长、竹琰副局长一行来我司……",
          time: "2018-5-20",
        },
        {
          title: "6张小月请假带待您审批",
          neirong:
            "2月21日下午，宁波市口岸办张极星主任、陈利珍副主任、林维忠处长， 海曙商务局方卓毅局长、竹琰副局长一行来我司……",
          time: "2018-5-20",
        },
      ];
    },
    isAct(index) {
      if (index == 0) return true;
      else return false;
    },
  },
};
</script>

<style scoped>
.body-right-top,
.body-right-center {
  display: flex;
}

.body-right-1 {
  margin: 40px 0px auto 30px;
  background-color: white;
  width: 480px;
  height: 320px;
}

.laba {
  width: 20px;
  height: 20px;
  transform: translate(15px, 5px);
}
.front {
  margin-left: 15px;
}
.back {
  margin-left: 320px;
  color: #c0b4b4;
}
.back2 {
  margin-left: 70px;
  color: #c0b4b4;
}
.back3 {
  margin-left: 140px;
  color: #c0b4b4;
}
ul {
  list-style: none;
}
.li-head {
  background-color: #b81c22;
  height: 30px;
  font-size: 10px;
  color: white;
  line-height: 25px;
}
.li-body {
  height: 40px;
  border-top: #666666 1px solid;
  line-height: 40px;
}
.li-body-1::before {
  content: "";
  display: inline-block;
  width: 0;
  height: 0;
  border-bottom: 10px solid transparent;
  border-left: 10px solid gray;
  border-right: 10px solid transparent;
  border-top: 10px solid transparent;
  margin-left: 15px;
}

.jiantou {
  width: 10px;
  height: 10px;
  margin-left: 15px;
}
.daiban,
.gonggao {
  font-size: 5px;
}
.shijian {
  font-size: 10px;
  margin-left: 200px;
}
.daibansj {
  font-size: 10px;
  margin-left: 20px;
}
.active {
  color: red;
}
.active::before {
  border-left: 10px solid red;
}
.acBorder {
  border-top: none;
}
.body-right-2 {
  margin: 40px 0px auto 20px;
  background-color: white;
  width: 210px;
  height: 320px;
}
.li-body-2 {
  list-style: disc;
  border-top: none;
  margin: auto auto -12px 35px;
}
.body-right-3 {
  margin: 40px 20px auto 20px;
  background-color: white;
  width: 280px;
  height: 320px;
}
.li-body-3 {
  list-style: circle;
  border-top: none;
  margin-left: 40px;
}
.shijian4 {
  font-size: 10px;
  margin-left: 48%;
}
.body-right-4 {
  margin: 20px 0px auto 30px;
  background-color: white;
  width: 480px;
  height: 510px;
}
.li-body-4 {
  list-style: disc;
  border-top: 1px solid #4c4948;
  color: #4c4948;
  margin-left: 30px;
}
.demo {
  width: 172px;
  height: 150.99px;
  margin: 10px;
  float: left;
}

.biaoti4 {
  color: #b81c22;
  margin: 5px 0px 5px 0px;
}
.xiangqing {
  

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.wenzhang {
  color: #4c4948;
  font-size: 10px;
  font-family: "Microsoft YaHei";
  height: 170px;
  margin-left: 40%;
}
.riqi4 {
  color: #b81c22;
  font-size: 5px;
  margin-left: 75%;
}
.alabel {
  text-decoration: none;
  color: #b81c22;
}
.body-right-5 {
  margin: 20px 0px auto 20px;
  background-color: white;
  width: 510px;
  height: 510px;
}
.pic_demo {
  width: 172px;
  margin-top: 10px;
}
.pic_demo .demo {
  margin: 0px 20px 0px 20px;
}
.biaoti5 {
  color: #b81c22;
  margin: 10px;
}
.li-5 {
  border-top: 1px solid;
  height: 110px;
}
</style>