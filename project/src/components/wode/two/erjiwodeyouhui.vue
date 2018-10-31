<template>
<article>
    <Header></Header>
    <section class="tiao">
        <a href="#" @click.prevent="handel('Hongbao')">红包</a>
        <a href="#" @click.prevent="handel('Shangjiadaijin')">商家代金券</a>
    </section>
    <component :is="cc"></component>
</article>
</template>

<script>
import Header from '../header'
import Hongbao from '../three/hongbao'
import Shangjiadaijin from '../three/shangjiadaijin'
export default {
    name: "erjiwodeyouhui",
    data() {
        return {
            span1: false,
            span2: true,
            cc: Hongbao
        }
    },
     created() {
        this.$store.commit("zihe",'我的优惠');
      
    },
    components: {
        Header,
        Hongbao,
        Shangjiadaijin
    },
    methods: {
            handel(value) {
                this.cc = value;
            }
    }
}
</script>

<style scoped>
article {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgb(240, 240, 240);
}

.tiao {
    display: flex;
    justify-content: space-around;
    padding: 0.2rem 0;
    background-color: white;
}
a{
    color: black;
}
</style>
