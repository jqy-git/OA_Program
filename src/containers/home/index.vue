<template>
  <div>
    <div class="head">
      <div class="head-one">
        <img :src="logo" alt="" class="head-one-img" />
        <span>办公系统</span>
      </div>
      <div class="head-two">
        <img :src="fangzi" alt="" class="head-two-fangzi" />
        <input type="text" placeholder="请输入你要搜索的内容..." />
        <button>搜索</button>
      </div>
      <div class="head-three"></div>
      <div
        class="head-four"
        v-for="(item, index) in departmentList"
        :key="index"
      >
        <div class="head-four-welcome">
          欢迎您，（{{ item.department }}）{{ item.name }}
        </div>
        <div>
          <img :src="set" alt="" />
        </div>
        <div>
          <img :src="exit" alt="" />
        </div>
      </div>
    </div>

    <div style="backgroundColor: rgb(234, 238, 240)">
      <div class="body">
        <div
          class="body-left"
          v-for="(item, index) in departmentList"
          :key="index"
        >
          <div class="body-left-one">
            <div class="body-left-one-left">
              <img :src="touxiang" alt="" />
            </div>
            <div class="body-left-one-right">
              <div class="body-left-one-right-up">{{ item.name }}</div>
              <div class="body-left-one-right-down">{{ item.englishName }}</div>
            </div>
          </div>
          <div class="body-left-two">
            <div class="body-left-two-left">
              <div>职务(Duties) :</div>
              <div>{{ item.duties }}</div>
            </div>
            <div class="body-left-two-right">
              <div>部门(Department) :</div>
              <div>{{ item.department }}</div>
            </div>
          </div>
          <div
            class="body-left-three"
            v-for="(item, index) in tabList"
            :key="index"
          >
            <div class="body-left-three-item" @click="select(index)">
              <img :src="item.url" alt class="body-left-three-item-img" />
              {{ item.name }}
            </div>
          </div>
          <div class="body-left-four">
            <div class="body-left-four-item">
              <div class="body-left-four-item-left">
                <div class="body-left-four-item-left-left">{{ dd }}</div>
                <!-- 日期 -->
                <div class="body-left-four-item-left-right">
                  <div class="body-left-four-item-left-right-up">
                    {{ mo }}月
                  </div>
                  <!-- 月 -->
                  <div class="body-left-four-item-left-right-down">
                    {{ weekDay }}
                  </div>
                  <!-- 星期几 -->
                </div>
              </div>
              <div class="body-left-four-item-right">
                <div class="body-left-four-item-right-up">{{ apm }}</div>
                <div class="body-left-four-item-right-down">
                  {{ hh }}:{{ mm }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="body-right">
          <div class="body-right-top">
            <div class="body-right-1" :class="{ show: conZhuYe }">
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

            <div class="body-right-2" :class="{ show: conZhuYe }">
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

            <div class="body-right-3" :class="{ show: conZhuYe }">
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
            <div class="body-right-4" :class="{ show: conZhuYe }">
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

            <div class="body-right-5" :class="{ show: conZhuYe }">
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

          <grzx :class="{ show: content[0] }"></grzx>
          <jtzd :class="{ show: content[1] }"></jtzd>
          <jtgg :class="{ show: content[2] }"></jtgg>
          <jtrm :class="{ show: content[3] }"></jtrm>
          <txxx :class="{ show: content[4] }"></txxx>
          <xzgl :class="{ show: content[5] }"></xzgl>
          <rlzy :class="{ show: content[6] }"></rlzy>
          <whhd :class="{ show: content[7] }"></whhd>

          <div class="body-right-bottom">
            <div class="bot_Pic">
              <img :src="hz1" class="hzPic" />
              <img :src="hz2" class="hzPic" />
              <img :src="hz3" class="hzPic" />
              <img :src="hz4" class="hzPic" />
              <img :src="hz5" class="hzPic" />
              <img :src="erweima" class="ewmPic" />
            </div>
            <div class="bot_Zi">
              Copyright © 2018 Ningbo Hooya International Ltd. All rights
              reserved. 备案/许可证编号为:浙ICP备12003154 - 当前共[71]人在线 -
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import func from '../../../vue-temp/vue-editor-bridge';
import grzx from "../../components/grzx";
import jtzd from "../../components/jtzd";
import jtgg from "../../components/jtgg";
import jtrm from "../../components/jtrm";
import txxx from "../../components/txxx";
import xzgl from "../../components/xzgl";
import rlzy from "../../components/rlzy";
import whhd from "../../components/whhd";
const axios = require("axios");
export default {
  name: "test",
  components: { grzx, jtzd, jtgg, jtrm, txxx, xzgl, rlzy, whhd },
  data() {
    return {
      logo: require("@/assets/image/logo.png"),
      fangzi: require("@/assets/image/fangzi.png"),
      set: require("@/assets/image/shezhi.png"),
      exit: require("@/assets/image/tuichu.png"),
      touxiang: require("@/assets/image/touxiang.jpg"),
      demo: require("@/assets/image/demo.jpg"),
      dian: require("@/assets/image/xyd1.png"),
      dian2: require("@/assets/image/dyd1.png"),
      hz1: require("@/assets/image/hz-logo1.png"),
      hz2: require("@/assets/image/hz-logo2.png"),
      hz3: require("@/assets/image/hz-logo3.png"),
      hz4: require("@/assets/image/hz-logo4.png"),
      hz5: require("@/assets/image/hz-logo5.png"),
      erweima: require("@/assets/image/erweima.jpg"),
      departmentList: this.getDepartmentList(),
      tabList: this.getTabList(),
      gonggaoList: [],
      renmianshuList: this.getRenMianShu(),
      daibanList: this.getDaiBan(),
      daiban4List: this.getDaiBan4(),
      daiban4_1List: "",
      wenzhangList: this.getWenZhang(),
      laba: require("@/assets/image/icon9.png"),
      jiantou: require("@/assets/image/jt1.png"),
      yyyy: "",
      mo: "",
      dd: "",
      hh: "",
      mm: "",
      apm: "",
      weekDay: "",
      nowDate: "",
      content:[],
      conZhuYe:false,
      currentIndex: "",
    };
  },
  methods: {
    currentTime() {
      setInterval(this.formatDate, 500);
    },
    formatDate() {
      let date = new Date();
      let year = date.getFullYear(); // 年
      let month = date.getMonth() + 1; // 月
      let day = date.getDate(); // 日
      let week = date.getDay(); // 星期
      let weekArr = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      let hour = date.getHours(); // 时
      hour = hour < 10 ? "0" + hour : hour; // 如果只有一位，则前面补零
      let minute = date.getMinutes(); // 分
      minute = minute < 10 ? "0" + minute : minute; // 如果只有一位，则前面补零
      let second = date.getSeconds(); // 秒
      second = second < 10 ? "0" + second : second; // 如果只有一位，则前面补零
      let apm = date.getHours();
      apm = apm < 12 ? "am" : "pm";
      this.yyyy = year;
      this.mo = month;
      this.dd = day;
      this.weekDay = weekArr[week];
      this.hh = hour;
      this.mm = minute;
      this.apm = apm;
      this.nowDate = `${year}/${month}/${day} ${hour}:${minute}:${second} ${weekArr[week]}`;
    },
    getDepartmentList() {
      return [
        {
          id: 1,
          name: "张丽娜",
          englishName: "Zhang Lina",
          duties: "平面设计",
          department: "综合管理部",
        },
      ];
    },
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
    getTabList() {
      return [
        {
          id: 1,
          url: require("@/assets/image/icon1.png"),
          name: "个人中心",
        },
        {
          id: 2,
          url: require("@/assets/image/icon2.png"),
          name: "集团制度",
        },
        {
          id: 3,
          url: require("@/assets/image/icon3.png"),
          name: "集团公告",
        },
        {
          id: 4,
          url: require("@/assets/image/icon4.png"),
          name: "集团任免",
        },
        {
          id: 5,
          url: require("@/assets/image/icon5.png"),
          name: "通讯信息",
        },
        {
          id: 6,
          url: require("@/assets/image/icon6.png"),
          name: "行政管理",
        },
        {
          id: 7,
          url: require("@/assets/image/icon7.png"),
          name: "人力资源",
        },
        {
          id: 8,
          url: require("@/assets/image/icon8.png"),
          name: "文化活动",
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
    select(index) {
      this.conZhuYe = true;
      for(var i=0; i<this.tabList.length; i++){
        this.content[i] = true;
      };
      this.content[index] = false;
      console.log(this.content);
    },
  },
  mounted() {
    this.currentTime();
    for(var i=0; i<this.tabList.length; i++){
      this.content[i] = true;
    };
    // var that = this;
    // axios.get("http://192.168.3.51:8701/getNewsList").then(function (response) {
    //   that.gonggaoList = response.data.data;
    //   // console.log(response.data);
    // });

    // axios
    //   .get("http://192.168.3.51:8701/getNewsDetail?id=0")
    //   .then(function (response) {
    //     that.daiban4_1List = response.data.data;
    //     // console.log(that.daiban4_1List);
    //   });
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
.show {
  display: none;
}
.head {
  width: 1400px;
  height: 85px;
  margin: 0 auto 0 auto;
  display: flex;
  justify-content: space-between;
  &-one {
    font-size: 25px;
    margin: 20px 0 0 0;
    &-img {
      transform: translate(0, 10px);
    }
  }
  &-two {
    margin: 20px 0 0 0;
    &-fangzi {
      transform: translate(0, 10px);
    }
  }

  &-three {
    width: 17%;
  }
  &-four {
    display: flex;
    &-welcome {
      margin: 30px 0 0 0;
    }
  }
}
.body {
  padding: 20px 0 20px 0;
  margin: 0 auto 0 auto;
  width: 1400px;
  display: flex;
  &-left {
    border-radius: 10px;
    background-color: white;
    width: 300px;
    &-one {
      display: flex;
      justify-content: center;
      padding: 20px 0 20px 0;
      &-right {
        margin: 25px 0 0 15px;
        &-down {
          color: gray;
        }
      }
    }
    &-two {
      display: flex;
      justify-content: space-between;
      text-align: center;
      line-height: 30px;
      font-size: 15px;
      &-left {
        border: 1px solid rgb(235, 230, 230);
        padding: 10px 0 10px 0;
        width: 49%;
        height: 60px;
      }
      &-right {
        border: 1px solid rgb(235, 230, 230);
        width: 49%;
        padding: 10px 0 10px 0;
        height: 60px;
      }
    }
    &-three {
      &-item {
        text-align: center;
        padding: 20px 0 20px 0;
        cursor: pointer;
        &-img {
          transform: translate(0, 4px);
        }
      }
    }
    &-four {
      padding: 0 0 20px 0;
      &-item {
        width: 200px;
        margin: 10px auto 0px auto;
        display: flex;
        border: 1px solid gray;
        border-radius: 10px;
        // padding: 10px 0 10px 0 ;
        &-left {
          text-align: right;
          border-top-left-radius: 9px;
          border-bottom-left-radius: 9px;
          background-color: #b81c22;
          padding: 10px 0 10px 0;
          color: white;
          width: 100px;
          display: flex;
          &-left {
            font-size: 30px;
            font-weight: 600;
            margin: 0 0 0 10px;
          }
          &-right {
            width: 100px;
            margin: 0 10px 0 0;
            &-up {
              font-size: 15px;
            }
            &-down {
              font-size: 10px;
            }
          }
        }
        &-right {
          margin: 4px 0 0 40px;
          text-align: right;
          color: #b81c22;
          font-size: 18px;
          font-weight: 800;
        }
      }
    }
  }
}

.body-right {
  background-color: whitesmoke;
  width: 1100px;
  // height: 900px;
  margin: 0 auto auto 20px;
  border-radius: 10px;
}
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
  // white-space: nowrap;
  // text-overflow: ellipsis;

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
.bor_botm {
  border: none;
}
.body-right-bottom {
  background-color: #aaaaaa;
  height: 120px;
  width: 1085px;
  margin-top: 20px;
  border-radius: 0 0 10px 10px;
}
.hzPic {
  width: 122px;
  height: 32px;
  border-right: 2px white solid;
}
.ewmPic {
  width: 50px;
  height: 50px;
  transform: translate(50px, 5px);
}
.bot_Pic {
  text-align: center;
  padding-top: 10px;
}
.bot_Zi {
  text-align: center;
  font-size: 5px;
  margin-top: 15px;
  color: white;
}
</style>