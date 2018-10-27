<template>
  <div>
     <div class="none_ul">
               <div class="left_one">
                    <ul id="root1">
                       <li class="lili" v-for="(item,index) in meNuL" :key="index">
                           <span class="index_1" v-if="item.id != 260"> 
                               <img :src="'https://fuss10.elemecdn.com/'+item.image_url+'.png'">
                           </span>
                         <span>{{item.name}}</span> 
                          <!-- <span>{{item.sub_categories}}</span>  -->
                         <span class="count_if">
                            <span class="if_1"> {{item.count}}</span>
                            &nbsp;&nbsp;>
                         </span>
                         
                       </li>
                </ul>
               </div>
                <div class="right_one">
                    <ul id="root2">
                       <li class="lili2" v-for="(item,index) in meNuL" :key="index">
                         <div v-for="(item2,cindex) in item.sub_categories" :key="cindex" class="lili1" v-if="item.id != item2.id">
                              <span v-if="item2.level != 1" class="ww">
                                    <span>{{item2.name}}</span>
                                    <span class="count">{{item2.count}}</span> 
                              </span>
                               <!-- <span class="count_if">
                              <span > </span>
                            &nbsp;&nbsp; >
                         </span> -->
                         </div>
                         
                       </li>
                </ul>
                </div>
            </div> 


  </div>
</template>
<script>
export default {
  name: "fen",
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
      //   for (let v of Object.values(data.data.data.sub_categories)) {
      //           this.speciesData = v || [];
      //   }
      //   console.log('000000000000000000000',this.speciesData,v);
    });
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
</style>