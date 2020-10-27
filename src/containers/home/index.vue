<template>
  <div>
    <div class="head">
      <div class="head-one">
        <img :src="logo" alt="" class="head-one-img" />
        <span>办公系统</span>
      </div>
      <div class="head-two">
        <img :src="fangzi" alt="" class="head-two-fangzi" @click="goHome"/>
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
            <div
              class="body-left-three-item"
              @click="goto(index)"
              :class="{ sel: content[index] }"
            >
              <img
                :src="content[index] ? item.url_red : item.url"
                class="body-left-three-item-img"
              />
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
          <router-view />

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
const axios = require("axios");
import grzx_dbsy from '../../components/grzx/grzx_dbsy'
export default {
  name: "test",
  components:{ grzx_dbsy },
  data() {
    return {
      logo: require("@/assets/image/logo.png"),
      fangzi: require("@/assets/image/fangzi.png"),
      set: require("@/assets/image/shezhi.png"),
      exit: require("@/assets/image/tuichu.png"),
      touxiang: require("@/assets/image/touxiang.jpg"),
      hz1: require("@/assets/image/hz-logo1.png"),
      hz2: require("@/assets/image/hz-logo2.png"),
      hz3: require("@/assets/image/hz-logo3.png"),
      hz4: require("@/assets/image/hz-logo4.png"),
      hz5: require("@/assets/image/hz-logo5.png"),
      erweima: require("@/assets/image/erweima.jpg"),
      departmentList: this.getDepartmentList(),
      tabList: this.getTabList(),
      yyyy: "",
      mo: "",
      dd: "",
      hh: "",
      mm: "",
      apm: "",
      weekDay: "",
      nowDate: "",
      content: [],
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
    getTabList() {
      return [
        {
          id: 1,
          url: require("@/assets/image/icon1.png"),
          url_red: require("@/assets/image/icon_1.png"),
          name: "个人中心",
        },
        {
          id: 2,
          url: require("@/assets/image/icon2.png"),
          url_red: require("@/assets/image/icon_2.png"),
          name: "集团制度",
        },
        {
          id: 3,
          url: require("@/assets/image/icon3.png"),
          url_red: require("@/assets/image/icon_3.png"),
          name: "集团公告",
        },
        {
          id: 4,
          url: require("@/assets/image/icon4.png"),
          url_red: require("@/assets/image/icon_4.png"),
          name: "集团任免",
        },
        {
          id: 5,
          url: require("@/assets/image/icon5.png"),
          url_red: require("@/assets/image/icon_5.png"),
          name: "通讯信息",
        },
        {
          id: 6,
          url: require("@/assets/image/icon6.png"),
          url_red: require("@/assets/image/icon_6.png"),
          name: "行政管理",
        },
        {
          id: 7,
          url: require("@/assets/image/icon7.png"),
          url_red: require("@/assets/image/icon_7.png"),
          name: "人力资源",
        },
        {
          id: 8,
          url: require("@/assets/image/icon8.png"),
          url_red: require("@/assets/image/icon_8.png"),
          name: "文化活动",
        },
      ];
    },
    goto(index) {
      if (index == 0) this.$router.push({ path: "/grzx" });
      if (index == 1) this.$router.push({ path: "/jtzd" });
      if (index == 2) this.$router.push({ path: "/jtgg" });
      if (index == 3) this.$router.push({ path: "/jtrm" });
      if (index == 4) this.$router.push({ path: "/txxx" });
      if (index == 5) this.$router.push({ path: "/xzgl" });
      if (index == 6) this.$router.push({ path: "/rlzy" });
      if (index == 7) this.$router.push({ path: "/whhd" });
      var content = JSON.parse(JSON.stringify(this.content));
      for(var i = 0; i < 8; i++){
        content[i] = false;
      }
      content[index] = true;
      this.content = content;
    },
    goHome(){
      this.$router.push({ path: "/zhuye" });
    }
  },
  mounted() {
    this.currentTime();
    for(var i = 0; i < 8; i++){
      this.content[i] = false;
    }
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
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
      cursor: pointer;
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
.sel{
  color: #b81c22;
}
ul{
  list-style: none;
}
.body-right {
  background-color: whitesmoke;
  width: 1100px;
  // height: 900px;
  margin: 0 auto auto 20px;
  border-radius: 10px;
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