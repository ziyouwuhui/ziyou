<template>
  <div>
    <section class="left">
      <ol>
        <li class="left_li" v-for="(ite,index) in meNu" :key="index">
          <a :href="'#mmp'+ite.id" style="color:grey">
             <span class="li_s">{{ite.name}}</span>
          </a>
        </li>
      </ol>
    </section>
    <section class="right">
      <ul v-for="(it,index) in meNu" :key="index">
        <div class="right_top" :id="'mmp'+it.id">
          <span class="right_top_D">{{it.name}}</span>
          <span class="right_top_B">{{it.description}}</span>
          <span class="right_top_dian">...</span>
        </div>
        <!-- :to="'/classification/'+id" style="padding-bottom: 0.1rem "  -->
        <router-link tag="li" to="" class="li_t">
          <!--src="//elm.cangdu.org/img/1661a8e8aa318572.png">-->
          <div class="right_li_id"  v-for="(child,cindex) in it.foods" :key="cindex">
            <section class="right_li_l">
              <img :src="'//elm.cangdu.org/img/'+child.image_path" alt="" style="width: 0.5rem">
            </section>
            <div class="right_li_right">
              <h3>
                {{child.name}}
              </h3>
              <div class="h_x" v-for="(x,cindex) in child.attributes" :key="cindex">
                        <span class="h_x_if" v-if="x.icon_name==='招牌'">
                          {{x.icon_name}}
                        </span>
              </div>
              <p class="right_fen">
                {{child.description}}
              </p>
              <p class="right_p">
                        <span>
                          {{child.tips}}
                        </span>
                <!--<span>好评率76%</span>-->
              </p>
               <div class="right_l_buttom">
                <span class="right_li_but">${{child.specfoods[0].price}}</span>
                <span class="right_li_add" @click = "counter++">+</span>
                <span class="right_li_add_1">{{ counter }}</span>
                <span class="right_li_a" @click = "counter--">-</span>
        </div>
            </div>
          </div>
        </router-link>
        
      </ul>
    </section>
    <div class="buttom">
          <section class="buttom_img">
            <img src="./img/购物车.png" alt="">
             <div class="buttom_t">{{counter}}</div>
          </section>
          <section class="buttom_two">
            <div class="buttom_two_money">¥ {{counter}}</div>
            <div class="buttom_two_bigm">配送费¥5</div>
          </section>
          <section class="buttom_go">
            <span style="margin: auto" @click="show=!show">还差¥20起送</span>
          </section>
      </div>
      <div class="coudan" v-show="!show">
        <p class="coudan_shoping">
          <span>购物车</span>
          <span class="coudan_shoping_right el-icon-delete">  清空</span>
        </p>
        <ul>
          <li v-for="(it,index) in meNu" :key="index">
            <span>{{it.name}}}</span>
            <span>money</span>
            <span>+</span>
            <span></span>
            <span>-</span>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: "resulr_li",
  data() {
    return {
      meNu: null,
      show:true,
      counter: 0,
      // id: this.$route.params.id
      // m:'<span class="li_s">{{ite.name}}</span>',
    };
  },
  created() {
    let menu =
      "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=" +
      this.$route.params.id;
    this.$http.get(menu).then(data => {
      this.meNu = data.data;
      console.log(data);
    });
  },
  methods: {
    // zen(e) {
    //   var target = event.target;
    //   var dataid = e; 
    //   $(target); 
    // }
    // add(){
      
    // }
  }
};
</script>

<style scoped>
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
}
.coudan_shoping{
  font-size: .25rem;
  margin: .15rem .18rem;
}
.coudan{
  border: 1px solid rebeccapurple;
    left: 0;
    right: 0;
    bottom: .7rem;
    z-index: 119;
    position:fixed;
    background: wheat
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
.right_l_buttom{
    margin-top: .1rem;
    counter-reset: grey;
   
}
/* .right_li_add:hover .right_li_add_1{
  display: block;
} */
.right_li_a{
  display: none;
}
.right_li_add,.right_li_a{
  float:right;
  width: 15px;
  height: 15px;
  color: white;
  text-align: center;
  line-height: 14px;
  border: 1px solid blue;
  border-radius: 50%;
  background: blue
}
.right_li_add_1{
  float:right;
  width: 15px;
  height: 15px;
  color: grey;
  text-align: center;
  line-height: 14px;
  border-radius: 50%;
  /* display: none; */
}
.right_li_id {
  background-color: #fff;
  padding: 0.2rem 0rem;
  border-bottom: 1px solid #f8f8f8;
  position: relative;
  overflow: hidden;
}
.right_li_right h3 {
  font-size: 0.2rem;
  color: #333;
  margin-bottom: 0.1rem;
  display: inline-block;
}
.right_li_right .h_x {
  float: right;
  border: 1px solid rgb(240, 115, 115);
  border-radius: 0.23rem;
  font-size: 0.001rem;
}
.h_x_if {
  color: rgb(240, 115, 115);
  /*line-height: .005rem;*/
}
.right_li_right .right_fen {
  font-size: 0.08rem;
  color: #999;
  line-height: 0.08rem;
  margin-bottom: 0.1rem;
}
.right_li_right .right_p span {
  font-size: 0.08rem;
  color: #333;
}
.right .right_li_right {
  float: left;
  width: 75%;
  margin-left: 0.1rem;
}
.right_li_id .right_li_l {
  float: left;
  text-align: center;
}
.right_li_id img {
  width: 0.5rem;
  height: 0.5rem;
  display: block;
  margin-top: 0.1rem;
  margin-left: 0.15rem;
}
.right .right_top {
  background: #ededed;
  padding: 0.1rem 0 0.1rem 0.1rem;
  border: 1px solid red;
  /* position:fixed; */
  /* top: 4rem; */

}
.right .right_top_D {
  font-size: 0.25rem;
  color: #666;
  font-weight: 700;
}
.right .right_top_B {
  font-size: 0.08rem;
  color: #999;
  width: 30%;
  overflow: hidden;
  margin-left: 0.01rem;
}
.right_top .right_top_dian {
  float: right;
}
.left_li {
  padding: 0.3rem 0rem 0.3rem 0.125rem;
  /*text-align: center;*/
  border: 1px solid gainsboro;
  box-sizing: border-box;
  position: relative;
  color: gray;
  background: #ededed;
  font-size: 0.18rem;
}
.left_li:hover {
  border-left: 4px solid #4e6cff;
}
.left {
  position: fixed;
  left: 0;
  /*top: 100px;*/
  z-index: 5;
  /*border: 2px solid red;*/
  margin-top: 2.4rem;
}
.right {
  margin-top: 2.4rem;
  width: 75%;
  overflow: hidden;
  margin-left: 4rem;
}
</style>
<style>
.el-rate__icon {
  font-size: 0.01rem;
}
</style>
