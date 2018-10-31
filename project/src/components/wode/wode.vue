<template>
<div class="warp">
    <Header></Header>
    <Zicontent></Zicontent>
    <Zibuttom></Zibuttom>
    <!-- <Zifooter></Zifooter> -->
    <BButtom></BButtom>
</div>
</template>

<script>
import Header from './header'
import Zicontent from './zicontent'
import Zibuttom from './zibuttom'
import BButtom from '../waimai/buttom'
// import Zifooter from '../zifooter'
export default {
    name: "wodes",
    created() {
        this.$store.commit("zihe",'我的');
      
    },
    components: {
        Header,
        Zicontent,
        Zibuttom,
        BButtom
    }
}
</script>

<style scoped>
.wrap {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgb(245, 245, 245);
}
</style>
