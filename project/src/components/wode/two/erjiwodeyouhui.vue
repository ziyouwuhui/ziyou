<template>
<article>
    <Header></Header>
    <section class="tiao">
        <span @click="fn()">红包</span>
        <span @click="fn()">商家代金券</span>
    </section>
    <Hongbao :class="{hongbao:span1}"></Hongbao>
   <Shangjiadaijin :class="{shangjia:span2}"></Shangjiadaijin>
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
        }
    },
    components: {
        Header,
        Hongbao,
        Shangjiadaijin
    },
    methods: {
        fn() {
            this.span1=!this.span1;
             this.span2=!this.span2;
        },
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

.hongbao {
    display: none;
}

.shangjia {
   display: none;
}
</style>
