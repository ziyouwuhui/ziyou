<template>
  <div>
       <div class="span">
           <div>
                <span>不要辣</span>
                <span>少点辣</span>
                <span>多点辣</span>
           </div>
           <div>
                <span>不要香菜</span>
                <span>不要洋葱</span>
                <span>多点醋</span>
                <span>多点葱</span>
           </div>
          <div>
                <span>去冰</span>
                <span>少冰</span>
          </div>
       </div>
       <router-link :to="{name:'shoping'}">
            <div class="bottom">提交</div> 
           </router-link> 
  </div>

</template>
<script>
export default {
  name: "kouwei",
  data() {
    return {
      param: "1", //设置默认值为1，即设置第一个单选框为选中状态
      meNu: {}
    };
  }
};
</script>
<style scoped>
.span{
    margin-top: 2rem;
}
.span div {
  margin-bottom: .8rem;
  margin-left: .3rem;
  font-size: .2rem;
}
.span div span{
    border: 1px solid yellowgreen;
    padding: .1rem;
    border-radius:.2rem; 
}
.span div span:hover{
    background: orchid;
    color: yellow;
}
.bottom {
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
  background-color: yellowgreen;
  color: white;
  text-align: center;
}
</style>
