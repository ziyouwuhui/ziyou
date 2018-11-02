<template>
  <div class="search_page paddingTop">
    <header class="head_top">
      <div class="head_goback">
          <span @click="change" class="icon_left">&lt;</span>
      </div>
      <div class="title_head ellipsis">
          <span class="title_text">搜索</span>
      </div>
    </header>
     <form action="" class="search_form">
          <input class="input__inner" placeholder="请输入商家或美食名称" v-model="inputV">
          <input type="submit" class="search_submit" value="提交" @click.prevent="search">
        </form>
        <div v-if="off == true">
          <ul class="getpois_ul" v-if="show == true">
            <li v-for="(item,index) in restaurants" :key="index" @click="add(index)">
              <h4 class="pois_name ellipsis">{{item.name}}</h4>
              <p class="pois_address ellipsis">{{item.address}}</p>
            </li>
          </ul>
          <div class="search_none" v-else-if="show == false">很抱歉! 无搜索结果</div>
        </div>
        <div class="search_history" v-else-if="off == false">
          <h4 class="history_title">搜索历史</h4>
          <ul>
            <li class="history_list" v-for="(h,i) in histroy" :key="i">
              <span class="history_text ellipsis">{{h.name}}</span>
              <i class="el-icon-close" @click="clearone(i)"></i>
            </li>
          </ul>
          <div class="clear_history" @click="clear" v-if="on">清空搜索历史</div>
        </div>
        <div class="food_guide">
            <Buttom></Buttom>
        </div>
  </div>
</template>

<script>
import Buttom from "../waimai/buttom"
    export default {
        name: "sousuo",
        components:{
           Buttom
       },
        data(){
            return{
              inputV:"",
              geohash:"34.74725,113.624931",
              restaurants:[],
              show:true,
              off:false,
              histroy:[],
              on:false
            }
        },
        methods:{
          search(){
            let api = "https://elm.cangdu.org/v4/restaurants?geohash="+this.geohash+"&keyword="+this.inputV;
            if(this.inputV != ''){
              this.off = true;
              this.$http({
                method:'get',
                url:api
              }).then((data)=>{
                console.log('111111',data);
                if(data.data != null){
                    this.restaurants = data.data;
                    this.show = this.restaurants.length == 0 ? false : true;
                }
                
              })
            }
          },
          add(index){
            console.log(this.restaurants[index]);
            this.histroy.push(this.restaurants[index]);
            localStorage.setItem('foodshistory',JSON.stringify(this.history));
            this.off = false;
            this.on = true;
            this.inputV = '';
            // console.log(this.history);
          },
          clear(){
            this.histroy = [];
            this.on = false;
          },
          clearone(index){
            this.histroy.splice(index,1);
            if(this.histroy.length == 0){
              this.on = false;
            }
          },
          change(e){
            this.$router.go(-1);
          },
          foodshis(){
            if(this.history != []){
                this.history=JSON.parse(localStorage.getItem('foodshistory'));
            }
          }
        }
    }
</script>

<style scoped>
  .search_page{
    /* background-color: #f3f3f3 !important; */
    margin-bottom: .46rem;
  }
  .paddingTop{
    padding-top: .45rem;
  }
  .head_top{
    background-color: #3190e8;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: .57rem;
    line-height: 0.5rem;
  }
   .head_goback{
    left: 0.16rem;
    width: .6rem;
    height: 0.3rem;
    margin-left: .1rem;
  }
  .title_head{
    position: absolute;
    /* top: .25rem; */
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
  .head_goback .icon_left{
    font-size: .34rem;
    color: white;
  }
  .title_text{
    color: white;
    font-size: 0.2rem;
    font-weight: 700;
  }
  .icon_left{
    float: left;
    color: white;
    font-size: 0.28rem;
  }
  .search_form{
    background-color: white;
    display: flex;
    padding: .24rem .14rem .14rem;
    border-bottom: 1px solid #f3f3f3;
  }
  .input__inner{
    flex: 4;
    color: black !important;
    background-color: #f2f2f2 !important;
  }
  .search_submit{
    flex: 1;
    margin-left: 0.045rem;
    background-color: #3190e8;
    color: white;
    font-size: 0.16rem;
    font-weight: 700;
    padding: 0.075rem 0.2rem;
    border-radius: 0.035rem;
  }
  .search_none{
    background-color: white;
    font-size: .15rem;
    text-align: center;
    line-height: 0.35rem;
    height: 0.4rem;
    color: black;
    margin-top: 0.03rem;
  }
  .history_title{
    color: #666;
    font-weight: 700;
    font-size: 0.13rem;
    line-height: 0.5rem;
    background-color: #f3f3f3;
    text-indent: 0.1rem;
  }
  .history_list{
    background-color: white;
    height: 0.46rem;
    border-bottom: 1px solid #f3f3f3;
    font-size: .16rem;
    padding: 0 0.1rem;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
  }
  .history_text{
    display: inline-block;
    width: 80%;
  }
  .el-icon-close{
    font-weight: 700;
    color: gray;
  }
  .clear_history{
    background-color: white;
    color: #3190e8;
    font-size: .16rem;
    font-weight: 700;
    text-align: center;
    line-height: 0.5rem;
    height: 0.47rem;
  }
  .getpois_ul{
    background-color: white;
    border-top: 1px solid #e4e4e4;
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
  .food_guide{
    /* background-color: #fff; */
    position: fixed;
    z-index: 100;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .65rem;
    display: flex;
  }
</style>
