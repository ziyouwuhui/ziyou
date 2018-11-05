<template>
     <div class="wrap">
          <div class="top">
              <span @click="change()" class="top-left"><</span>
              <span class="top-conter">{{this.$route.query.ite}}</span>
          </div>  
          <div class="top_padding"></div>
          <Lbiao></Lbiao>
          <!-- 按钮分类 -->
          <div class="botton">
               <div class="botton_t">
                   <div class="botton_t1" @click="show = !show">{{this.$route.query.ite}}</div>
                   <div @click="show3 = !show3" class="botton_t2">排序</div> 
                   <div @click="show4 = !show4" class="botton_t3">筛选</div>
               </div>
          </div>
          <!-- 甜品选项列表 -->
              <div class="none_ul" v-show="show">
               <div class="left_one">
                    <ul id="root1">
                       <li class="lili" v-for="(item,index) in meNuL" :key="index" @click="text(index)">
                           <span class="index_1" v-if="item.id != 260"> 
                               <img :src="'https://fuss10.elemecdn.com/'+item.image_url+'.png'" v-if="item.image_url.substr(-4) != 'jpeg'">
                               <img :src="'https://fuss10.elemecdn.com/'+item.image_url+'.jpeg'" v-else-if="item.image_url.substr(-4) == 'jpeg'">
                           </span>
                         <span>{{item.name}}</span> 
                         <span class="count_if">
                            <span class="if_1"> {{item.count}}</span>
                            &nbsp;&nbsp;>
                         </span> 
                       </li>
                </ul>
               </div>
               <div class="right_one">
                    <ul id="root2">
                       <li class="lili2" v-for="(it,index) in arrs" :key="index" @click="sxShop(it.id)">
                         <div class="lili1">
                              <span class="ww">
                                    <span>{{it.name}}</span>
                                    <span class="count">{{it.count}}</span> 
                              </span>
                         </div>  
                       </li>
                   </ul>
                </div>
    </div> 

            <!-- 智能排序列表 -->
            <div  class="show3" v-show="show3">
                 <ul>
                     <li class="lili" v-for="(iw,index) in products " :key="index" @click="range(index)">   
                        <span> <img :src="iw.url"> </span>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{iw.title}}</span> 
                        <span class="r_1">
                         <img src="../waimai/img/dok.png" alt="">
                        </span>
                        {{distance.distance}}
                      </li>
                  </ul>
            </div>
            <!-- 智能筛选列表 -->
            <div v-show="show4" class="show4">
                  <div class="show_li">
                      <ul>
                         <li v-for="(w,index) in arr" :key="index">
                            <p class="pei">配送方式</p>
                            <p class="bord" :style="'background:#'+w.color">{{w.text}}</p>
                            <p class="shang">商家属性(可以多选)</p>
                            <div>
                              <ul class="sxlist">
                                <li v-for="(s,index) in Yang" :key="index">
                                    <div class="li_w" @click="sxlist(index)">
                                      <span class="span_c" :style="{color: '#'+s.icon_color,border:'1px solid #'+s.icon_color}">{{s.icon_name}}
                                      </span>
                                      <span class="span_f">{{s.name}}</span>
                                    </div>
                                </li>
                             </ul>
                            </div>
                       
                         </li>
                  
                      </ul>       
              </div>
                     
           </div>
     </div>
</template>

<script>
// console.log(this.$route);
import img01 from "../waimai/img/排序.png";
import img02 from "../waimai/img/map.png";
import img03 from "../waimai/img/flame.png";
import img04 from "../waimai/img/money.png";
import img05 from "../waimai/img/clock.png";
import img06 from "../waimai/img/star.png";
import Lbiao from "./leibiao";
import { mapState } from "vuex";

export default {
  name: "Spinner",
  data() {
    return {
      meNuL: {},
      shopId: this.$route.query.id,
      speciesData: [],
      arr: {},
      Yang: {},
      arrs: {},
      show: false,
      show3: false,
      show4: false,
      show5: false,
      distance: "",
      products: [
        {
          url: img01,
          title: "智能排序"
        },
        {
          url: img02,
          title: "距离最近"
        },
        {
          url: img03,
          title: "销量最高"
        },
        {
          url: img04,
          title: '起送价最低"'
        },
        {
          url: img05,
          title: "配送速度最快"
        },
        {
          url: img06,
          title: "评分最高"
        }
      ],
      productsID:''
    };
  },

  components: {
    Lbiao,
    cn() {
      //  console.love(this.$store.state.s11,"11111111111111111111")
    }
  },
  created() {
    //https://elm.cangdu.org/shopping/v2/restaurant/category
    let api = "https://elm.cangdu.org/shopping/v2/restaurant/category";
    let love = "https://elm.cangdu.org/shopping/v1/restaurants/delivery_modes";
    let yang =
      "https://elm.cangdu.org/shopping/v1/restaurants/activity_attributes";
    this.$http.get(api).then(data => {
      this.meNuL = data.data;
    });
    this.$http.get(love).then(data => {
      this.arr = data.data;
      this.Yang = data.data;
    });
    this.$http.get(yang).then(data => {
      this.Yang = data.data;
    });
  },
  methods: {
    change(){
       this.$router.go(-1);
    },
    text(index) {
      this.arrs = this.meNuL[index].sub_categories;
    },
    //智能筛选
    sxlist(index){
      let ul = document.getElementsByClassName('sxlist')[0];
      let lis = ul.getElementsByTagName('li');
      for (var i = 0; i < lis.length; i++) {
        lis[i].style.color = 'black';
      }
      lis[index].style.color = 'red';
      this.show4 = false;
    },
    //餐馆排序
    range(index) {
      this.show3 = false;
      if(index == 0){
          this.productsID = 4
      }else if(index == 1){
          this.productsID = 5
      }else if(index == 2){
          this.productsID = 6
      }else if(index == 3){
          this.productsID = 1
      }else if(index == 4){
          this.productsID = 2
      }else {
          this.productsID = 3
      }
      this.$store.commit('updateInte',this.productsID);
    },
    //餐馆筛选
    sxShop(id) {
      this.$store.commit('updateShopid',id);
      this.show = !this.show;
    }
  },
  computed: {
    
  }
};
</script>

<style scoped>
.top_padding {
  height: 0.5rem;
}

.botton_t1:hover {
  color: blue;
}

.shang {
  padding: 0 0 0.2rem 0;
  font-size: 0.18rem;
}
.pei {
  margin: 0.2rem 0;
  padding-left: 0.26rem;
}
.bord {
  width: 1rem;
  /* height: .1rem; */
  margin: 0.3rem;
  text-align: center;
  padding: 0.05rem;
  border-radius: 0.1rem;
  font-size: 0.15rem;
}
.show_li {
  border: 1px solid gainsboro;
  position: fixed;
  top: 1.1rem;
  right: 0;
  left: 0;
  background: white;
}
.qingkong {
  border: 1px solid gainsboro;
  background: grey;
}
.span_c {
  border-radius: 0.2rem;
  font-size: 0.13rem;
  padding: 0.01rem;
}
.li_w span {
  margin-right: 0.1rem;
}
.li_w {
  width: 1.2rem;
  height: 0.3rem;
  line-height: 0.3rem;
  border: 1px solid gainsboro;
  text-align: center;
  float: left;
  margin: 0.1rem 0 0.1rem 0.25rem;
}
.span_c,
.span_f {
  float: left;
}
.r_1 {
  margin-left: 4rem;
}
.lili {
  padding: 0.1rem;
  color: gray;
  font-size: 0.1rem;
}
.show3 li img {
  width: 20px;
  height: 20px;
  display: inline-block;
}
.show3 li {
  border-bottom: 1px solid gainsboro;
}
.show3,
.show4 {
  background-color: #fff;
  position: fixed;
  top: 1.13rem;
  right: 0;
  left: 0;
  width: 100%;
  display: flex;
  z-index: 13;
  overflow: hidden;
}
.none_ul {
  background-color: #fff;
  position: fixed;
  top: 1.1rem;
  left: 0;
  width: 100%;
  display: flex;
  z-index: 13;
  overflow: hidden;
  height: 3.8rem;
}
.botton_t1,
.botton_t2,
.botton_t3 {
  width: 1.545888888rem;
  float: left;
  padding-left: 0.01rem;
  padding: 0.06rem 0;
  text-align: center;
  margin: 0.1rem 0;
}
.botton_t2 {
  border-left: 1px solid gray;
  border-right: 1px solid gray;
}
.botton {
  background-color: #fff;
  position: fixed;
  top: 0.6rem;
  right: 0;
  left: 0;
  width: 100%;
  display: flex;
  z-index: 13;
  overflow: hidden;
}

.top {
  background-color: #3190e8;
  width: 100%;
  padding: 0.125rem 0.125rem;
  overflow: hidden;
  font-size: 0.15rem;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  top: 0;
  height: 0.35rem;
  text-align: center;
  font-size: 0.3rem;
  color: white;
}

.top-left {
  color: white;
  font-size: 0.35rem;
  position: absolute;
  left: 0.3rem;
}
.left_one {
  float: left;
  /* flex: 1; */
}
.if_1 {
  border: 1px solid grey;
  border-radius: 50%;
  background: grey;
  color: white;
  padding: 0.04rem;
}
.count_if {
  float: right;
  margin-left: 0.1rem;
  margin-top: 0.05rem;
}
.index_1 img {
  width: 0.2rem;
  margin-right: 0.1rem;
  vertical-align: middle;
}
#root1 li:nth-child(1) {
  padding: 0.125rem;
}
.lili:hover {
  background: white;
}
.lili {
  border: 1px solid gainsboro;
  padding: 0.1rem;
  background: #f1f1f1;
  color: gray;
  font-size: 0.1rem;
}
.none_ul {
  background-color: #fff;
  position: fixed;
  top: 1.1rem;
  left: 0;
  width: 100%;
  display: flex;
  z-index: 13;
  overflow: hidden;
}
.lili2 .ww .count {
  float: right;
}
.lili2 .ww {
  overflow: hidden;
}
.lili2 div {
  padding: 0.125rem;
}
#root2 {
  color: gray;
  font-size: 0.1rem;
}
.lili1 {
  border: 1px solid gainsboro;
  padding: 0.1rem;
  /* background: #f1f1f1; */
  color: gray;
  font-size: 0.1rem;
}
.right_one {
  float: right;
  top: 1rem;
  flex: 1;
}
.left_one {
  float: left;
  flex: 1;
}
.if_1 {
  border: 1px solid grey;
  border-radius: 50%;
  background: grey;
  color: white;
  padding: 0.04rem;
}
.count_if {
  float: right;
  margin-left: 0.1rem;
  margin-top: 0.05rem;
}
.index_1 img {
  width: 0.2rem;
  margin-right: 0.1rem;
  vertical-align: middle;
}
#root1 li:nth-child(1) {
  padding: 0.125rem;
}
.lili:hover {
  background: white;
}
</style>