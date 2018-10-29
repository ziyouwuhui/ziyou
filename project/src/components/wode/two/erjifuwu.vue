<template>
<div class="article">
    <Header></Header>
    <div class="top_header"></div>
    <section>
        <div class="left">
            <img :src="qqkefu" alt="">
            <p class="p2">{{service}}</p>
        </div>
        <div class="right">
            <img :src="diankefu" alt="">
            <p class="p2">{{service}}</p>
        </div>
    </section>
    <section>
        <h3>热门问题</h3>
    </section>
    <section>
        <ul>
            <li v-if="key.indexOf('Caption')!=-1" v-for="(it,key,index) in data" :key="index">
                <router-link class="router" :to="'/erjifuwu/'+index">
                    <span class="span2">{{it}}</span>
                    <i class="el-icon-arrow-right"></i>
                </router-link>
            </li>
        </ul>
    </section>
</div>
</template>

<script>
import Header from '../header'
export default {
    name: "erjifuwu",
    components: {
        Header
    },
    data() {
        return {
            wentivalue: "45",
            service: '在线客服',
            qqkefu: require("../../../assets/img/客服.png"),
            diankefu: require("../../../assets/img/电话.png"),
            data: [],
        };
    },
    methods: {},
    created() {
        let menu = "https://elm.cangdu.org/v3/profile/explain";
        this.$http.get(menu).then((res) => {
            this.data = res.data;
        });
        console.log(this.data);
    }
};
</script>

<style scoped>
Header {
    width: 100%;
    position: fixed;
}

.top_header {
    padding: 0.35rem;
}

.article {
    background-color: white;
}

.left,
.right {
    box-sizing: border-box;
    width: 50%;
    text-align: center;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    border-bottom: 0.01rem solid #e9eef3;
}

.left {
    border-right: 0.01rem solid #e9eef3;
}

img {
    width: 0.7rem;
}

.p2,
li {
    padding: 0.1rem 0;
}

h3 {

    line-height: 0.6rem;
    padding-left: 0.1rem;
    border-bottom: 0.01rem solid #e9eef3;
}

.span2 {
    font-size: 0.2rem;
    color: black;
}

.router {
    display: flex;
    justify-content: space-between;
    padding: 0.1rem 0;
    padding-left: 0.1rem;
    border-bottom: 0.01rem solid #e9eef3;
    overflow: hidden;
}
</style>
