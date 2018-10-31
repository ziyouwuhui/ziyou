<template>
   <div>
        <div class="connt">
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
                         <!--<span class="infor_r_B" v-if="child.id == 9">{{text2}}</span>-->
                         <span class="infor_r_S" v-if="child.id == 9">{{child.name}}</span>
                       </div>
                    </div>
                    <div class="infor_r_peisong">
                      <span class="infor_r_s">${{i.float_minimum_order_amount}}起送 / {{i.piecewise_agent_fee.tips}}</span>
                      <span class="infor_r_h">/{{i.order_lead_time}}</span>
                      <span class="infor_r_l">{{i.distance}}</span>
                    </div>
                  </div>
                </router-link>
              </ul>
          </div>
     </div>
   </div>
</template>
<script>
import {mapState} from 'vuex'

    export default {
        name: "leibiao",
        data(){
          return{
            value5:'',
            data:[],
            text2:'',
            latitude:"",
            longitude:"",
            geohash:this.$route.query.geohash,
            address:"",
            
          }
        },
        computed:{
          ...mapState(['s11']),
          // ...mapGetters({s1:'n'}),
          // ...mapState(['inde']),
          ac(){
           return  this.$store.getters.in

          }
        },
        
      methods:{
        read(i){
          console.log(i);
        }
      },
 beforeMount() {
    var a = this.$store.getters.in
    console.log(a,"7765845");
        let api = `https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762&order_by=${this.ac}`;
        this.$http.get(api).then((data)=>{
          this.data = data.data;
          console.log(1221,data.data);
          
          this.$store.commit("s1",data.data);
          // this.$store.state.s;
          this.value5 = data.rating;
          var dat = this.data;
          
          for(var i = 0;i<=dat.length;i++){
            let v = dat[i];
            console.log(dat[i],"333333");
          }
          })
          
          
      }
    }
</script>

<style scoped>
.infor_r_h{
    float: right;
    color: #3190e8;
  }
  .infor_r_peisong .infor_r_l{
    float: right;
    margin-left: 0.3rem;
    color: #999;
  }
  .infor_r_peisong .infor_r_s{
    transform: scale(.2);
    font-size: .1rem;
    color: #666;
  }
  .infor_r_pinpai .infor_r_b{
    float: right;
    color: #999;
  }
  .infor_r_pinpai .infor_r_x{
    /*width: 8.5rem;*/
    color: #333;
    padding-top: .01rem;
    font: .19rem/.18rem PingFangSC-Regular;
    font-weight: 700;
   padding-right: 1.6rem;
  }
  .infor_r_pinpai .infor_r_p{
    content: "\54C1\724C";
    display: inline-block;
    font-size: .1rem;
    line-height: .2rem;
    color: #333;
    background-color: #ffd930;
    padding: 0 .1rem;
    border-radius: .02rem;
    margin-right: .1rem;
  }
  .li_g{
    display: flex;
    border-bottom: .025rem solid #f1f1f1;
    padding: .2rem .1rem;
  }
  .guaranteed .infor_l img{
    width:0.78rem;
    float: left;
    /*border: 1px solid red;*/
  }
  .guaranteed .infor_r{
    font-size: .1rem;
    float: right;
    margin-left: .1rem;
  }
  .guaranteed .infor_r>div{
    margin-bottom: .15rem;
  }
  .guaranteed{
    background-color: #fff;
  }
 .connt .seller{
    padding-top:.2rem;
    padding-left: .15rem;
    /*margin-bottom: 0.35rem;*/
  }
  .seller .seller_a{
    color: #999;
    font-size: .18rem;
    font-family: Microsoft YaHei;;
  }
  .seller .seller_f img{
    width: .25rem;
    height: .25rem;
  }
  .wrap .connt{
    margin-top: .6rem;
    border-top: .012rem solid #e4e4e4;
    background-color: #fff;
  }

</style>
<style>
  .el-rate__item{
    font-size: .01rem;
  }
</style>
