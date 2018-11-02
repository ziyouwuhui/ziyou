<template>
  <div>
         <div class="nav">
            <router-link :to="{name:'shoping'}" class="jian"></router-link>
            <span class="msite_title">添加地址</span>
         </div>
         <div class="dizhi">
            <div class="phon">
                <span>联系人</span>
                </div>
             <div class="dizhi_l">
                   <div>
                    <input @keyup="listename" type="text" placeholder="你的名字" v-model="name">
                   </div>
                    <div class="sex">
                    <input @keyup="listename" type="radio" name="radios" value="先生" v-model="param"><label>先生</label>
                    <input @keyup="listename" type="radio" name="radios" value="女士" v-model="param"><label>女士</label>
                    </div>
             </div>
         </div>
        <div class="dizhi1">
            <div class="phon">
                <span>联系电话</span>
                </div>
             <div class="dizhi_l">
                <div>
                    <input @keyup="listename" type="text" placeholder="你的手机号" v-model="phone">
                </div>
                <div class="sex">
                    <input @keyup="listename" type="text" placeholder="备选电话" v-model="altephone">
                </div>
             </div>
         </div>
         <div class="dizhi2">
            <div class="phon">
                <span>送餐地址</span>
                </div>
             <div class="dizhi_l">
                <div>
                    <!-- 搜素 -->
                   <router-link :to="{name:'cityss'}">
                       小区/写字楼/学校等
                   </router-link>
                </div>
                <div class="sex">
                    <input type="text" placeholder="详细地址（如门牌号等）"  :value="address">
                </div>
                
             </div>
         </div>
         <div class="dizhi3">
            <div class="phon">
                <span>标签</span>
                </div>
             <div class="dizhi_l">
                <div>
                    <input @keyup="listename" type="text" placeholder="无/家/学校/公司" v-model="wlabeldz">
                    <!-- 搜素 -->
                   <!-- <router-link :to="{}">
                       无/家/学校/公司
                   </router-link> -->
                </div>
             </div>
      </div>
      <div class="buttom">
          确定
      </div>
  </div>
</template>
<script>
    export default {
        name: "add",
        data(){
            return{
                 param: '' ,//设置默认值为1，即设置第一个单选框为选中状态
                //  address:'',
                 dizhi:localStorage.history,
                 name:'',
                 phone:'',
                 altephone:'',
                 wlabeldz:''
            }
        },
        computed:{
            address(){
                return this.$store.state.address;
            }
        },
       created() {
           this.name = localStorage.username
           this.phone = localStorage.phone
           this.altephone = localStorage.altephone
           this.wlabeldz = localStorage.wlabeldz
           this.param = localStorage.param
        //    console.log(this.dizhi)
           let ss =JSON.parse(this.dizhi);
        //    console.log(ss)
           if(this.dizhi !=''){
            //    console.log(this.dizhi)
           }else{
               console.log('123');
           }
          
       },
       methods:{
           listename(){
               localStorage.setItem("username",this.name)
               localStorage.setItem("phone",this.phone)
               localStorage.setItem("altephone",this.altephone)
               localStorage.setItem("wlabeldz",this.wlabeldz)
               localStorage.setItem("param",this.param)
           }
       }
    }

</script>
<style scoped>
.buttom{
    background: yellowgreen;
    border: 1px solid yellow;
    height: .6rem;
    text-align: center;
    margin: .1rem .1rem .1rem .1rem;
    line-height: .6rem;
    border-radius:.1rem; 
    font-size: .3rem;
    color: white;
}
.phon{
   float: left;
    padding: .1rem 1rem .309rem 0;
}
.dizhi{
    overflow: hidden;
}
.dizhi_l div{
    margin-bottom: .1rem;
}
.dizhi_l{
    float: left;
       font-size: .23rem;
       padding: .1rem .4rem .309rem 0;
}
.dizhi{
    margin-top:.55rem ;
    padding: .17rem 0 .3rem .17rem;
    background: white;
   }
.dizhi1,.dizhi2,.dizhi3{
   padding: .17rem 0 .3rem .17rem;
    background: white;
     overflow: hidden;
}
 .msite_title{
      text-align: center;
      color: white;
      font-size: .25rem;
  
  }
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
</style>
