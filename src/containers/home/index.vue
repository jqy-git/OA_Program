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
      <div class="head-four" v-for="item in departmentList" :key="item">
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


    <div style="with:1200px;backgroundColor:rgb(234,238,240);">
        <div class="body">
        <div class="body-left">
            <div class="body-left-one">
                <div class="body-left-one-left">
                    <img :src="touxiang" alt="">
                </div>
                <div class="body-left-one-right" v-for="item in departmentList" :key="item">
                    <div class="body-left-one-right-up">{{item.name}}</div>
                    <div class="body-left-one-right-down">{{item.englishName}}</div>
                </div>
            </div>
            <div class="body-left-two" v-for="item in departmentList" :key="item">
                <div class="body-left-two-left">
                    <div>职务(Duties) :</div>
                    <div>{{item.duties}}</div>
                </div>
                <div class="body-left-two-right">
                    <div>部门(Department) :</div>
                    <div>{{item.department}}</div>
                </div>
            </div>
            <div class="body-left-three" v-for="(item,index) in tabList" :key="index">
                <div class="body-left-three-item">
                    <img :src="item.url" alt class="body-left-three-item-img" />
                    {{item.name}}
                </div>
            </div>
            <div class="body-left-four">
                <div class="body-left-four-item">
                    <div class="body-left-four-item-left">
                        <div class="body-left-four-item-left-left">{{dd}}</div> <!-- 日期 -->
                        <div class="body-left-four-item-left-right">
                            <div class="body-left-four-item-left-right-up">{{mo}}月</div>     <!-- 月 -->
                            <div class="body-left-four-item-left-right-down">{{weekDay}}</div>      <!-- 星期几 -->
                        </div>
                    </div>
                    <div class="body-left-four-item-right">
                        <div class="body-left-four-item-right-up">{{apm}}</div>
                        <div class="body-left-four-item-right-down">{{hh}}:{{mm}}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="body-right">
        <div class="body-right-1">
          <ul style="padding:0;margin:0;">
            <li class="li-head">
              <img :src="laba" class="laba" />
              <span class="front">豪雅公告</span>
              <span class="back">更多> ></span>
            </li>
            <li
              class="li-body li-body-1"
              v-for="(item, index) in gonggaoList"
              :key="index"
              :class="{ active: checkRed(index), acBorder: checkBorder(index) }"
            >
              <!-- <img :src="jiantou" class="jiantou" /> -->
              <span class="gonggao">{{ item.neirong }}</span>
              <span class="shijian">{{ item.shijian }}</span>
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
              :class="{ active: checkRed(index)}"
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
              :class="{ active: checkRed(index)}"
            >
              <span class="daiban">{{ item.neirong }}</span>
              <span class="daibansj">{{ item.shijian }}</span>
            </li>
          </ul>
        </div>
        <div class="body-right-4"></div>
        <div class="body-right-5"></div>
        <div class="body-right-bottom"></div>
      </div>
    </div>
  </div>
  <!-- 已修改 -->
    </div>
</template>

<script>
export default {
    name:'test',
    components:{},
    data(){
        return{
            logo:require('@/assets/image/logo.png'),
            fangzi:require('@/assets/image/fangzi.png'),
            set:require('@/assets/image/shezhi.png'),
            exit:require('@/assets/image/tuichu.png'),
            touxiang:require('@/assets/image/touxiang.jpg'),
            departmentList:this.getDepartmentList(),
            tabList:this.getTabList(),
            gonggaoList: this.getGongGao(),
            renmianshuList:this.getRenMianShu(),
            daibanList:this.getDaiBan(),
            laba: require("@/assets/image/icon9.png"),
            jiantou: require("@/assets/image/jt1.png"),
            yyyy:'',
            mo:'',
            dd:'',
            hh:'',
            mm:'',
            apm:'',
            weekDay:'',
            nowDate:'',
        }
    },
    methods:{
        currentTime() {
            setInterval(this.formatDate, 500);
        },
        formatDate() {
            let date = new Date();
            let year = date.getFullYear(); // 年
            let month = date.getMonth() + 1; // 月
            let day = date.getDate(); // 日 
            let week = date.getDay(); // 星期
            let weekArr = [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ];
            let hour = date.getHours(); // 时
            hour = hour < 10 ? "0" + hour : hour; // 如果只有一位，则前面补零
            let minute = date.getMinutes(); // 分
            minute = minute < 10 ? "0" + minute : minute; // 如果只有一位，则前面补零
            let second = date.getSeconds(); // 秒
            second = second < 10 ? "0" + second : second; // 如果只有一位，则前面补零
            let apm = date.getHours();
            apm = apm < 12 ? "am" : "pm"
            this.yyyy = year
            this.mo = month
            this.dd = day
            this.weekDay = weekArr[week]
            this.hh = hour
            this.mm = minute
            this.apm = apm
            this.nowDate = `${year}/${month}/${day} ${hour}:${minute}:${second} ${weekArr[week]}`;
        },
        getDepartmentList(){
            return[
                {
                    id:1,
                    name:'张丽娜',
                    englishName:'Zhang Lina',
                    duties:'平面设计',
                    department:'综合管理部'
                }
            ]
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
            getRenMianShu(){
            return[{
                neirong:"任免书【豪雅2018】001号"
            },
            {
                neirong:"任免书【豪雅2018】002号"
            },
            {
                neirong:"任免书【豪雅2018】003号"
            },
            {
                neirong:"任免书【豪雅2018】004号"
            },
            {
                neirong:"任免书【豪雅2018】005号"
            },
            {
                neirong:"任免书【豪雅2018】006号"
            },
            {
                neirong:"任免书【豪雅2018】007号"
            },
            {
                neirong:"任免书【豪雅2018】008号"
            },
            {
                neirong:"任免书【豪雅2018】009号"
            },
            {
                neirong:"任免书【豪雅2018】010号"
            }]
        },
            getDaiBan(){
                return[{
                    neirong:"张小月请假单待您审批",
                    shijian:"2018-05-20"
                },
                {
                    neirong:"张小月请假单待您审批",
                    shijian:"2018-05-20"
                },
                {
                    neirong:"张小月请假单待您审批",
                    shijian:"2018-05-20"
                },
                {
                    neirong:"张小月请假单待您审批",
                    shijian:"2018-05-20"
                },
                {
                    neirong:"张小月请假单待您审批",
                    shijian:"2018-05-20"
                },
                {
                    neirong:"张小月请假单待您审批",
                    shijian:"2018-05-20"
                },
                {
                    neirong:"张小月请假单待您审批",
                    shijian:"2018-05-20"
                }]
            },
            getTabList(){
                return[
                    {
                        id:1,
                        url:require('@/assets/image/icon1.png'),
                        name:'个人中心',
                    },
                    {
                        id:2,
                        url:require('@/assets/image/icon2.png'),
                        name:'集团制度',
                    },
                    {
                        id:3,
                        url:require('@/assets/image/icon3.png'),
                        name:'集团公告',
                    },
                    {
                        id:4,
                        url:require('@/assets/image/icon4.png'),
                        name:'集团任免',
                    },
                    {
                        id:5,
                        url:require('@/assets/image/icon5.png'),
                        name:'通讯信息',
                    },
                    {
                        id:6,
                        url:require('@/assets/image/icon6.png'),
                        name:'行政管理',
                    },
                    {
                        id:7,
                        url:require('@/assets/image/icon7.png'),
                        name:'人力资源',
                    },
                    {
                        id:8,
                        url:require('@/assets/image/icon8.png'),
                        name:'文化活动',
                    },
                ]
            }
    },
    mounted() {
        this.currentTime();
    },
}
</script>

<style lang="less">
*{
    margin: 0;
    padding: 0;
}
.head{
    // padding: 0 10% 0 10%;
    // background-color: skyblue;
    width: 1400px;
    height: 85px;
    margin: 0 auto 0 auto;
    display: flex;
    justify-content: space-between;
    &-one{
        font-size: 25px;
        margin: 20px 0 0 0;
        &-img{
            transform: translate(0,10px);
        }
    }
    &-two{
        margin: 20px 0 0 0;
        &-fangzi{
            transform: translate(0,10px);
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
.body{
    padding: 20px 0 20px 0;
    margin: 0 auto 0 auto;
    width: 1400px;
    display: flex;
    // background-color: skyblue;
    &-left{
        border-radius: 10px;
        background-color: white;
        width: 300px;
        &-one{
            display: flex;
            justify-content: center;
            padding: 20px 0 20px 0;
            &-right{
                margin:25px 0 0 15px;
                &-down{
                    color: gray;
                }
            }
        }
        &-two{
            display: flex;
            justify-content: space-between;
            text-align: center;
            line-height: 30px;
            font-size: 15px;
            &-left{
                border: 1px solid rgb(235, 230, 230);
                padding: 10px 0 10px 0;
                width: 49%;
                height: 60px;
            }
            &-right{
                border: 1px solid rgb(235, 230, 230);
                width: 49%;
                padding: 10px 0 10px 0;
                height: 60px;
            }
        }
        &-three{
            &-item{
                text-align: center;
                padding: 20px 0 20px 0;
                &-img{
                    transform: translate(0,4px);
                }
            }
        }
        &-four{
            padding: 0 0 20px 0;
            &-item{
                width: 200px;
                margin: 10px auto 0px auto;
                display: flex;
                border: 1px solid gray;
                border-radius: 10px;
                // padding: 10px 0 10px 0 ;
                &-left{
                    text-align: right;
                    border-top-left-radius: 9px;
                    border-bottom-left-radius: 9px;
                    background-color: #b81c22;
                    padding: 10px 0 10px 0 ;
                    color: white;
                    width: 100px;
                    display: flex;
                    &-left{
                        font-size: 30px;
                        font-weight: 600;
                        margin: 0 0 0 10px;
                    }
                    &-right{
                    width: 100px;
                    margin: 0 10px 0 0;
                        &-up{
                            font-size: 15px;
                        }
                        &-down{
                            font-size: 10px;
                        }
                    }
                }
                &-right{
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
  height: 500px;
  margin: 0 auto auto 20px;
  border-radius: 10px;
  display: flex;
}
.body-right-1 {
  margin: 40px auto auto 20px;
  background-color: white;
  width: 420px;
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
  margin-left: 250px;
  color: #c0b4b4;
}
.back2{
margin-left: 70px;
color: #c0b4b4;
}
.back3{
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
  height: 50px;
  border-top: #666666 1px solid;
  line-height: 50px;
}
.li-body-1::before{
    content: '';
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
  margin-left: 50px;
}
.daibansj{
    font-size: 10px;
  margin-left: 30px;
}
.active {
  color: red;
}
.active::before{
    border-left:10px solid red;
}
.acBorder {
  border-top: none;
}
.body-right-2 {
  margin: 40px auto auto 20px;
  background-color: white;
  width: 220px;
}
.li-body-2{
  list-style: disc;
  border-top: none;
  margin:auto auto -15px 45px;
}
.body-right-3 {
  margin: 40px 20px auto 20px;
  background-color: white;
  width: 300px;
}
.li-body-3{
  list-style: circle;
  border-top: none;
  margin-left: 40px;
}
</style>