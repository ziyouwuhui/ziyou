<template>
    <section class="div">
      <header class="top_header">
         <div class="top_left">
            <p class="top_l_p">5</p>
            <p class="top_l_z">综合评价</p>
            <p class="top_l_g">高于周边商家76.%</p>
         </div>
         <div class="top_right">
           <p style="display:flex">
             <span class="food">服务态度</span>
              <span class="top_right_e">
                 <el-rate
                   v-model="value5"
                   disabled
                   show-score
                   text-color="#ff9900"
                   score-template="{value}">
                 </el-rate>
              </span>
           </p>
           <p class="sty">
             <span class="food">菜品贫家</span>
             <span class="top_right_e">
                 <el-rate
                   v-model="value5"
                   disabled
                   show-score
                   text-color="#ff9900"
                   score-template="{value}">
                 </el-rate>
              </span>
           </p>
           <p>
            <span class="food"> 送达世家</span>
            <span class="m">分钟</span>
           </p>
         </div>
      </header>
      <div class="conter">
          <ul>
            <li class="li" v-for="(it,index) in meNuL" :key="index">
              {{it.name}}({{it.count}})
            </li>
          </ul>
      </div>
      <div style="background: white">
          <ul>
            <li class="li_p" v-for="(em,index) in Apir" :key="index">
              <div class="left_img">
                <!--//elm.cangdu.org/img/default.jpg-->
                  <!--<img :src="'//elm.cangdu.org/img/'+em." alt="">-->
              </div>
              <div class="li_r">
               <div>
                 <p class="li_r_p">{{em.username}}</p>
                 <p class="li_r_p11">{{em.rated_at}}</p>
               </div>
                 <p class="li_r_a1"><el-rate
                   v-model="value5"
                   disabled
                   show-score
                   text-color="#ff9900"
                   score-template
                 >
                 </el-rate></p>
                <p class="li_r_a">{{em.time_spent_desc}}</p>
                   <ul class="ul">
                     <li class="li_ji" v-for="cl in em.item_ratings" :key="cl._id">
                          <div>
                            <img :src="'https://fuss10.elemecdn.com/'+cl.image_hash+'.jpeg'" alt="">
                          </div>
                     </li>
                   </ul>
                <ul>
                  <li v-for="cl in em.item_ratings" :key="cl._id">
                   <p><span class="span_l">{{cl.food_name}}</span></p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
      </div>


    </section>
</template>

<script>
    export default {
        name: "resulr_evaluate",
      data() {
        return {
          value5: 3.7,
          meNuL:null,
          Apir:null,
        }
      },
      created(){
        let api_r = "https://elm.cangdu.org/ugc/v2/restaurants/"+this.$route.params.id+"/ratings/tags"
        this.$http.get(api_r).then((data)=>{
          this.meNuL = data.data;
          console.log("00000",data);
        });
        let apir = "https://elm.cangdu.org/ugc/v2/restaurants/"+this.$route.params.id+"/ratings"
        this.$http.get(apir).then((data)=>{
          this.Apir = data.data;
          console.log("00000",data);
        });
      }
    }
</script>

<style scoped>
  .li_r_a1{
    display: inline-block;
  }
  .li_r_a{
    font-size: .05rem;
    color: #666;
    margin-left: .05rem;
    display: inline-block;
  }
  .ul{
    overflow: hidden;
  }
   .li_ji{
    width: 100%;
  }
 .ul .li_ji>div{
   float: left;
   font-size: 0.08rem;
   margin: 0.1rem  0.1rem 0.1rem 0;
  }
  .span_l{
    padding: 0.05rem 0;
    margin-right: 0.08rem;
    border: 1px solid gray;
    text-align: center;
    width: .5rem;
    font-size: 0.05rem;
    color: gray;
    overflow: hidden;
    float: left;
    text-overflow: ellipsis;/* 超出内容显示为省略号*/
    white-space: nowrap;/*文本不进行换行*/

  }
  .li_r_p11{
    color: #666;
    float: right;
    display: inline-block;
    margin-bottom: .04rem;
    font-size: 0.089rem;
  }
  .li_r_p{
    color: #666;
    display: inline-block;
    margin-bottom: .04rem;
    font-size: 0.089rem;
  }
  .li_r{
    float: left;
    margin-left: 0.18rem;
    width: 80%;
  }
  .li_p{
    border-top: 1px solid #f1f1f1;
    display: -ms-flexbox;
    padding: .1rem 0;
    overflow: hidden;
  }
  .left_img{
    float: left;
    border: 1px solid red;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  img{
    width: 50px;
  }
  .conter {
    overflow: hidden;
    padding: .1rem .4rem;
    background: white;
  }
.li{
  background-color: #ebf5ff;
  width: 1rem;
  border: 1px solid #ebf5ff;
  border-radius:0.1rem ;
  font-size: .1rem;
  color: #607D8B;
  margin: .1rem;
  float: left;
  text-align: center;
  padding: 0.05rem 0;
}
.li:hover{
  background: #007aff;
  color: white;
}
.div{
  position: absolute;
  left: 0;
  top: 100px;
  z-index: 1;
  background: gainsboro;
  /*border: 2px solid red;*/
  margin-top: 1.15rem;
  width: 100%;
}
.sty{
  display: flex;
  margin: 0.1rem 0;
}
.food{
   color: gray;
   margin-right: .05rem;
   font-size: 0.18rem;
 }
.m{
  color: #666;
  margin-right: .05rem;
  font-size: 0.15rem;
}
.top_right_e{
  margin-left: 0.1rem;
}
  .top_l_p{
    font-size: .38rem;
    color: #f60;
  }
  .top_l_z{
    font-size: .18rem;
    color: #666;
    margin: .1rem;
  }
  .top_l_g{
    font-size: .1rem;
    color: #999;
  }
  .div .top_header{
    overflow: hidden;
    display: flex;
    background-color: #fff;
    padding: .2rem .2rem;
    margin-bottom: .1rem;
  }
  .div .top_header .top_left{
    float: left;
    text-align: center;
    padding: 0.1rem .15rem;
  }
.div .top_header .top_right{
  float: left;
  padding: 0.1rem .15rem;
}
</style>
<style>
  .el-rate__icon {
    font-size: 10px;
  }
</style>
