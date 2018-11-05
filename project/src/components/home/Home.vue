<template>
    <div class="div">
      <header class="head_top">
        <span class="head_logo">ele.me</span>
        <a href="#/login" class="head_login">
          <span class="login_span">登陆|注册</span>
        </a>
      </header>
      <nav class="city_nav">
        <div class="city_tip">
          <span>当前定位城市:</span>
          <span>定位不准时,请在城市列表中选择</span>
        </div>
        <a :href="address(id)" class="guess_city">
          <span>{{data.name}}</span>
          <i class="el-icon-arrow-right"></i>
        </a>
      </nav>
      <div class="hot_city_container">
          <h4 class="city_title">热门城市</h4>
          <ul class="citylistul clear">
            <router-link :to="'city/'+item.id" tag="li" v-for="(item, index) in data1" :key="index">{{item.name}}</router-link>
          </ul>
      </div>
      <div class="group_city_container">
        <ul class="letter_classify">
          <li class="letter_classify_li" v-for="(i,index) in sdic" :key="index">
            <h4 class="city_title">{{i}}  <span>(按字母排序)</span></h4>
            <ul class="groupcity_city_container citylistul clear">
              <router-link tag="li" :to="'city/'+item.id" v-for="(item, index) in data2[i]" :key="index">{{item.name}}</router-link>
            </ul>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Home",
      data: () => ({
        data:[],
        data1:[],
        data2:[],
        sdic:[],
        id:1
      }),
      methods:{
        address(id){
          return "#/city/"+id;
        }
      },
      //发请求
      created(){
        let api = "https://elm.cangdu.org/v1/cities?type=guess";
          this.$http.get(api).then((data)=>{
            this.data = data.data;
            this.id = data.data.id;
          });
          let api1 = "https://elm.cangdu.org/v1/cities?type=hot";
            this.$http.get(api1).then((data)=>{
              this.data1 = data.data;
            });
        let api2 = "https://elm.cangdu.org/v1/cities?type=group";
        this.$http.get(api2).then((data)=>{
          let dis = data.data;
          let sdic=Object.keys(dis).sort();
          this.data2 = dis;
          this.sdic = sdic;
        });
      }
    }
</script>

<style scoped>
  .div{
    background-color: #f3f3f3 !important;
    height: 6.67rem !important;
  }
.head_top{
  height: 0.57rem !important;
  background-color: #3190e8;
  color: white;
  line-height: 0.57rem;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
}
.head_top a:first-child{
  color: white;
}
  .head_logo{
    position: absolute;
    left: 0.1rem;
    font-size: .2rem;
  }
  .head_login{
    position: absolute;
    right: 0.1rem;
    color: #fff;
    font-size: .16rem;
  }
  .city_nav{
    padding-top: 0.55rem;
    border-top: 1px solid #e4e4e4;
    background-color: #fff;
    margin-bottom: 0.098rem;
  }
  .city_tip{
    display: flex;
    justify-content: space-between;
    line-height: 0.35rem;
    padding: 0 0.154rem;
  }
  .city_tip span:first-child{
    color: #666;
    font-size: 0.14rem;
  }
  .city_tip span:nth-child(2){
    font-size: 0.14rem;
    font-weight: 900;
    color: #9f9f9f;
  }
  .guess_city{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.39rem;
    padding: 0 0.154rem;
    border-top: 1px solid #e4e4e4;
    border-bottom: 2px solid #e4e4e4;
  }
  .guess_city span:first-child{
    color: #3190e8;
  }
  .guess_city i{
    color: #999;
  }
  .el-container{
    background-color: white;
    margin-bottom: 0.93rem;
  }
  .city_title{
    width: 100%;
    color: #666;
    font-weight: 400;
    text-indent: 0.16rem;
    border-top: 2px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    font-size: 0.14rem;
    line-height: 0.33rem;
    background-color: white;
  }
  .citylistul ul{
    background-color: white;
    overflow: hidden;
  }
  .citylistul li{
    background-color: white;
    float: left;
    width: 24.93%;
    text-align: center;
    padding: 0.1rem 0;
    border-right: 0.001rem solid gray;
    border-bottom: 0.001rem solid gray;
  }
  .hot_city_container{
    margin-bottom: 0.098rem;
    overflow: hidden;
  }
  .clear li:nth-child(4){
    border-right: 0;
  }
  .clear li:nth-child(8){
    border-right: 0rem;
  }
  .letter_classify .letter_classify_li{
    margin-bottom: 0.098rem;
    overflow: hidden;
  }
  .city_title span{
    color: #999;
    font-size: 0.13rem;
  }
  .letter_classify_li .groupcity_city_container li{
    color: #666;
  }
  .citylistul li{
    float: left;
    text-align: center;
    color: #3190e8;
    border-bottom: 0.001rem solid #e4e4e4;
    border-right: 0.001rem solid #e4e4e4;
    width: 21.4%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
