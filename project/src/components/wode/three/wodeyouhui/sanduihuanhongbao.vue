<template>
<div class="wrap">
    <Header></Header>
   <form action="">
       <imput type="text"></imput>
       <imput></imput>
   </form>
</div>
</template>

<script>
import Header from '../../header'
export default {
    name: "sanduihuanhongbao",
    components: {
        Header
    },
    // created() {
    //     let menu = "https://elm.cangdu.org/v3/profile/explain";
    //     this.$http.get(menu).then((res) => {
    //         this.data = res.data;

    //     });
    //     console.log(this.data);
    // }
}
</script>

<style scoped>

</style>
