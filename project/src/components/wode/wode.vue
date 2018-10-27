<template>
<div class="warp">
    <Header></Header>
    <Zicontent></Zicontent>
    <Zibuttom></Zibuttom>
    <Zifooter></Zifooter>
</div>
</template>

<script>
import Header from './header'
import Zicontent from './zicontent'
import Zibuttom from './zibuttom'
import Zifooter from '../zifooter'
export default {
    name: "wode",
    components: {
        Header,
        Zicontent,
        Zibuttom,
        Zifooter
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
