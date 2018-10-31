<template>
  <div>
    <div class="order_page">
       <header class="head_top">
        <div class="head_goback">
          <span @click="change" class="icon_left">&lt;</span>
        </div>
        <div class="title_head ellipsis">
          <span class="title_text">订单列表</span>
        </div>
      </header>
      <ul class="orderlist_ul">
        <li class="orderlist_li" v-for="(i,index) in orders" :key="index">
          <!-- //elm.cangdu.org/img/166584c036319076.jpg -->
          <img :src="'//elm.cangdu.org/img/'+i.restaurant_image_url" alt="" class="listimg">
          <div class="item_r">
              <div class="item_rtop">
                <div class="top_l">
                  <h4 class="ellipsis">
                    <span>{{i.restaurant_name}}</span>
                    <span>&gt;</span>
                  </h4>
                  <p class="order_time">{{i.formatted_created_at}}</p>
                </div>
                <div class="top_status">{{subtitle}}</div>
              </div>
              <div class="item_basket">
                <p class="order_name ellipsis">123123-默认</p>
                <p class="order_amount">￥26310.00</p>
              </div>
              <div class="item_again">
                <div class="page">
                  <span class="rem_time">去支付(还剩{{time}})</span>
                   <div class="alet_container" id="alcontainer">
                      <div class="tip_text_container">
                          <div class="tip_icon">
                              <span class="span1"></span>
                              <span class="span2"></span>
                          </div>
                          <p class="tip_text">支付超时</p>
                          <div class="confrim" @click="confirm()">确认</div>
                      </div>
                    </div>
                </div>
                <span class="buy_again" id="buy_again">再来一单</span>
              </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name:'order',
  data(){
    return{
      orders:[],
      subtitle:'等待支付',
      time:null
    }
  },
  methods:{
    change(e){
      this.$router.go(-1);
    },
    getOrderlist(){
      let api = "https://elm.cangdu.org/bos/orders?offset=0&limit=20";
      this.$http({
        method:'get',
        url:api
      }).then((data)=>{
        this.orders = data.data;
      });
    },
    confirm(){
      let errshow = document.getElementById('alcontainer');
      errshow.style.display = "none";
    }
  },
  created(){
      this.getOrderlist();
       let _this = this;
       let buyspan = document.getElementById('buy_again');
        function count(times) {
            var timer = null;
            timer = setInterval(function () {
                var minute = 0,
                    second = 0;
                if (times > 0) {
                    minute = Math.floor(times / 60);
                    second = Math.floor(times) - (minute * 60);
                }
                if (second <= 9) {
                    second = '0' + second;
                };
                times--;
                _this.time = minute + '分' + second + '秒';
            }, 1000);
            if (times <= 0) {
                clearInterval(timer);
                this.subtitle = '支付超时';
                buyspan.style.display = 'block';
            }else {
               this.subtitle = '等待支付';
               buyspan.style.display = 'none';
            }
        }
        count(900);
  }
}
</script>
<style scoped>
  #alcontainer{
      display:none;
  }
  .confrim{
    font-size: .2rem;
    color: #fff;
    font-weight: 700;
    margin-top: .2rem;
    background-color: #4cd964;
    width: 100%;
    text-align: center;
    line-height: .5rem;
    border: 1px;
    border-bottom-left-radius: .15rem;
    border-bottom-right-radius: .15rem;
  }
  .tip_text{
    font-size: .2rem;
    color: #333;
    line-height: .5rem;
    text-align: center;
    margin-top: .2rem;
    padding: 0 .8rem;
  }
  .tip_icon .span2{
    width: .05rem;
    height: .05rem;
    border: 1px;
    border-radius: 50%;
    margin-top: .1rem;
    background-color: #f8cb86;
  }
  .tip_icon .span1{
      width: .03rem;
      height: .44rem;
      background-color: #f8cb86;
  }
  .tip_text_container .tip_icon {
    width: .78rem;
    height: .78rem;
    border: .045rem solid #f8cb86;
    border-radius: 50%;
  }
  .tip_text_container{
    position: absolute;
    top: 30%;
    left: 15%;
    background-color: #fff;
    border: 1px;
  }
  .tip_text_container, .tip_text_container .tip_icon {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .alet_container{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 200;
  }
  .item_again .buy_again{
    font-size: .18rem;
    color: #3190e8;
    border: 1px solid #3190e8;
    padding: .03rem .06rem;
    border-radius: .05rem;
    display: none;
  }
  .item_again .page .rem_time{
    font-size: .18rem;
    color: orange;
    padding: .03rem .06rem;
    border: 1px solid orange;
    border-radius: .05rem;
  }
  .item_again{
    text-align: right;
    line-height: .52rem;
    
  }
  .item_basket .order_amount{
    font-size: .18rem;
    color: #f60;
    font-weight: 700;
  }
  .item_basket .order_name{
    color: #666;
    width: .58rem;
    font-size: .18rem;
  }
.item_basket{
  display: flex;
  justify-content: space-between;
  line-height: .58rem;
  border-bottom: .01rem solid #f5f5f5;
}
.ellipsis{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item_rtop .top_status{
  float: right;
}
.top_l .order_time{
  font-size: .16rem;
  color: #999;
  line-height: .16rem;
}
.top_l h4 span:nth-child(2){
  color: #999;
}
.top_l h4{
  font-size: .24rem;
  width: 2.5rem;
}
.item_rtop .top_l{
  float: left;
}
.item_rtop {
    overflow: hidden;
    padding-bottom: .098rem;
    border-bottom: .01rem solid #f5f5f5;
}
.item_top{
 
  display: flex;
  justify-content: space-between;
}
.item_r{
  float: right;
  width: 83%;
}
 .listimg{
    width: .58rem;
    height: .58rem;
    margin-right: .12rem;
 }
.orderlist_ul .orderlist_li{
  background-color: white;
  margin-bottom: .14rem;
  padding: .19rem .19rem 0;
  overflow: hidden;
}
.orderlist_ul {
  background-color: #f1f1f1;
}
.order_page{
  background-color: #f1f1f1;
  margin-bottom: .57rem;
}
 .head_top{
    background-color: #3190e8;
    width: 100%;
    height: 0.57rem;
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
  .head_goback .icon_left{
    font-size: .34rem;
    color: white;
  }
</style>


