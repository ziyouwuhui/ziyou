<template>
<div class="wrap">
    <Header></Header>
    <div class="tu">
        <img :src="img01" alt="">
    </div>

    </div>
</template>

<script>
import Header from '../header'
export default {
    name: "huiyuanzhongxin",
    data() {
        return {
            img01: require('../../../assets/img/余额图片.png')
        }
    },
    created() {
        this.$store.commit("zihe", '购买记录');

    },
    components: {
        Header
    }
}
</script>

<style scoped>
.tu {
    text-align: center;
    margin-top: 1.5rem;
}
.tu>img{
    width: 3rem;
}
</style>
