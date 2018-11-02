<template>
  <div>
         <div class="nav">
             
            <router-link :to="{name:'shoping'}" class="jian"><</router-link>
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
                    <input @keyup="listename" type="radio" name="radios" value="先生" v-model="param" ><label>先生</label>
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
                      <input type="text" placeholder=" 小区/写字楼/学校等">
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
                    <input @keyup="listename" type="text" placeholder="无/家/学校/公司" v-model="casual">
                    <!-- 搜素 -->
                </div>
             </div>
      </div>
      <router-link :to="{name:'xuanze'}" >
         <div class="buttom" @click="dianji()">
             确定
         </div>
      </router-link>
  </div>
</template>
<script>
export default {
  name: "add",
  data() {
    return {
      param: "1", //设置默认值为1，即设置第一个单选框为选中状态
      //  address:'',
      dizhi: localStorage.history,
      name: "",
      param: "",
      phone: "",
      Aaddress: "",
      casual: ""
    };
  },
  computed: {
    address() {
      return this.$store.state.address;
    }
  },
  created() {
    this.name = localStorage.username;
    this.phone = localStorage.phone;
    this.altephone = localStorage.altephone;
    this.wlabeldz = localStorage.wlabeldz;
    this.param = localStorage.param;
    //    console.log(this.dizhi)
    let ss = JSON.parse(this.dizhi);
    //    console.log(ss)
    if (this.dizhi != "") {
      //    console.log(this.dizhi)
    } else {
      console.log("123");
    }
  },
  methods: {
    listename() {
      localStorage.setItem("username", this.name);
      localStorage.setItem("phone", this.phone);
      localStorage.setItem("altephone", this.altephone);
      localStorage.setItem("wlabeldz", this.wlabeldz);
      localStorage.setItem("param", this.param);
    },
    dianji() {
      // allNewaddress
      this.$store.commit("allNewaddress", {
        name: this.name,
        param: this.param,
        phone: this.phone,
        address: this.Aaddress,
        casual: this.casual
        // $router.go()
      });
    }
  }
};
</script>
<style scoped>
.buttom {
  background: yellowgreen;
  border: 1px solid yellow;
  height: 0.6rem;
  text-align: center;
  margin: 0.1rem 0.1rem 0.1rem 0.1rem;
  line-height: 0.6rem;
  border-radius: 0.1rem;
  font-size: 0.3rem;
  color: white;
}
.phon {
  float: left;
  padding: 0.1rem 1rem 0.309rem 0;
}
.dizhi {
  overflow: hidden;
}
.dizhi_l div {
  margin-bottom: 0.1rem;
}
.dizhi_l {
  float: left;
  font-size: 0.23rem;
  padding: 0.1rem 0.4rem 0.309rem 0;
}
.dizhi {
  margin-top: 0.55rem;
  padding: 0.17rem 0 0.3rem 0.17rem;
  background: white;
}
.dizhi1,
.dizhi2,
.dizhi3 {
  padding: 0.17rem 0 0.3rem 0.17rem;
  background: white;
  overflow: hidden;
}
.msite_title {
  text-align: center;
  color: white;
  font-size: 0.25rem;
}
.jian {
  float: left;
  color: white;
  font-size: 0.4rem;
}
.nav {
  background: blue;
  position: fixed;
  text-align: center;
  line-height: 0.5rem;
  z-index: 100;
  left: 0;
  right: 0;
  top: 0;
  height: 0.566rem;
  width: 100%;
  box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, 0.1);
}
</style>
