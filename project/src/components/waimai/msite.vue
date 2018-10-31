<template>
<div class="wrap">
  <div class="nav">
    <router-link to="/sousuo" class="link_search">
      <i class="el-icon-search"></i>
    </router-link>
    <router-link to="/home" class="msite_title">
      <span>xzxz</span>
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
            swiperData: [],
            swiperData1:[],
            swiperData2:[],
            swiperOption: {
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
            },
            text2:'',
            latitude:"",
            longitude:"",
            geohash:this.$route.query.geohash,
            address:""
          }
        },
      methods:{
        read(i){
          console.log(i);
        }
      },
      created(){
        /*获取路径中的经纬度*/ 
        console.log(this.$route.query.geohash);
        let str = this.$route.query.geohash;
        let arr = str.split(",");
        this.latitude = arr[1];
        this.longitude = arr[0];
        console.log(this.latitude,this.longitude);

        // let api = "https://elm.cangdu.org/shopping/restaurants?latitude="+this.latitude+"&longitude="+this.longitude;
        // this.$http.get(api).then((data)=>{
        //   this.data = data.data;
        //   this.value5 = data.rating;
        //   })
        

        let api_1 = "https://elm.cangdu.org/v2/index_entry";
         this.$http.get(api_1).then((data)=>{
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
  .r .infor_r_B{
    background: #3190e8;
    color: white;
    font-size: .05rem;
    padding: 0.01rem;
    border-radius:.028rem;
    border: .015rem solid #3190e8;
  }
  .r .infor_r_S{
    color: #3190e8;
    font-size: .05rem;
    padding: 0.01rem;
    border: .015rem solid #3190e8;
  }
  .el-icon-arrow-right{
    background: red;
  }
  .nav{
    background: blue;
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    top: 0;
    height: 0.566rem;
    width:100%;
    box-shadow: 0 -0.02667rem 0.05333rem rgba(0,0,0,.1);
  }
  .nav .msite_title{
    position: absolute;
    top: .2rem;
    left: 35%;
    text-align: center;
  }
  .nav .msite_title span{
    color: white;
    font-size: .22rem;
    text-overflow:ellipsis;
  }
  .nav .link_search{
    position: absolute;
    top: .1rem;
    left: .1rem;
  }
  .nav .el-icon-search{
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
 
  .swiper-button-prev{
    background: blue;
    width: 8px;
    height: 8px;
    border-radius:50%;
    top: 2.4rem;
    left: 166px;
  }
  em,.li1{
    text-align: center;
    float: left;
    font-size: .16rem;
    color: #666;
    margin: .12rem .18rem;
    padding-left: 0.15rem;
  }
 .top li img{
    margin-bottom: .22rem;
    width: 0.5rem;
    height: 0.5rem;
  }
  .wrap>.top{
    margin-top: .7rem;
    padding-bottom: 0.23rem;
    border-bottom: 1px solid gainsboro;
    font-family: Microsoft Yahei;
    position: relative;
    background: white;
  }
 .wrap{
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
  .el-carousel__indicators{
    height: 200px;
    background: red;
  }
  .infor_r div .r{
    float: right;
  }
  .el-rate{
    display: inline-block;
    height: 10px !important;
    font-size: 14px !important;
    margin-right: 2px !important;
  }
  .el-rate .el-rate__icon{
    font-size: 14px !important;
    margin-right: 2px !important;
  }
</style>
<style>
  .el-rate__item{
    font-size: .01rem;
  }
</style>
<style>
.connt{
margin-top: -5rem
}
</style>

