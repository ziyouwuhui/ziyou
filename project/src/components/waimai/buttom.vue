<template>
  <div class="buttom">
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="3">
        <div class="grid-content bg-purple" style="text-align: center">
          <router-link to="/">外卖</router-link>

        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple-light" style="text-align: center">
          <router-link to="/sousuo">搜索</router-link>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple" style="text-align: center">
          <router-link to="/##">订单</router-link>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple" style="text-align: center">
          <router-link to="/##">我的</router-link>
        </div>
      </el-col>
    </el-row>
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
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.5rem;
    width:100%;
    box-shadow: 0 -0.02667rem 0.05333rem rgba(0,0,0,.1);
    font-size: .24rem;
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
