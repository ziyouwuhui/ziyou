<template>
<article>
    <Header></Header>
    <section>
        <div class="wrap">
            <div class="wrap_top">
                <p>当前积分</p>
                <p>
                    <img class="img01" :src=" yuetupiantanhao" alt="">
                    <router-link to="/erjifenshuoming" class="routerp">积分说明</router-link>

                </p>
            </div>
            <div class="wrap_content">
                <span>{{yue}}</span>
                <span>分</span>
            </div>
            <div class="wrap_bottom">
                <p @click="fn()">积分兑换商品</p>
            </div>
        </div>
    </section>
    <footer>
        <p>最近30天积分记录</p>
        <div>
            <img class="img02" :src=" yuetupian" alt="">
            <p>最近30天无积分记录</p>
            <p>快去下单赚取大量积分</p>
        </div>
    </footer>
    <div class="tanchuang " v-bind:class="{tanchuang1:tan}">
        <div></div>
        <div>
            <img class="img03" :src="tishi" alt="">
            <p class="p4">IOS用户请前往AppStore下载</p>
            <p class="p5" @click="fn()">确认</p>
        </div>
        <div></div>

    </div>
    <router-view></router-view>
</article>
</template>

<script>
import Header from '../header'
export default {
    name: "erjiwodejifen",
    components: {
        Header
    },
    data() {
        return {
            yue: '0',
            yuetupian: require('../../../assets/img/余额图片.png'),
            yuetupiantanhao: require('../../../assets/img/我的余额叹号.png'),
            tishi: require('../../../assets/img/提示.png'),
            tan: true
        }
    },
    methods: {
        fn() {
            this.tan = !this.tan;
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
    background-color: rgb(245, 245, 245);
}

section {
    background-color: #3190e8;
    padding: 1rem;
}

.wrap {
    border: 1px solid #3190e8;
    background-color: white;
    border-radius: 0.7rem;
}

.wrap_top {
    display: flex;
    justify-content: space-between;
}

.img01 {
    width: 1.2rem;
    height: 1.2rem;
}

.wrap_top>p {
    padding: 1rem;
    font-size: 1.25rem;
}

.routerp {
    color: rgb(49, 144, 232)
}

.wrap_content>span:nth-child(1) {
    padding: 1rem 0rem 1rem 1rem;
    font-weight: bold;
    font-size: 3rem;
}

.wrap_bottom>p {
    background-color: red;
    height: 20px;
    text-align: center;
    margin: 2rem;
    padding: 1rem 2rem;
    border-radius: 1rem;
    color: white;
    font-size: 1.6rem;
}

footer>p {
    font-size: 1.2rem;
    padding: 1rem;
    color: rgb(164, 153, 176)
}

.img02 {
    width: 15rem;
    height: 10rem;
}

footer>div {
    text-align: center;
}

footer>div>p {
    padding: 1rem;
}

footer>div>p:nth-child(3) {
    font-size: 1.2rem;
    padding: 1rem;
    color: rgb(164, 153, 176)
}

.tanchuang {
    width: 20rem;
    text-align: center;
    background-color: white;
    position: absolute;
    top: 22%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0 0 1rem 1rem;
}

.img03 {
    width: 10rem;
    height: 10rem;
}

.tanchuang1 {
    display: none;
}

.p4,
.p5 {
    padding: 1rem 0;

}

.p5 {
    background-color: rgb(76, 217, 100);
    color: white;
    font-size: 2rem;
    border-radius: 0 0 1rem 1rem;
}
</style>
