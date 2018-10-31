<template>
  <div>
     <div class="none_ul">
             </div>   


  </div>
</template>
<script>
export default {
  name: "fenright",
  data() {
    return {
      value:'',
      meNuL: {},
      speciesData: [],
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
  methods:{
    test:function(){
      // alert("ok");
      alert(this.i);
      
    }
  }
};
</script>

<style scoped>

</style>