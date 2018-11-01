<template>
 <div class="warp">
      <ul class="top">
        <span  @click="change" class="top_qiantou">&lt;</span>
        <router-link to="/business" class="shangjia">></router-link>
           <li class="top_left" v-if="meNu.piecewise_agent_fee">
             <!--//elm.cangdu.org/img/166584c036319076.jpg-->
               <img :src="'//elm.cangdu.org/img/'+meNu.image_path" alt="">
               <div class="top_right">
                 <h4>{{meNu.name}}</h4>
                 <div class="top_right_s">
                   <span>商家配送 / 分钟送达 / {{meNu.piecewise_agent_fee.tips}}</span>
                 </div>
                  <p class="top_right_p">公告 : {{meNu.promotion_info}}</p>
               </div>
             <div @click="show = !show">
                <div class="dic">
                    <span  class="middle_span":style="'background:#'+ me[0].icon_color" >{{me[0].icon_name}}</span>
                    <span class="middle_three">{{me[0].description}}</span>
                </div>
             </div>
           </li>
      </ul>
      <section class="conter">
        <div class="conter_left">
          <router-link class="conter_left_show" :to="'/result/resulr_li/'+id" tag="span">商品</router-link>
        </div>
        <div class="conter_right">
          <router-link class="conter_right_ping" :to="'/result/resulr_evaluate/'+id" tag="span" >评价</router-link>
        </div>
      </section>
      <!--<divli></divli>-->
      <div class="buttom">
          <section class="buttom_img"><img src="./img/购物车.png" alt=""></section>
          <section class="buttom_two">
            <div class="buttom_two_money">¥ 0.00</div>
            <div class="buttom_two_bigm">配送费¥5</div>
          </section>
          <section class="buttom_go">
             <router-link :to="{name:'shoping',path:'/shoping',query:{src:'//elm.cangdu.org/img/'+meNu.image_path,name:meNu.name}}">
               <span style="margin: auto">还差20元</span>
            </router-link>
          </section>
      </div>


      <!-- 购物车弹 -->
      <div class="tankuang">
          <div class="tankuang_1">
             <span>购物车</span>
             <span class="el-icon-delete right">
               清空
             </span>
          </div>
          <div v-for="(nam,index) in names" :key="index">
            <!-- <span>{{nam.name}}</span> -->
            <span>{{names}}</span>
          </div>
      </div>
   <router-view></router-view>
   <transition name="el-fade-in-linear">
       <div v-show="!show">
         <div class="none_ul">
             <p class="none_ul_p1">{{meNu.name}}</p>
             <p class="none_ul_p2">优惠信息</p>
             <div class="none_ul_p3">
               <div v-for="(a,index) in me" :key="index" class="dic">
                 <span class="middle_span":style="'background:#'+a.icon_color" >{{a.icon_name}}</span>
                 <span class="middle_three">{{a.description}}</span>
               </div>
             </div>
             <p class="none_ul_p2">商家公告</p>
             <p class="none_ul_p3">{{meNu.promotion_info}}</p>
             <div class="cha" @click="show = !show">X</div>
         </div>
     </div>
   </transition>
 </div>
</template>

<script>
import {mapMutations} from 'vuex'
    export default {
        name: "result",
        data(){
          return{
            meNu:{},
            me:{},
            id:this.$route.params.id,
            show:true,
            names:this.$store.state.meNu
          }
      },
      computed:{
          
      },
      methods:{
        change(){
          this.$router.go(-1);
        }
      },
      created(){
      
      var a2 = this.$store.state.cc;

        let api_r = "https://elm.cangdu.org/shopping/restaurant/"+this.$route.params.id;
        
        this.$http.get(api_r).then((data)=>{
            this.meNu = data.data;
            // console.log(this.meNu,"=========");
            this.me = data.data.supports;
            // console.log(this.me,"!!!!!!!!!!!!!!!!!!!!!!!")
        });
      },  
      methods:{
          change(){
            this.$router.go(-1);
          }
      }
    }
</script>

<style scoped>

.right{
  float: right;
}
.tankuang_1{
  border: 1px solid red;
  padding: .17rem;
}
.tankuang{
  position:fixed;
  right: 0;
  left: 0;
  bottom: .7rem;
  height: 2rem;
  z-index: 100;
  background:white;
}
  .none_ul_p3{
    padding-left: .5rem;
    font-size: .1rem;
  }
  .none_ul_p1{
    text-align: center;
    font-size: .3rem;
    color: #fff;
    margin: .5rem 0;
  }
  .none_ul_p2{
    text-align: center;
    width: .8rem;
    font-size: .1rem;
    color: #fff;
    margin: .3rem auto;
    border: 1px solid gainsboro;
    padding: .08rem;
    border-radius: .2rem;
  }
  .cha{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: gainsboro;
    border: 1px solid gainsboro;
    font-size: .3rem;
    text-align: center;
    line-height: 50px;
    position: absolute;
    bottom: 1rem;
    left: 45%;
  }
  .none_ul{
    position: fixed;
    right: 0;
    top: 0;
    bottom:0;
    left: 0;
    width: 100%;
    height: 100%;
    background:  #262626;;
    z-index: 200;
    color: white;
  }
  .middle_three{
    color: white;
  }
  .middle_span{
    font-size: 0.1rem;
    padding: 0.06rem;
    border-radius: .1rem;
    color: white;
  }
  .dic{
    margin-top: .2rem;
    margin-right: .19rem;
  }
  .top_qiantou{
    color: white;
    font-size: 0.35rem;
    position: absolute;
    top: 0.01rem;
    left: 0.02rem;
  }
  .shangjia{
    color: white;
    font-size: 0.35rem;
    position: absolute;
    bottom: 0.4rem;
    right: 0.3rem;
  }
  .buttom .buttom_two_money{
    font-size: .3rem;
    font-weight: 700;
    margin-bottom: .1rem;
  }
  .buttom .buttom_two_bigm{
    font-size: .1rem;
  }
  .buttom .buttom_two{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1.2rem;
  }
  .buttom .buttom_go{
    position: absolute;
    right: 0;
    top: 0;
    background-color: #535356;
    width: 1.5rem;
    height: 100%;
    line-height: .7rem;
    display: flex;
    font-size: .2rem;
  }
  .buttom_img{
    /*display: flex;*/
    background-color: #3d3d3f;
    position: absolute;
    padding: .1rem;
    border: .1rem solid #444;
    border-radius: 50%;
    left: .2rem;
    top: -.25rem;
  }
  .buttom_img img{
    width: 40px;
  }
  .conter .conter_left .conter_left_show:hover{
  border-bottom: 2px solid #4e6cff;
  padding: 0.101rem 0.05rem;
  color: #4e6cff;
}
  .conter .conter_right .conter_right_ping:hover{
    border-bottom: 2px solid #4e6cff;
    padding: 0.101rem 0.05rem;
    color: #4e6cff;
  }
 .conter{
   display: flex;
   width: 100%;
   background-color: #fff;
   border-bottom: 1px solid #ebebeb;
   position: fixed;
   margin-top: 1.59rem;
   z-index: 5;

 }
 .conter div{
   width: 50%;
   text-align: center;
   color:gray;
   font-weight: 400;
   font-family: Microsoft Yahei;
   margin: 0.3rem;
   top: 0;
   left: 0;
   right: 0;

 }
  .warp .top{
    width: 100%;
    background: gray;
    padding: 0.125rem .125rem;
    overflow: hidden;
    font-size: 0.15rem;
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    top: 0;
    /*height: 0.566rem;*/
  }
.warp .top .top_left{
  float: left;
  z-index: 100;

}
.warp .top .top_right h4{
  font-size: .25rem;
  color: #fff;
  font-weight: 700;
  width: 100%;
}
  .warp .top .top_right{
    float: right;
    margin-left: .1rem;
    margin-top: .05rem;
  }
  .warp .top .top_right .top_right_s{
    margin: .18rem 0;
    font-size: .165rem;
    color: #fff;
  }
.warp .top .top_left img{
  width:1rem;

}
  .warp .top .top_right .top_right_p{
    font-size: .16rem;
    color: #fff;
  }
 ul li{
   list-style-type:none;
  }
  .buttom{
    position: fixed;
    z-index: 120;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.5rem;
    width:100%;
    box-shadow: 0 -0.02667rem 0.05333rem rgba(0,0,0,.1);
    font-size: .24rem;
    padding: 10px 0;
    background-color:#333;
    color: white;
  }
</style>
