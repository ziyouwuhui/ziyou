<template>
  <div>
   

  </div>
</template>
<script>
export default {
  name: "fen",
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
    // test:function(){
    //   // alert("ok");
    //   alert(this.data.index);
      
    }
  };

</script>

<style scoped>

</style>