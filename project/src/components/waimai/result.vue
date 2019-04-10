<template>
 <div class="warp" v-if="meNu">
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
                    <span  class="middle_span" :style="'background:#'+ me[0].icon_color" >{{me[0].icon_name}}</span>
                    <span class="middle_three">{{me[0].description}}</span>
                </div>
             </div>
           </li>
           <div class="beijingtu">
              <img :src="'//elm.cangdu.org/img/'+meNu.image_path" alt="">
           </div>
      </ul>
      <section class="conter">
        <div class="conter_left">
          <router-link class="conter_left_show" :to="'/result/resulr_li/'+id" tag="span" >商品
          </router-link>
        </div>
        <div class="conter_right">
          <router-link class="conter_right_ping" :to="'/result/resulr_evaluate/'+id" tag="span" >评价</router-link>
        </div>
      </section>
      <!--<divli></divli>-->
      <!-- 购物车下 -->
      <div class="buttom">
          <section @click="barts" class="buttom_img"><img src="./img/购物车.png" alt=""></section>
          <section class="buttom_two">
            <div class="buttom_two_money">¥ {{mon}}</div>
            <div class="buttom_two_bigm">配送费¥5</div>
          </section>
          <section v-if="meNu" class="buttom_go">
             <router-link :to="{name:'shoping',path:'/shoping',query:{src:'//elm.cangdu.org/img/'+meNu.image_path,name:meNu.name}}">
              <span class="ma" style="margin: auto">去结算</span>
              <!-- <span class="ma"></span> -->
              
            </router-link>
          </section>
      </div>
        <!-- 購物車彈 -->
      <div class="tankuang" v-show="bart">
          <div class="tankuang_1">
             <span>购物车</span>
             <span class="el-icon-delete right" @click="clear" > 清空</span>
          </div>
          <!-- 显示自己内容 -->
          <div>
               <ul>
                 <li v-for="(item,index) in carts" :key="index">
                  <div class="mo">
                    <span class="m_l">{{ item.name }}</span>
                     <div class="r_add">
                       <span class="right_li_add" @click = "add(index)">+</span>
                       <span class="right_li_add">{{item.num}}</span>
                       <span class="right_li_add" @click = "reduce(index)">-</span>
                     </div>
                    <span class="m_r">${{price}}</span>
                  </div>
                  
                 </li>
                </ul> 
          </div>
      </div> 
   <router-view  @childByVaue="childByVaue"></router-view>
   <transition name="el-fade-in-linear">
       <div v-show="!show">
         <div class="none_ul">
             <p class="none_ul_p1">{{meNu.name}}</p>
             <p class="none_ul_p2">优惠信息</p>
             <div class="none_ul_p3">
               <div v-for="(a,index) in me" :key="index" class="dic">
                 <span class="middle_span" :style="'background:#'+a.icon_color" >{{a.icon_name}}</span>
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
import { mapMutations } from "vuex";
export default {
  name: "result",
  data() {
    return {
      meNu: {},
      me: {},
      bart:false,
      id: this.$route.params.id,
      show: true,
      names: this.$store.state.meNu,
      carts:[],
      price:'',
      money:[],
      newFoods:[],
      newFood:[],
      foodname:''
    };
  },
  created() {
    var a2 = this.$store.state.cc;
    let api_r =
      "https://elm.cangdu.org/shopping/restaurant/" + this.$route.params.id;
    this.$http.get(api_r).then(data => {
      this.meNu = data.data;
      this.me = data.data.supports;
    });
  },
  methods: {
    change(e) {
      this.$router.go(-1);
    },
    barts(){
          this.bart=!this.bart
    },
    clear(){
      this.carts=[];
      this.bart = false;
    },
    add(index){
        this.carts[index].num++;
    },
    reduce(i){
       if( this.carts[i].num!=0){
          this.carts[i].num--;
       }
    },
    checkCount() {
      let foodlist = [];
      this.food.forEach(val => {
        val.detail.forEach(val => {
          if (val.count) {
            foodlist.push(val);
          }
        });
      });
      return foodlist;
    },
    childByVaue:function(childByVaue){
        if(this.carts.indexOf(childByVaue) == -1){
             this.carts.push(childByVaue);
        }
        this.carts.forEach(d => {
            this.money = d.specfoods;
            this.foodname = d.name;
        })
        this.money.forEach(v => {
             this.price = v.price
        })

    }
  },
  computed:{
    mon(){
      let total = 0;
      this.carts.forEach(val =>{
        if(!val.num){
            return
        }else{
          total += val.num*this.price
        }
      })
       this.$store.commit('updateAllprice',total);
        return total;
    }
  }
};
</script>

<style scoped>
.beijingtu{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  border: 0.01rem solid yellow;
  opacity: 0.5;
}
.beijingtu>img{
  width: 100%;
}
.right_li_add{
  float: right;
  width: 15px;
  height: 15px;
  color: white;
  text-align: center;
  line-height: 14px;
  border: 1px solid blue;
  border-radius: 50%;
  background: blue;
}
.mo{
  padding: .15rem 0.1rem ;
 
}
.r_add{
  float:right;
}
.m_r{
  float: right;
  margin-right: 1rem;
  color:orangered;
}
.right {
  float: right;
}
.tankuang_1 {
  border: 1px solid red;
  padding: 0.17rem;
}
.tankuang {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0.7rem;
  height: 2rem;
  z-index: 100;
  background: white;
}
.none_ul_p3 {
  padding-left: 0.5rem;
  font-size: 0.1rem;
}
.none_ul_p1 {
  text-align: center;
  font-size: 0.3rem;
  color: #fff;
  margin: 0.5rem 0;
}
.none_ul_p2 {
  text-align: center;
  width: 0.8rem;
  font-size: 0.1rem;
  color: #fff;
  margin: 0.3rem auto;
  border: 1px solid gainsboro;
  padding: 0.08rem;
  border-radius: 0.2rem;
}
.cha {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: gainsboro;
  border: 1px solid gainsboro;
  font-size: 0.3rem;
  text-align: center;
  line-height: 50px;
  position: absolute;
  bottom: 1rem;
  left: 45%;
}
.none_ul {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #262626;
  z-index: 200;
  color: white;
}
.middle_three {
  color: white;
}
.middle_span {
  font-size: 0.1rem;
  padding: 0.06rem;
  border-radius: 0.1rem;
  color: white;
}
.dic {
  margin-top: 0.2rem;
  margin-right: 0.19rem;
}
.top_qiantou {
  color: white;
  font-size: 0.35rem;
  position: absolute;
  top: 0.01rem;
  left: 0.02rem;
}
.shangjia {
  color: white;
  font-size: 0.35rem;
  position: absolute;
  bottom: 0.4rem;
  right: 0.3rem;
}
.buttom .buttom_two_money {
  font-size: 0.3rem;
  font-weight: 700;
  margin-bottom: 0.1rem;
}
.buttom .buttom_two_bigm {
  font-size: 0.1rem;
}
.buttom .buttom_two {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1.2rem;
}
.buttom .buttom_go .ma {
  color: white;
  margin-left: .75rem;
}
.buttom .buttom_go {
  position: absolute;
  right: 0;
  top: 0;
  background-color:green;
  width: 1.5rem;
  height: 100%;
  text-align: center;
  line-height: 0.7rem;
  color: white;
  display: flex;
  font-size: 0.25rem;
}
.buttom_img {
  /*display: flex;*/
  background-color: #3d3d3f;
  position: absolute;
  padding: 0.1rem;
  border: 0.1rem solid #444;
  border-radius: 50%;
  left: 0.2rem;
  top: -0.25rem;
}
.buttom_img img {
  width: 40px;
}
.conter .conter_left .conter_left_show:hover {
  border-bottom: 2px solid #4e6cff;
  padding: 0.101rem 0.05rem;
  color: #4e6cff;
}
.conter .conter_right .conter_right_ping:hover {
  border-bottom: 2px solid #4e6cff;
  padding: 0.101rem 0.05rem;
  color: #4e6cff;
}
.conter {
  display: flex;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #ebebeb;
  position: fixed;
  margin-top: 1.59rem;
  z-index: 5;
}
.conter div {
  width: 50%;
  text-align: center;
  color: gray;
  font-weight: 400;
  font-family: Microsoft Yahei;
  margin: 0.3rem;
  top: 0;
  left: 0;
  right: 0;
}
.warp .top {
  width: 100%;
  background: gray;
  padding: 0.125rem 0.125rem;
  overflow: hidden;
  font-size: 0.15rem;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  top: 0;
  /*height: 0.566rem;*/
}
.warp .top .top_left {
  float: left;
  z-index: 100;
}
.warp .top .top_right h4 {
  font-size: 0.25rem;
  color: #fff;
  font-weight: 700;
  width: 100%;
}
.warp .top .top_right {
  float: right;
  margin-left: 0.1rem;
  margin-top: 0.05rem;
}
.warp .top .top_right .top_right_s {
  margin: 0.18rem 0;
  font-size: 0.165rem;
  color: #fff;
}
.warp .top .top_left img {
  width: 1rem;
}
.warp .top .top_right .top_right_p {
  font-size: 0.16rem;
  color: #fff;
}
ul li {
  list-style-type: none;
}
.buttom {
  position: fixed;
  z-index: 120;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.5rem;
  width: 100%;
  box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, 0.1);
  font-size: 0.24rem;
  padding: 10px 0;
  background-color: #333;
  color: white;
}
</style>
