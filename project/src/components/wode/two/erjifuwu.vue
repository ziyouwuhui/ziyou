<template>
<article>
  <Header></Header>
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
                <router-link class="router" to="/erjifuwu">
                    <span class="span2">{{it}}</span>
                    <i class="el-icon-arrow-right"></i>
                </router-link>
            </li>
        </ul>
    </section>
</article>
</template>

<script>
import Header from '../header'
export default {
    name: "erjifuwu",
    components:{
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
    methods: {
    },
    created() {
        let menu = "https://elm.cangdu.org/v3/profile/explain";
        this.$http.get(menu).then((res) => {
            this.data = res.data;
        });
        console.log(this.$route.params);
    }
};
</script>

<style scoped>
.left,
.right {
    box-sizing: border-box;
    width: 50%;
    text-align: center;
    padding-top: 5.7rem;
    padding-bottom: 1.65rem;
    border-bottom: 0.2rem solid #e9eef3;
}

.left {
    border-right: 0.2rem solid #e9eef3;
}

img {
    width: 2rem;
    height: 2rem;
}

.p2,
li {
    padding: 0.5rem 0;
    /* border: 1px solid red; */
}

h3 {

    line-height: 6rem;
    padding-left: 0.7rem;
    border-bottom: 0.2rem solid #e9eef3;
}

.span2 {
    font-size: 1.2rem;
    color: black;
}

.router {
    display: flex;
    justify-content: space-between;
    padding: 0.6rem 0;
    padding-left: 0.7rem;
    border-bottom: 0.2rem solid #e9eef3;
    overflow: hidden;
}
</style>
