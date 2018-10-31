<template>
  <div>
    <section class="left">
      <ol>
        <li class="left_li" v-for="(ite,index) in meNu" :key="index">
          <span class="li_s">{{ite.name}}</span>
        </li>
      </ol>
    </section>
    <section class="right">
      <div class="right_top">
        <span class="right_top_D">热小胖</span>
        <span class="right_top_B">是的分身术</span>
        <span class="right_top_dian">...</span>
      </div>
      <ul v-for="(it,index) in meNu" :key="index">
        <router-link tag="li" :to="'/classification/'+it.id" style="padding-bottom: 0.1rem " class="li_t">
          <!--src="//elm.cangdu.org/img/1661a8e8aa318572.png">-->
          <div class="right_li_id"  v-for="(child,i) in it.foods" :key="i">
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
              </p>
            </div>
          </div>
        </router-link>
      </ul>
    </section>
  </div>
</template>

<script>
    export default {
        name: "resulr_li",
      data(){
        return{
          meNu:null,
          id:this.$route.params.id,
        }
      },
      created(){
        console.log(this.id);
        let menu = "https://elm.cangdu.org/shopping/v2/menu?restaurant_id="+this.id;
        this.$http.get(menu).then((data)=>{
          this.meNu = data.data;
          console.log(data.data);
        });
      }
    }
</script>

<style scoped>
  .right_li_id{
    background-color: #fff;
    padding: .2rem .0rem;
    border-bottom: 1px solid #f8f8f8;
    position: relative;
    overflow: hidden
  }
  .right_li_right h3{
    font-size: .2rem;
    color: #333;
    margin-bottom: .1rem;
    display: inline-block;
  }
  .right_li_right .h_x{
    float: right;
    border: 1px solid  rgb(240, 115, 115);
    border-radius:.23rem ;
    font-size: 0.001rem;
  }
  .h_x_if{
    color: rgb(240, 115, 115);
    /*line-height: .005rem;*/
  }
  .right_li_right .right_fen{
    font-size: .08rem;
    color: #999;
    line-height: 0.08rem;
    margin-bottom: .1rem;
  }
  .right_li_right .right_p span{
    font-size: .08rem;
    color: #333;
  }
  .right .right_li_right{
    float: left;
    width: 75%;
    margin-left: 0.1rem;
  }
  .right_li_id .right_li_l{
    float: left;
    text-align: center;
  }
  .right_li_id img{
    width: 0.5rem;
    height: 0.5rem;
    display: block;
    margin-top: 0.1rem;
    margin-left: 0.15rem;
  }
  .right .right_top{
    background: #ededed;
    padding: 0.1rem 0 0.1rem 0.1rem;
  }
  .right .right_top_D{
    font-size: .25rem;
    color: #666;
    font-weight: 700;
  }
  .right .right_top_B{
    font-size: .08rem;
    color: #999;
    width: 30%;
    overflow: hidden;
    margin-left: 0.01rem;
  }
  .right_top .right_top_dian{
    float: right;
  }
  .left_li{
    padding: .3rem 0rem .3rem .125rem;
    /*text-align: center;*/
    border:1px solid gainsboro;
    box-sizing: border-box;
    position: relative;
    color: gray;
    background: #ededed;
    font-size: .18rem;
  }
  .left_li:hover{
    border-left:4px solid #4e6cff ;
  }
  .left{
    position: fixed;
    left: 0;
    /*top: 100px;*/
    z-index: 5;
    /*border: 2px solid red;*/
    margin-top: 2.4rem;
  }
  .right{
    margin-top: 2.4rem;
    width: 75%;
    overflow: hidden;
    margin-left: 4rem;
  }

  .el-rate__icon{
    font-size: .01rem;
  }
</style>
