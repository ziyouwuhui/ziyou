<template>
<div class="wrap">
  <div class="nav">
    <router-link to="/sousuo" class="link_search">
      <i class="el-icon-search"></i>
    </router-link>
    <router-link to="/home" class="msite_title">
      <span>{{this.$route.query.address}}</span>
    </router-link>
    <router-link class="nav_t" to="/login">
      <span>登陆</span>|<span>注册</span>
    </router-link>
  </div>
     <div class="top">
       <el-carousel :interval="5000" type="" height="2.3rem">
         <el-carousel-item v-for="(ite,index) in 1" :key="index">
           <ol>
               <router-link :to="{path:'/Spinner',query:{ite:ite.title,id:ite.id}}" tag="li" class="li1"  v-for="(ite,index) in swiperData1" :key="index" >
               <img :src="'https://fuss10.elemecdn.com'+ite.image_url" alt="" >
               <p>{{ite.title}}</p>
               </router-link>
           </ol>
         </el-carousel-item>
         <el-carousel-item v-for="(ite,index) in 1" :key="index+1">
           <ol>
               <router-link :to="{path:'/Spinner',query:{ite:ite.title,id:ite.id}}" tag="li" class="li1"  v-for="(ite,index) in swiperData2" :key="index" >
               <img :src="'https://fuss10.elemecdn.com'+ite.image_url" alt="" >
               <p>{{ite.title}}</p>
               </router-link>
           </ol>
         </el-carousel-item>
       </el-carousel>
    </div>
    
    <!-- <div class="connt">
        <div class="seller">
            <span class="seller_f"><img src="./img/主页.png" alt=""></span>
            <span class="seller_a">附近商家</span>
        </div>
        <div class="guaranteed">
            <ul>
                <router-link tag="li" :to="'/result/resulr_li/'+i.id" class="li_g" v-for="(i,index) in data" :key="index">
                    <div class="infor_l"><img :src="'//elm.cangdu.org/img/'+i.image_path" alt=""></div>
                        <div class="infor_r">
                            <div class="infor_r_pinpai">
                                <span class="infor_r_p">{{i.icon_color}} 品牌</span>
                                <span class="infor_r_x">{{i.name}}</span>
                                <div class="infor_r_b"><span v-for="(child,cindex) in i.supports" :key="child.id">{{child.icon_name}}</span></div>
                            </div>
                            <div v-for="(child,cindex) in i.supports" :key="child.id">
                                <span v-if="child.id == 9">
                         <el-rate
                           v-model="i.rating"
                           disabled
                           show-score
                           text-color="#ff9900"
                           score-template="{value}">
                         </el-rate>
                       </span>
                                <div class="r">
                                    <span class="infor_r_S" v-if="child.id == 9">{{child.name}}</span>
                                </div>
                            </div>
                            <div class="infor_r_peisong">
                                <span class="infor_r_s">￥{{i.float_minimum_order_amount}}起送 / {{i.piecewise_agent_fee.tips}}</span>
                                <span class="infor_r_h">/{{i.order_lead_time}}</span>
                                <span class="infor_r_l">{{i.distance}}</span>
                            </div>
                        </div>
                </router-link>
            </ul>
        </div>
    </div> -->
    <Buttom></Buttom>
     <Lbiao></Lbiao>
     <Buttom></Buttom>
</div>
</template>

<script>
  import Lbiao from './leibiao'
  import Buttom from "./buttom"
  import Vuex from 'vuex'
    export default {
        name: "msite",
        components:{
           Buttom,Lbiao
        },
        data(){
          return{
            value5:'',
            // data:[],
            data: [],
            swiperData: [],
            swiperData1:[],
            swiperData2:[],
            swiperOption: {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }
            },
            text2: '',
            latitude: "",
            longitude: "",
            geohash: this.$route.query.geohash,
            address: ""
        }
    },
    methods: {
        read(i) {
            console.log(i);
        }
    },
    created() {
        /*获取路径中的经纬度*/
        console.log(this.$route.query.geohash);
        let str = this.$route.query.geohash;
        let arr = str.split(",");
        this.latitude = arr[1];
        this.longitude = arr[0];
        // console.log(this.latitude, this.longitude);

        // let api = "https://elm.cangdu.org/shopping/restaurants?latitude="+this.latitude+"&longitude="+this.longitude;
        // this.$http.get(api).then((data)=>{
        //   this.data = data.data;
        //   this.value5 = data.rating;
        //   })
        
        let api = "https://elm.cangdu.org/shopping/restaurants?latitude=" + this.latitude + "&longitude=" + this.longitude;
        this.$http.get(api).then((data) => {
            this.data = data.data;
            this.value5 = data.rating;
            // console.log(this.data,'xxxxx');
        })

        let api_1 = "https://elm.cangdu.org/v2/index_entry";
        this.$http.get(api_1).then((data) => {
            this.swiperData = data.data;
            this.swiperData1 = this.swiperData.slice(0,8);
            this.swiperData2 = this.swiperData.slice(-8);
         })
    }
}
</script>

<style scoped>

 .seller .seller_f img{
    width: .25rem;
    height: .25rem;
  }

.r .infor_r_B {
    background: #3190e8;
    color: white;
    font-size: .05rem;
    padding: 0.01rem;
    border-radius: .028rem;
    border: .015rem solid #3190e8;
}

.r .infor_r_S {
    color: #3190e8;
    font-size: .05rem;
    padding: 0.01rem;
    border: .015rem solid #3190e8;
}

.el-icon-arrow-right {
    background: red;
}

.nav {
    background: blue;
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    top: 0;
    height: 0.566rem;
    width: 100%;
    box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, .1);
}

.nav .msite_title {
    position: absolute;
    top: .2rem;
    left: 25%;
    width: 50%;
    color: #fff;
    text-align: center;
    margin-left: -.15rem;
}

.nav .msite_title span {
    color: white;
    font-size: .22rem;
    text-align: center;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.nav .link_search {
    position: absolute;
    top: .1rem;
    left: .1rem;
}

.nav .el-icon-search {
    font-size: .35rem;
    color: white;
  }
.nav .nav_t{
  font-size: .22rem;
  color: white;
  position: absolute;
  top: .2rem;
  right: .1rem;
}
 
.nav .nav_t {
    font-size: .22rem;
    color: white;
    position: absolute;
    top: .2rem;
    right: .1rem;
}

.infor_r_h {
    float: right;
    color: #3190e8;
}

.infor_r_peisong .infor_r_l {
    float: right;
    margin-left: 0.3rem;
    color: #999;
}

.infor_r_peisong .infor_r_s {
    transform: scale(.2);
    font-size: .1rem;
    color: #666;
}

.infor_r_pinpai .infor_r_b {
    float: right;
    color: #999;
}

.infor_r_pinpai .infor_r_x {
    color: #333;
    padding-top: .01rem;
    font: .15rem PingFangSC-Regular;
    font-weight: 700;
    padding-right: 1rem;
}

.infor_r_pinpai .infor_r_p {
    content: "\54C1\724C";
    display: inline-block;
    font-size: .06rem;
    line-height: .16rem;
    color: #333;
    background-color: #ffd930;
    padding: 0 .1rem;
    border-radius: .02rem;
    margin-right: .1rem;
}

.li_g {
    display: flex;
    border-bottom: .025rem solid #f1f1f1;
    padding: .2rem .1rem;
}

.guaranteed .infor_l img {
    width: 0.78rem;
    float: left;
    /*border: 1px solid red;*/
}

.guaranteed .infor_r {
    font-size: .1rem;
    float: right;
    margin-left: .1rem;
    width: 4rem;
}

.guaranteed .infor_r>div {
    margin-bottom: .15rem;
}

.guaranteed {
    background-color: #fff;
}

.connt .seller {
    padding-top: .2rem;
    padding-left: .15rem;
    /*margin-bottom: 0.35rem;*/
}

.seller .seller_a {
    color: #999;
    font-size: .18rem;
    font-family: Microsoft YaHei;
    ;
}

.seller .seller_f img {
    width: .25rem;
    height: .25rem;
}

.wrap .connt {
    margin-top: .12rem;
    border-top: .012rem solid #e4e4e4;
    background-color: #fff;
}

.swiper-button-next {
    background: blue;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    top: 2.4rem;
    right: 176px;
}

.swiper-button-prev {
    background: blue;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    top: 2.4rem;
    left: 166px;
}

em,
.li1 {
    text-align: center;
    float: left;
    font-size: .16rem;
    color: #666;
    margin: .12rem .2rem;
    padding-left: 0.1rem;
}

.top li img {
    margin-bottom: .22rem;
    width: 0.5rem;
    height: 0.5rem;
}

.wrap>.top {
    margin-top: .7rem;
    padding-bottom: 0.23rem;
    border-bottom: 1px solid gainsboro;
    font-family: Microsoft Yahei;
    position: relative;
    background: white;
}

.wrap {
    width: 100%;
    background: ghostwhite;
}

.transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
}

.el-row {
    margin-bottom: 20px;
}

.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.el-carousel__indicators {
    height: 200px;
    background: red;
}

.infor_r div .r {
    float: right;
}

.el-rate {
    display: inline-block;
    height: 10px !important;
    font-size: 14px !important;
    margin-right: 2px !important;
}

.el-rate .el-rate__icon {
    font-size: 14px !important;
    margin-right: 2px !important;
}
.el-rate__item {
    font-size: .01rem;
}
.connt{
margin-top: -5rem
}
</style>

