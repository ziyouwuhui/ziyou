<template>
    <div>
       <h2>我是搜索</h2>
      <ul>
        <li v-for="(i,index) in meNu1" :key="index">
          <span>{{i.restaurant_id}}</span>
        </li>
      </ul>
      <Buttom></Buttom>

    </div>

</template>

<script>
  import Buttom from "./buttom"
    export default {
        name: "sousuo",
      data(){
        return{
          meNu1:[]
        }
      },
      components:{
            Buttom
      },
      created(){
        let datas = 'https://elm.cangdu.org/bos/v2/users/1/orders?limit=10&offset=0';
        this.$http.get(datas).then((data)=>{
          this.meNu1 = data.data;
        });
      }



  }
</script>

<style scoped>

</style>
