<template>
  <div>
    <div class="head">
        <div class="head-one">
            <img :src="logo" alt="" class="head-one-img">
            <span>办公系统</span>
        </div>
        <div class="head-two">
            <img :src="fangzi" alt="" class="head-two-fangzi">
            <input type="text" placeholder="请输入你要搜索的内容...">
            <button>搜索</button>
        </div>
        <div class="head-three">

        </div>
        <div class="head-four" v-for="item in departmentList" :key="item">
            <div class="head-four-welcome">欢迎您，（{{item.department}}）{{item.name}}</div>
            <div>
                <img :src="set" alt="">
            </div>
            <div>
                <img :src="exit" alt="">
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
        <div class="body-right"></div>
    </div>
  </div>
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
.head{
    // padding: 0 10% 0 10%;
    // background-color: skyblue;
    width: 1200px;
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
    &-three{
        width: 17%;
    }
    &-four{
        display: flex;
        &-welcome{
        margin: 30px 0 0 0;
        }
    }
}
.body{
    padding: 20px 0 20px 0;
    margin: 0 auto 0 auto;
    width: 1200px;
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

</style>