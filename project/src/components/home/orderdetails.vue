<template>
<div class="order_detail_page">
   <header class="head_top">
        <div class="head_goback">
          <span @click="change" class="icon_left">&lt;</span>
        </div>
        <div class="title_head ellipsis">
          <span class="title_text">订单详情</span>
        </div>
    </header>

</div>
</template>
<script>
export default {
  name:'orderdetails',
  data(){
      return{

      }
  },
  methods:{
    change(e){
      this.$router.go(-1);
    }
  }
}
</script>
<style scoped>
.order_detail_page{
    background-color: #f1f1f1;
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

