<template>
   <div>
       <div class="nav">
            <router-link :to="{name:'shoping'}" class="shangjia"></router-link>
            <span class="hear">选择发票抬头</span>
        </div>
        <div class="kaifa">
            <div class="kaifa_l">
                <span>不需要开发票</span>
                <span class="kaifa_img">
                    <img src="./img/dok.png" alt="">
                </span>
            </div>
        </div>
         <router-link :to="{name:'shoping'}" class="shangjia">
              <div class="bottom">提交</div> 
         </router-link>
       
   </div>
</template>
<script>
        export default {
        name: "invoice",
        data(){
            return{     
            }
        },  
    }

</script>
<style scoped>
.kaifa_l .kaifa_img{
   float: right; 
   background: gray;
   border-radius:50%; 
   padding: .03rem;
}
.kaifa_img:hover {
  background: yellowgreen;  
}
.kaifa{
    margin-top: .6rem;
    padding: .2rem;
    color: gray;
    background: white;
}
.bottom{
    position: fixed;
    z-index: 120;
    left: 0;
    right: 0;
    top: 1.5rem;
    height: 0.4rem;
    width:100%;
    box-shadow: 0 -0.02667rem 0.05333rem rgba(0,0,0,.1);
    font-size: .24rem;
    padding: 10px 0;
    background-color:yellowgreen;
    color: white; 
    text-align: center;
    border-radius:.2rem; 
}


.nav{
    background: blue;
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    top: 0;
    height: 0.566rem;
    width:100%;
    text-align: center;
    box-shadow: 0 -0.02667rem 0.05333rem rgba(0,0,0,.1);
  }
  .shangjia{
    
    color: white;
    font-size: 0.35rem;
    position: absolute;
    bottom: 0.1rem;
   left: 0.3rem;
  }
  .hear{
    color: white;
    font-size: 0.25rem;
    line-height: .5rem;
  }
</style>
