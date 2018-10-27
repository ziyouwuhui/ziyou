<template>
     <div class="wrap">
          <div class="top">
              <router-link to="/" class="top-left"><</router-link>
              <span class="top-conter">甜品分类</span>
          </div>  
          <div class="botton">
               <div class="botton_t">
                   <div class="botton_t1" @click="change">分类</div>
                   <div class="botton_t2">分类</div>
                   <div class="botton_t3">分类</div>
               </div>  
          </div>
           
     </div>



</template>

<script>
export default {
  name: "Spinner",
  data() {
    return {
      meNuL: {},
      speciesData: []
    };
  },
  created() {
    let api = "https://elm.cangdu.org/shopping/v2/restaurant/category";
    this.$http.get(api).then(data => {
      this.meNuL = data.data;
      this.i = data.data.sub_categories;
      console.log(data);
    });
  }, 
   methods: {
     change(ev) {
        this.$router.push('/Spinner/fen');
    }
  }
};
</script>

<style scoped>
.lili2 .ww .count{
    float: right;
}
.lili2 .ww{
    overflow: hidden;
}
.lili2 div{
    padding: .125rem;
}
#root2{
    border: 1px solid red;
    /* padding: 0.1rem; */
    background: #f1f1f1;
    color: gray;
    font-size: 0.1rem;
}
.lili1{
    border: 1px solid blueviolet;
    padding: 0.1rem;
    background: #f1f1f1;
    color: gray;
    font-size: 0.1rem;
}
.right_one{
    float: left;
    top:1rem;
    flex: 1;
}
.left_one{
  float: left;
  flex: 1;
}
.if_1 {
  border: 1px solid grey;
  border-radius: 50%;
  background: grey;
  color: white;
  padding: 0.04rem;
}
.count_if {
  float: right;
  margin-left: 0.1rem;
  margin-top: 0.05rem;
}
.index_1 img {
  width: 0.2rem;
  margin-right: 0.1rem;
  vertical-align: middle;
}
#root1 li:nth-child(1){
    padding: 0.125rem;
}
.lili {
  border: 1px solid red;
  padding: 0.1rem;
  background: #f1f1f1;
  color: gray;
  font-size: 0.1rem;
}
.none_ul {
  border: 1px solid red;
  background-color: #fff;
  position: fixed;
  top: 1.1rem;
  left: 0;
  width: 100%;
  display: flex;
  z-index: 13;
  overflow: hidden;
}
.botton_t1,
.botton_t2,
.botton_t3 {
  width: 1.5rem;
  float: left;
  padding-left: 0.01rem;
  padding: 0.06rem 0;
  text-align: center;
  margin: 0.1rem 0;
}
.botton_t2 {
  border-left: 1px solid gray;
  border-right: 1px solid gray;
}
.botton {
  border: 1px solid red;
  background-color: #fff;
  position: fixed;
  top: 0.6rem;
  right: 0;
  left: 0;
  width: 100%;
  display: flex;
  z-index: 13;
  overflow: hidden;
}
.top {
  background-color: #3190e8;
  width: 100%;
  padding: 0.125rem 0.125rem;
  overflow: hidden;
  font-size: 0.15rem;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  top: 0;
  height: 0.35rem;
  text-align: center;
  font-size: 0.3rem;
  color: white;
}

.top-left {
  color: white;
  font-size: 0.35rem;
  position: absolute;
  left: 0.3rem;
}

</style>