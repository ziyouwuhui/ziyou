<template>
<div class="wrap">
    <section class="top">
        <p>有{{names}}个红包即将到期</p>
        <p>
            <router-link to="/sanjihongbaoshuoming">
                <img class="img01" :src=" yuetupiantanhao" alt="">
                <span>红包说明</span>
            </router-link>
        </p>
    </section>
    <section>
        <ol>
            <li class="xiaoli" v-for="(da,index) in datas" :key="index">
                <div class="li_top">
                    <div class="li_left">
                        <p class="left_p1">{{da.description_map.sum_condition}}</p>
                        <p id="p0">
                            <span>{{rmd}}</span>
                            <span>{{da.amount}}</span>
                        </p>
                    </div>
                    <div class="li_right">
                        <div class="li_left2">
                            <p>{{da.name}}</p>
                            <p class="content_p2">{{da.description_map.validity_periods}}</p>
                            <p class="content_p3">{{da.description_map.phone}}</p>
                        </div>
                        <div class="li_right2">
                            <p class="right_p4">{{da.description_map.validity_delta}}</p>
                        </div>
                    </div>
                </div>
                <div class="li_bottom">
                    <p class="bottom_p5" v-if="da.limit_map">{{da.limit_map.restaurant_flavor_ids}}</p>
                </div>
            </li>
        </ol>
    </section>
    <section class="lishihongbao">
        <router-link to="/kanlishihongbao" class="bottom_bottom1">
            <span>查看历史红包</span>
            <i class="el-icon-arrow-right"></i>
        </router-link>
    </section>
    <section class="bottom">
        <div>
            <router-link to="" class="bottom_bottom"><span>兑换红包</span></router-link>
            <router-link to="" class="bottom_bottom"><span>推荐有奖</span></router-link>
        </div>

    </section>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: "hongbaobao",
    data() {
        return {
            datas: null,
            lmap: null,
            rmd: '￥',
            names: "0",
            yuetupiantanhao: require('../../../assets/img/我的余额叹号.png')
        }
    },
    created() {
        console.log(this.shuliang)
        let menu = "https://elm.cangdu.org/promotion/v2/users/1/hongbaos?limit=20&offset=0";
        this.$http.get(menu).then((data) => {
            this.datas = data.data;
            this.names = this.datas.length;
            this.shuliang = this.datas.l;
        }, function () {
            console.log('请求失败处理');
        });
    },
    computed: {}
}
</script>

<style scoped>
.top {
    display: flex;
    justify-content: space-between;
    padding: 0.1rem 0.1rem;
}

.top p {
    font-size: 0.2rem;
}

.top img {
    width: 0.2rem;
}

.xiaoli {
    background-color: white;
    margin: 0.1rem;
    padding: 0.1rem;
    border-radius: 0.2rem;
    border: 0.1rem solid white;
}

.li_top {
    display: flex;
    justify-content: space-between;
}

.li_left {
    display: flex;
    flex-direction: column-reverse;
}

.left_p1,
.content_p2,
.content_p3 {
    font-size: 0.1rem;
    color: rgb(153, 153, 153);
}

.li_right {
    display: flex;
}

.bottom_p5,.bottom_bottom1>span {
    padding-top: 0.1rem;
    font-size: 0.15rem;
    color: rgb(153, 153, 153);
}

.bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    background-color: white;
    padding: 0.2rem 0;
}

.bottom>div {
    display: flex;
    justify-content: space-around;

}

.bottom_bottom>span{
    color: black;
}

.lishihongbao {
    text-align: center;
    padding-top: 0.6rem;
}

.bottom_bottom {
    color: rgb(153, 153, 153);
}

</style>
