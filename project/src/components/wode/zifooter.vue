<template>
<div class="zifoot">
    <footer>
        <router-link class="bottom" to="/zwaimai">
            <p>外卖</p>
        </router-link>
        <router-link class="bottom" to="/zsousuo">
            <p>搜索</p>
        </router-link>
        <router-link class="bottom" to="/zdingdan">
            <p>订单</p>
        </router-link>
        <router-link class="bottom" to="/zwode">
            <p>我的</p>
        </router-link>
    </footer>
</div>
</template>

<script>
export default {
  name: "zifooter"
};
</script>

<style scoped>

.zifoot {
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
 
}
footer{
     display: flex;
  justify-content: space-around;
  padding: 1rem 0rem;
}
.bottom {
      font-size: 1rem;
  color: black;
}
</style>
