<template>
<article>
    <Header></Header>
    <div class="kongbai"></div>
    <ol class="ol1">
        <li v-for="(da,index) in datas" :key="index">
            <div class="top">
                <div class="left">
                    <p>
                        <span>{{rmd}}</span>
                        <span>{{da.amount}}</span>
                    </p>
                    <p class="p1">{{da.description_map.sum_condition}}</p>

                </div>
                <div class="content">
                    <p>{{da.name}}</p>
                    <p class="p2">{{da.description_map.validity_periods}}</p>
                    <p class="p3">{{da.description_map.phone}}</p>
                </div>
                <div class="right">
                    <img :src="img1" alt="">
                </div>
                </div>
                <div class="bottom">
                    <p v-if="lmap">{{lmap.restaurant_flavor_ids}}</p>
                </div>
        </li>
    </ol>
</article>
</template>

<script>
import Header from '../../header'
export default {
    name: "sanjilishihongbao",
    data() {
        return {
            datas: null,
            lmap: null,
            rmd: '￥',
            img1: require('../../../../assets/img/已过期.png')
        }
    },
    components: {
        Header
    },
    created() {
        let menu = "https://elm.cangdu.org/promotion/v2/users/1/expired_hongbaos?limit=20&offset=0";
        this.$http.get(menu).then((data) => {
            this.datas = data.data;
            let r = this.datas.map((v, i) => {
                console.log(v.limit_map);
                this.lmap = v.limit_map;
                // console.log(lmap.restaurant_flavor_ids);
            });
        }, function () {
            console.log('请求失败处理');
        });

    }
}
</script>

<style scoped>
Header {
    position: fixed;
    width: 100%;
}

.kongbai {
    height: 1rem;
}

li {
    background-color: white;
    margin: 0.1rem 0.1rem;
    padding: 0.15rem 0 0 0;
    border-radius: 0.1rem;
}

.ol1 {
    background-color: rgb(240, 240, 240);
}

.left {

    padding: 0 0.1rem;
    border-right: 0.018rem dashed rgb(153, 153, 153);
}

.left>p>span:nth-child(2) {
    font-size: 0.5rem;
}

.content {
    padding-left: 0.1rem;
}

.top {
    display: flex;
}

p {
    padding: 0.02rem 0;
}

.p1,
.p2,
.p3 {
    font-size: 0.02rem;
    color: rgb(153, 153, 153);
}



img {
    width: 0.8rem;
    position: relative;
    /* top: -1rem; */
}

span {
    color: rgb(153, 153, 153);
}
.bottom{
     font-size: 0.02rem;
    color: rgb(153, 153, 153);
     padding: 0 0rem 0.1rem 0.1rem;
}
</style>
