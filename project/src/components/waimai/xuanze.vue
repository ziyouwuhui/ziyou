<template>
  <div>
        <div class="nav">
            <router-link :to="{name:'shoping'}" class="jian"><</router-link>
            <router-link to="##" class="msite_title">
              <span>选择地址</span>
            </router-link>
        </div>
        <div class="bottom">
            <router-link :to="{name:'add'}" class="shangjia">+</router-link>
              <span  class="msite_t">新增加收获地址</span>
        </div>

        <div style="margin-top:.56rem">
            <ul>
                <li v-for="(i,index) in arr" :key="index">
                   <p>{{i.name}}</p>
                   <p>{{i.param}}</p>
                   <p>{{i.phone}}</p>
                   <p>{{i.Aaddress}}</p>
                   <p>{{i.casual}}</p>
                </li>
            </ul>
            <p>{{address}}</p>
        </div>
  </div>
</template>
<script>
    export default {
        name: "xuanze",
        data(){
            return{
                arr:[],

            }
        },
        created() {
          this.arr =  this.$store.state.addAddress;
            console.log(this.$store.state.addAddress)
        },
        computed:{
           address() {
                return this.$store.state.address;
              }
        }
    }

</script>
<style scoped>
.jian{
    float: left;
    color: white;
    font-size: .4rem;
}
.nav{
    background: blue;
    position: fixed;
    text-align: center;
    line-height: .5rem;
    z-index: 100;
    left: 0;
    right: 0;
    top: 0;
    height: 0.566rem;
    width:100%;
    box-shadow: 0 -0.02667rem 0.05333rem rgba(0,0,0,.1);
  }
  .bottom{
    position: fixed;
    z-index: 100;
    text-align: center;
    left: 0;
    right: 0;
    bottom: .5rem; 
  }
  .shangjia{
      width: 1rem;
      height: 1rem;
      border: 1px solid blue;
      color: blue;
      border-radius:50%; 
      padding: .06rem .1rem .06rem .1rem;
          margin-right: .1rem;
  }
.msite_t{
     font-size: .25rem;
     color: blue
}
  .msite_title{
      text-align: center;
      color: white;
      font-size: .25rem;
  
  }
</style>
