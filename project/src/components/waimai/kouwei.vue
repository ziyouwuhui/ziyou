<template>
  <div>
       <div>
           <ul>
               <li v-for="(i,index) in meNu.remarks" :key="index">
                    {{i[1]}}
               </li>
           </ul>
       </div>
       <div class="bottom">提交</div>  
  </div>

</template>
<script>
    export default {
        name: "kouwei",
        data(){
            return{
                 param: '1' ,//设置默认值为1，即设置第一个单选框为选中状态
                 meNu:{},
            }
        },
        created(){
            let api_r = "https://elm.cangdu.org/v1/carts/1/remarks"
            this.$http.get(api_r).then((data)=>{
                this.meNu = data.data;
                console.log(data.data,"=========");
                // this.me = data.data.supports;
            
            });
      },  
    }

</script>
<style scoped> 
   
.bottom{
    position: fixed;
    z-index: 120;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.5rem;
    width:100%;
    box-shadow: 0 -0.02667rem 0.05333rem rgba(0,0,0,.1);
    font-size: .24rem;
    padding: 10px 0;
    background-color:yellowgreen;
    color: white; 
    text-align: center;
}


</style>
