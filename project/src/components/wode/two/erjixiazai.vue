<template>
<article>
    <Header></Header>
    <section class="content">
        <img :src="fu" alt="">
        <p class="p2">下载饿了吗APP</p>
    </section>
    <section class="bottom">
        <p class="p3" @click="fn()">下载</p>
    </section>
    <div class="tanchuang " v-bind:class="{tanchuang1:tan}">
        <div></div>
        <div>
            <img class="img2" :src="tishi" alt="">
            <p class="p4">IOS用户请前往AppStore下载</p>
            <p class="p5" @click="fn()">确认</p>
        </div>
        <div></div>

    </div>
</article>
</template>

<script>
import Header from '../header'
export default {
    name: "xiaxia",
    components: {
        Header
    },
    data() {
        return {
            fu: require('../../../assets/img/下载.jpg'),
            tishi: require('../../../assets/img/提示.png'),
            tan: true
        }
    },
    created() {
        this.$store.commit("zihe", '下载');

    },
    methods: {
        fn() {
            this.tan = !this.tan;
        }
    }
}
</script>

<style scoped>
.content,
.bottom {
    text-align: center;
}

.content {
    padding-top: 1rem;
}

img {
    width: 2rem;
    border-radius: 15%;
}

.bottom {
    padding: 0.2rem;
    background-color: rgb(76, 217, 100);
    margin: 0 0.1rem;
    border-radius: 0.2rem;
}

.p2 {
    padding: 0.2rem 0;
    color: rgb(181, 126, 102)
}

.p3 {
    color: white;
}

.p4,
.p5 {
    padding: 0.1rem 0;
}

.p5 {
    background-color: rgb(76, 217, 100);
}

.tanchuang {
    text-align: center;
    background-color: white;
    position: absolute;
    top: 22%;
    left: 50%;
    transform: translateX(-50%);

}

.tanchuang1 {
    display: none;
}
</style>
