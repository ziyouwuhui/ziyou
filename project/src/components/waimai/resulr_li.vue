<template>
  <div>
    <section class="left">
      <ol>
        <li class="left_li" v-for="(ite,index) in meNu" :key="index" @click="djshow(ite.id)">
          <!-- :href="'#mmp'+ite.id" -->
          <a href="###" style="color:grey">
             <span class="li_s">{{ite.name}}</span>
          </a>
        </li>
      </ol>
    </section>
    <section class="right">
      <ul v-for="(it,index) in meNu" :key="index" v-if="foodId == it.id">
        <!-- :id="'mmp'+it.id" -->
        <div class="right_top">
          <span class="right_top_D">{{it.name}}</span>
          <span class="right_top_B">{{it.description}}</span>
          <span class="right_top_dian">...</span>
        </div>
        <li class="li_t">
          <!-- 好吃的 -->
          <div class="right_li_id"  v-for="(child,cindex) in foods" :key="cindex">
            <section class="right_li_l" @click="next(child.image_path,child.name)">
              <img :src="'//elm.cangdu.org/img/'+child.image_path" alt="" style="width: 0.5rem">
            </section>
            <div class="right_li_right">
              <h3>
                {{child.name}}
              </h3>
              <div class="h_x" v-for="(x,cindex) in child.attributes" :key="cindex">
                        <span class="h_x_if" v-if="x.icon_name === '招牌'">
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
              </p>
               <div class="right_l_buttom">
                <span class="right_li_but">${{child.specfoods[0].price}}</span>
                <span class="right_li_add" @click = "add(cindex,child.name)">+</span>
                <span class="right_li_add_1">{{ child.num}}</span>
                <span class="right_li_a" @click = "reduce(cindex)">-</span>
        </div>
            </div>
          </div>
        </li>
        
      </ul>
    </section>

   
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
export default {
  name: "resulr_li",
  data() {
    return {
      meNu: null,
      allFoods: [],
      foods: [],
      counter: 1,
      sum: null,
      id:'',
      foodId:2306
    };
  },
  created() {
    let menu =
      "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=" +
      this.$route.params.id;
      this.$http.get(menu).then(data => {
      this.meNu = data.data;
      for (let i = 0; i < data.data.length; i++) {
        this.allFoods.push(data.data[i].foods);
      }
      for (let i = 0; i < this.allFoods[0].length; i++) {
        // this.allFoods[0][i].num = 1;
        //添加新的属性vue.set 
        Vue.set(this.allFoods[0][i], 'num', 0);
        this.foods.push(this.allFoods[0][i]);
      
      }
      //vuex  newResulr_li
      console.log(this.meNu,'222222222222222222222222222222222')
         this.$store.commit("newResulr_li", data.data);
         
      // console.log(data.data+'3333333333333333')
    });
  },
  computed: {
    ...mapState(["s12"])
  },
  methods: {
    djshow(id){
        this.foodId = id;
    },
    cheng() {
      this.$router.back(-1);
    },
    add(i,id) {
      //内容num 
      this.foods[i].num++;
      console.log(id,'ididididi')
      this.$store.commit("arrs", id);
      var food = this.meNu.foods;
      this.$emit("childByVaue", this.foods[i]);
      
    },
     reduce(i){
       if( this.foods[i].num!=0){
          this.foods[i].num--;
          this.$emit("childByVaue", this.foods[i]);
       } 
     },
     next(tu,namesq){
          this.$store.commit("tupian",tu);
          this.$router.push({name:'classification',params:{img:tu,names:namesq}});
     }
  }
};
</script>

<style scoped>
.qiu {
  width: 20px;
  height: 20px;
  background-color: blue;
  border-radius: 50%;
  position: absolute;
  transition: all 0.8s;
}
.con {
  width: 20px;
  height: 20px;
  background-color: transparent;
  border-radius: 50%;
  position: absolute;
  top: -10px;
  right: 10px;
  transition: all 0.8s;
}
.item:hover .con {
  transform: translateX(-200px);
  transition-timing-function: linear;
}
.item:hover .qiu {
  transform: translateY(200px);
  transition-timing-function: cubic-bezier(0.58, -0.42, 1, 0.65);
}
.buttom_t {
  position: absolute;
  top: -0.05rem;
  right: -0.05rem;
  background: red;
  color: white;
  border-radius: 50%;
  padding: 0.06rem;
  font-size: 0.04rem;
}
.coudan_shoping_right {
  float: right;
}
.coudan_shoping {
  font-size: 0.25rem;
  margin: 0.15rem 0.18rem;
}
.coudan {
  border: 1px solid rebeccapurple;
  left: 0;
  right: 0;
  bottom: 0.7rem;
  z-index: 119;
  position: fixed;
  background: wheat;
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
.buttom .buttom_go {
  position: absolute;
  right: 0;
  top: 0;
  background-color: #535356;
  width: 1.5rem;
  height: 100%;
  line-height: 0.7rem;
  display: flex;
  font-size: 0.2rem;
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
.right_l_buttom {
  margin-top: 0.1rem;
  counter-reset: grey;
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
.buttom .buttom_go {
  position: absolute;
  right: 0;
  top: 0;
  background-color: #535356;
  width: 1.5rem;
  height: 100%;
  line-height: 0.7rem;
  display: flex;
  font-size: 0.2rem;
}
.buttom_img {
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
.el-rate__icon {
  font-size: 0.01rem;
}
.right_l_buttom {
  margin-top: 0.1rem;
  counter-reset: grey;
}
.right_li_add,
.right_li_a {
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
.right_li_add_1 {
  float: right;
  width: 15px;
  height: 15px;
  color: grey;
  text-align: center;
  line-height: 14px;
  border-radius: 50%;
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
  /* border: 1px solid red; */
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
  z-index: 5;
  margin-top: 2.4rem;
  width: 1.15rem;
}
.right {
  margin-top: 2.4rem;
  width: 75%;
  overflow: hidden;
  margin-left: 4rem;
}
.el-rate__icon {
  font-size: 0.01rem;
}
</style>
