<template>
  <div class="buttom">
        <router-link :to="{name:'mstie'}" tag="div" :span="6" class="col">
          <div class="el-icon-goods btn"></div>
          <p>外卖</p>
        </router-link>
        <router-link to="/sousuo" tag="div" :span="6" class="col">
          <div class="el-icon-goods btn"></div>
          <p>搜索</p>
        </router-link>
        <router-link to="/order" tag="div" :span="6" class="col">
          <div class="el-icon-goods btn"></div>
          <p>订单</p>
        </router-link>
        <router-link to="/pro" tag="div" :span="6" class="col">
          <div class="el-icon-goods btn"></div>
          <p>我的</p>
        </router-link>
    <router-view></router-view>
  </div>

</template>

<script>
    export default {
        name: "buttom"
    }
</script>

<style scoped>
  .buttom{
    background-color: #fff;
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: .5rem;
    display: -ms-flexbox;
    display: flex;
    box-shadow: 0 -0.02667rem 0.05333rem rgba(0,0,0,.1);
  }
  .buttom .col{
    flex: 1;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
  }
  .buttom .col .btn{
    margin-top: .1rem;
  }
  .buttom .col p{
    color: #666;
    font-size: .14rem;
  }
</style>
