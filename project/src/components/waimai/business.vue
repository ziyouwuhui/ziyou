<template>
    <div class="wrap">
       <div class="top">
           <router-link to="/result/1" class="top_qiantou">&lt;</router-link>
           <span>商家详情</span>
       </div>
       <div class="middle">
          <header class="middle_top">活动与属性</header>
            <ul class="middle_ul">
              <li class="middle_li" v-for="(item,index) in meNu" :key="index">
                <span class="middle_span":style="'background:#'+item.icon_color" >{{item.icon_name}}</span>
                <span class="middle_three">{{item.description}}</span>
              </li>
            </ul>
        <section class="middle_s">
          <router-link to="/##" class="food">
            <span class="left">食品监督安全公示</span>
            <span class="right">企业认证详情 ></span>
          </router-link>
          <div class="smile">
            <div class="smile_left">
              <img src="" alt="">
            </div>
            <div class="smile_right">
              <p>监督效果: <span>良好</span></p>
              <p>前插日期</p>
            </div>
          </div>
        </section>
        <div class="bottom">
          <div class="bottom_d"></div>
          <header class="middle_top">商家信息</header>
          <ul>
            <li class="p_li">
              <p>{{na.name}}</p>
              <p>地址: {{na.address}}</p>
              <p>营业时间 :  {{na.opening_hours}}</p>
              <p class="none_img_p"><span>营业执照</span>
                <span class="right1"  >></span>
              </p>
              <div><span>餐饮服务许可证</span>
                <el-button class="right2" @click="show = !show">></el-button>
                  <transition name="el-fade-in-linear">
                    <div v-show="show" class="none_img"> <img src="./img/主页.png" alt=""></div>
                  </transition>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>

</template>

<script>
    export default {
        name: "business",
        data(){
          return{
            meNu:null,
            na:'',
            show: false,
          }
        },
      created(){
          //"https://elm.cangdu.org/shopping/restaurant/1"
          let ap = "https://elm.cangdu.org/shopping/restaurant/"+this.$route.params.id;
          this.$http.get(ap).then((data)=>{
              this.meNu = data.data.supports;
              this.na = data.data;
              console.log("1111",this.na.address)
              console.log(this.meNu);
        });
      }
    }
</script>

<style scoped>
  .none_img_p:hover .none_img{display: block}
  .none_img{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.5);
    z-index: 111;
  }
  .none_img img{
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .right1,.right2{
    float: right;
    font-size: 0.25rem;
    color: gray;
  }
  .p_li>p{
    font-size: .18rem;
    margin: 0.1rem .08rem;
    padding: 0.2rem 0;
    color:gray ;
    border-bottom: 1px solid #f5f5f5 ;
  }
  .bottom_d{
    height: 0.2rem;
    width: 100%;
     background:#f5f5f5 ;
  }
  .smile{
    width: 100%;
    overflow: hidden;
    border-top:1px solid gainsboro ;
    margin-top: .2rem;
    padding-top: .2rem;
  }
  .smile_left{
    float: left;
    width: 50px;
    height: 50px;
    border: 1px solid greenyellow;
    border-radius: 50%;
  }
  .smile_right p{
    margin-top: 0.16rem ;
  }
  .smile_right{
    padding: .1rem;
    float: left;
    font-size: .15rem;
    color: #666;
  }
  .smile_right span{
    margin-left: 0.18rem;
    color: yellowgreen;
  }
  .middle_s{
    width: 100%;
    padding: .1rem;
  }
  .left{
    float: left;
    left: .1rem;
  }
  .right{
    position: absolute;
    float: right;
    right: 0.1rem;
    color: gray;
  }
  .food{
    padding: 0.05rem;
    font-size: .2rem;
    overflow: hidden;
  }
  .middle_li{
    padding: .14rem;
  }
  .middle_span{
    font-size: 0.1rem;
    padding: 0.06rem;
    border-radius: .1rem;
    color: white;
  }
  .middle_three{
    font-size: .18rem;
    color: #666;
    margin: 0.1rem 0 1rem .15rem;
  }
  .middle_top{
    font-size: .2rem;
    color: #333;
    line-height: .6rem;
    padding-left: .2rem;
    border-bottom: 1px solid #f1f1f1;
    margin-bottom: .15rem;
  }
  .wrap .middle{
    width: 100%;
    position: absolute;
    top: .51rem;
    z-index: 1;
  }
  .top{
    width: 100%;
    background: deepskyblue;
    padding: 0.15rem .125rem;
    overflow: hidden;
    font-size: 0.23rem;
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    top: 0;
    text-align: center;
    color: white;
  }
  .top_qiantou{
    color: white;
    font-size: 0.3rem;
    position: absolute;
    z-index: 1;
    top: 0.07rem;
    left: 0.02rem;
  }
</style>
