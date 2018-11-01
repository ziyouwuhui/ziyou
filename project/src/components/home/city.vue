<template>
    <div>
      <div class="city_container">
        <header class="head_top">
          <div class="head_goback">
            <span @click="change" class="icon_left">&lt;</span>
          </div>
          <div class="title_head ellipsis">
            <span class="title_text">{{name}}</span>
          </div>
          <a href="#/home" class="change_city">切换城市</a>
        </header>
        <form class="city_form" target="id_iframe">
          <div>
            <input type="search" name="keyword" placeholder="输入学校,商务楼,地址" class="city_input input_style" v-model="value">
          </div>
          <div>
            <input type="button" class="city_submit input_style" @click="submit" value="提交">
          </div>
        </form>
        <iframe id="id_iframe" name="id_iframe" style="display: none;">
        </iframe>
        <div v-if="off == true">
          <header class="pois_search_history">搜索历史</header>
          <ul class="getpois_ul">
            <router-link :to="{path:'/mstie',query:{geohash:i.geohash,address:i.address}}" tag="li" v-for="(i,index) in history" :key="index">
              <h4 class="pois_name ellipsis">{{i.name}}</h4>
              <p class="pois_address ellipsis">{{i.address}}</p>
            </router-link>
          </ul>
          <footer class="clear_all_histroy" @click="clear" v-if="on">清空所有</footer>
        </div>
        <div v-else-if="off == false">
          <!--搜索列表-->
          <!--  -->
          <ul class="getpois_ul">
            <router-link  tag="li" :to="{path:'/mstie',query:{geohash:item.geohash,address:item.address}}" v-for="(item,index) in names" :key="index" @click.native="addHis(index)">
              <h4 class="pois_name ellipsis">{{item.name}}</h4>
              <p class="pois_address ellipsis">{{item.address}}</p>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

    export default {
        name: "city",
        data(){
          return{
            name:'',
            data:[],
            value:'',
            names:[],
            off:true,
            history:[],
            on:false
          }
        },
        methods:{
            submit(){
              this.off = false;
              let api1 = "https://elm.cangdu.org/v1/pois?city_id="+this.$route.params.id+"&keyword="+this.value;
              this.$http.get(api1).then((data)=>{
                this.names = data.data;
              });
            },
            addHis(index){
                this.off = true;
                this.on = true;
                this.history.push(this.names[index]);
                localStorage.setItem('history',JSON.stringify(this.history));
            },
            clear(){
              this.history = [];
              this.on = false;
            },
            change(e){
              this.$router.go(-1);
            },
            seahis(){
              if(this.history != []){
                this.history=JSON.parse(localStorage.getItem('history'));
              }
            }
        },
        created(){
          this.seahis();
          let api = "https://elm.cangdu.org/v1/cities/"+this.$route.params.id;
          this.$http.get(api).then((data)=>{
            this.name = data.data.name;
          });
        }
    }
</script>

<style scoped>
  .city_container{
    overflow: hidden;
  }
.head_top{
  background-color: #3190e8;
  width: 100%;
  height: 0.57rem;
  margin-bottom: 0.1rem;
}
  .head_goback{
    left: 0.16rem;
    width: .6rem;
    height: 0.3rem;
    line-height: 0.53rem;
    margin-left: .1rem;
  }
  .title_head{
    position: absolute;
    top: .28rem;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 50%;
    color: white;
    text-align: center;
  }
  .title_head span{
    font-weight: 700;
    font-size: 0.2rem;
  }
  .change_city{
    right: .16rem;
    font-size: .14rem;
    color: white;
    position: absolute;
    top: .25rem;
    transform: translateY(-50%);
  }
  .head_goback .icon_left{
    font-size: .34rem;
    color: white;
  }
  .city_form{
    background-color: #fff;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    padding-top: .093rem;
  }
  .city_form div{
    width:90%;
    margin: 0 auto;
    text-align: center;
  }
  .city_form div .city_input{
    border: 1px solid #e4e4e4;
    padding: 0 .08rem;
    font-size: .16rem;
    color: #333;
  }
  .city_form div .input_style{
    border-radius: .04rem;
    margin-bottom: .093rem;
    width: 100%;
    height: 0.314rem;
  }
  .city_form div .city_submit{
    background-color: #3190e8;
    font-size: .16rem;
    color: #fff;
  }
  .pois_search_history{
    border-bottom: 1px solid #e4e4e4;
    padding: 0.03rem 0 0.03rem 0.11rem;
    font-size: 0.12rem;
    color:#82848a;
  }
  .getpois_ul{
    background-color: white;
    /*border-top: 1px solid #e4e4e4;*/
  }
  .getpois_ul li{
    margin: 0 auto;
    padding-top: 0.15rem;
    border-bottom: 1px solid #e4e4e4;
  }
  .getpois_ul li .pois_name{
    /*margin: 0 auto;*/
    margin: 0 0.18rem 0.12rem;
    width: 90%;
    font-size: .15rem;
    color: #333;
  }
  .ellipsis{
    overflow: hidden;
    /*text-overflow: ellipsis;*/
    /*white-space: nowrap;*/
  }
  .getpois_ul li .pois_address{
    width: 90%;
    margin: 0 0.18rem 0.12rem;
    font-size: .12rem;
    color: #999;
  }
  .clear_all_histroy{
    background-color: white;
    color: #3190e8;
    font-size: .16rem;
    font-weight: 700;
    text-align: center;
    line-height: 0.5rem;
    height: 0.47rem;
  }
</style>
