<template>
  <div class="wrap">
        <div class="nav">
            <span class="shangjia" @click="cheng"></span>
              <span class="msite_title">确认订单</span>
          
            <router-link class="nav_t" to="/login">
            <span>登陆</span>|<span>注册</span>
            </router-link>
        </div>
         <div class="dizhi">
             <router-link :to="{name:'add'}">
                 <div >
                     <img style="  width:20px" src="./img/主页.png" alt="">
                     <span v-if="address==''"></span>
                     <span>{{raname}}</span>
                     <span>{{raphone}}</span>
                     <span v-if="address!=''">{{address}}</span>
                     <span class="rig">></span>
                 </div>
             </router-link>
         </div>
        <div class="time">
            <div class="t_l">
                <span>送达时间</span>
            </div>
            <div class="t_r">
                <p>尽快送达|预计20:46</p>
                <p class="bord" style="float:right">蜂鸟专送</p>
            </div>
        </div>
        <!-- 在线支付 -->
        <div class="app">
            <div class="app_top" @click="show=!show">
                <span class="top_1">支付方式</span>
                <span class="top_2">在线支付 ></span>
            </div>
            <div  class="app_bottom">
                <span class="top_3">红包</span>
                <span class="top_2">暂时只在饿了么App中支持</span>
            </div>
        </div>
 


<!-- 路由船只 -->
   <div class="name">
            <div class="name_top">
                <div class="name_top1">
                     <img style="  width:35px" :src="url" alt="">
                    <span>{{name}}</span>
                </div>
            </div>
            <div class="name_bottom">
                <div class="lists">
                    <ul class="namelist">
                        <li v-for="(lie,index) in liebiao" :key="index" class="name_list_li">
                            <span>{{lie}}</span>

                            <span class="pri">
                                x1  
                                <span id="kongge"></span>   
                                 $20
                            </span>
                        </li>
                    </ul>
                </div>
                <div>
                    <span>餐盒</span>
                    <span class="two">$2839849</span>
                </div>
                <div>
                    <span>配送费</span>
                    <span class="two">$4</span>
                </div>
                <div>
                    <span>订单</span>
                    <span class="two">$21</span>
                </div>
                <div>$12233</div>
            </div>
   </div>
        <!-- 订单口味 -->
        <div class="dingdan">
             <div class="dingdan1">
               <span class="dingdan_l">订单备注</span>
               <router-link :to="{name:'kouwei'}">
                   <span class="dingdan_r">口味，编好等></span>
               </router-link>
               
             </div>
             <!-- 发票 -->
               <div class="dingdan2">
                  <span class="dingdan_lb">发票抬头</span>
                   <router-link :to="{name:'invoice'}">
                       <span class="dingdan_r">不需要开发票></span>
                   </router-link>
             </div>
             <div style=" margin-top: .5rem;"></div>
        </div>


     <div class="zhifu" v-show="show">
          <div class="zhifu_1">
             <div class="zhifu_2">支付方式</div>
             <div class="zhifu_3">
                 <span>货到付款</span>
                 <span>(商家不支持货到付款)</span>
                <span>在线支付</span>
                   <span class="kaifa_img">
                      <img src="./img/dok.png" alt="">
                </span>
             </div>
                 <div class="zhifu_3" @click="show=!show">
                 <span>在线支付</span>
                   <span class="kaifa_img1">
                      <img src="./img/dok.png" alt="">
                </span>
             </div>
          </div>
     </div>

      <div class="coudan">
        <p class="coudan_shoping">
          <span class="coudan_shoping_l">待支付</span>
          <span class="coudan_shoping_l">{{allPrice}}</span>
         <router-link to="/goumaishi">
              <span class="coudan_shoping_right">确认支付</span>
         </router-link>
        </p>
      </div>
  </div>
</template>
<script>
import {mapState,mapGetters} from 'vuex'
    export default{
        name:'shoping',
        data(){
            return{
               show:false,
               name:this.$route.query.name,
               url:this.$route.query.src,
               foodname:this.$route.query.foodname,
               arr:this.$store.state.s12,
               arrs:[],
               liebiao:'',
               raname:'',
               raphone:''
            }
        },
       computed:{
          allPrice(){
              return this.$store.state.allPrice
          },
         address() {
              return this.$store.state.address;
           }
        },
        created() {
          this.liebiao = this.$store.state.meNu;
          this.arrs =  this.$store.state.addAddress;
          this.raname = localStorage.username;
          this.raphone = localStorage.phone;
          console.log(this.$store.state.addAddress)
          console.log('+++++++++++++',this.liebiao,"+++++++++++++")
        },
        methods:{
            cheng(){
                this.$router.back(-1);
            }
        }
    }
</script>
<style scoped>
.dingdan2{
       border: 1px dashed yellow;
}
.dingdan1{
        margin: .1rem 0;
       border: 1px dashed peru;
}
.name{
     border: 1px dashed green;
}
#kongge{
    padding: .6rem;
}
.name_list_li .pri{
    float: right;
}
.namelist .name_list_li{
    padding: .2rem 0 .209rem .05rem;
}
.lists{
    padding: 0;
   
}
.two{
    float: right;
}
.bord{
    background: blue;
    padding: .05rem;
    color: white;
    border-radius:.1rem; 
    margin-top: .1rem;
    font-size: .18rem;
}
.kaifa_img{
   float: right; 
   background: gainsboro;
   border-radius:50%; 
   padding: .03rem;
}
.kaifa_img1 {
  background: yellowgreen; 
  float: right;  
  border-radius:50%; 
  padding: .03rem;
}
.i{
    float: right;
}
.zhifu_3{
    color: gray;
}
.zhifu_2{
   background: #f1f1f1;
   text-align: center;
}
.zhifu_1 div{
    padding: .2rem ;
}
.zhifu_1{
    position: fixed;
    height: 2.5rem;
    bottom: 0;
    left: 0;
    right: 0;
    background:white;
    z-index: 235;
}
.zhifu{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .4);
    z-index: 234;

}
.dingdan div{
        padding: .2rem 0 .209rem .1rem;    
}
.name_bottom{
    padding: .3rem 0 .309rem .1rem; 
}
.name_bottom div{ 
    padding: .2rem 0 .209rem .1rem;    
} 
.name_top{
     padding: .3rem 0 0 .1rem;
}
.dingdan_r{
    float: right;
    color: gray;
    padding-right: .1rem;
}
.top_2{
    float: right;
    color: gray;
    padding-right: .1rem;
}
.app_bottom{
    padding: 0 0 .309rem 0;
}
.app_top{
    padding: .3rem 0 .309rem 0;
}
.app{
    margin: 0.1rem 0;
  border: 1px dashed orangered;
  padding-left:.17rem; 
}
.t_r{
    /* border: 1px solid blue; */
      float: right;
    padding: .3rem .2rem .309rem .45rem;
}
.t_l{
      /* border: 1px solid blue; */
      float: left;
      padding: .4rem .3rem .4rem .4rem;
}
.time{
    border: 1px dashed blue;
    overflow: hidden;
}
.rig{
    float:right;
}
.dizhi{
    margin-top:.59rem ;
    padding: .17rem 0 .3rem .17rem;
    border: 1px dashed goldenrod;
    margin-bottom:.1rem; 
   }
.shangjia{
    
    color: white;
    font-size: 0.35rem;
    position: absolute;
    bottom: 0.1rem;
   left: 0.3rem;
  }
.buttom_t{
  position:absolute;
  top: -.05rem;
  right: -.05rem;
  background: red;
  color: white;
  border-radius: 50%;
  padding: 0.06rem;
  font-size: .04rem;
}
.coudan_shoping_right{
  float: right;
  background: yellowgreen;
  color: white;
  padding: .2rem;
}
.coudan_shoping_l{
    line-height: .6rem;
}
.coudan_shoping{
  font-size: .25rem;
}
.coudan{
  /* border: 1px solid rebeccapurple; */
    left: 0;
    right: 0;
    bottom:0;
    z-index: 119;
    position:fixed;
    background: wheat
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
    color: white;
    font-size: .25rem;
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
</style>

