<template>
<article>
    <section>
        <div class="wrap">
            <router-link class="router1" to="/order">
                <div>
                    <img :src="dingdan" alt="">
                    <span>我的订单</span>
                </div>
                <i class="el-icon-arrow-right"></i>
            </router-link>
        </div>
        <div class="wrap">
            <router-link class="router2" to="/jifenn">
                <div>
                    <img :src="jifen" alt="">
                    <span>积分商城</span>
                </div>
                <i class="el-icon-arrow-right"></i>
            </router-link>
        </div>
        <div class="wrap">
            <router-link class="router3" to="/hui">
                <div>
                    <img :src="vip" alt="">
                    <span>饿了吗会员卡</span>
                </div>
                <i class="el-icon-arrow-right"></i>
            </router-link>
        </div>
    </section>
    <section>
        <div class="wrap">
            <router-link class="router4" to="/fufu">
                <div>
                    <img :src="fu" alt="">
                    <span>服务中心</span>
                </div>
                <i class="el-icon-arrow-right"></i>
            </router-link>
        </div>
        <div class="wrap">
            <router-link class="router5" to="/xiaxia">
                <div>
                    <img :src="xia" alt="">`
                    <span>下载饿了么APP</span>
                </div>
                <i class="el-icon-arrow-right"></i>
            </router-link>
        </div>
    </section>
    <router-view></router-view>
</article>
</template>

<script>
export default {
    name: "zibuttom",
    data() {
        return {
            dingdan: require('../../assets/img/我订单.png'),
            jifen: require('../../assets/img/积分.png'),
            vip: require('../../assets/img/vip.png'),
            fu: require('../../assets/img/服务.png'),
            xia: require('../../assets/img/下载.jpg')
        }
    }
}
</script>

<style scoped>
section {
    border-top: 0.1rem solid #E9EEF3;
}

.router1,
.router2,
.router3,
.router4,
.router5 {
    display: flex;
    justify-content: space-between;
    padding: 0.1rem 0.1rem;
    background-color: white;

}

.router1,
.router2,
.router4 {
    border-bottom: 0.01rem solid #E9EEF3;
}

img {
    width: 0.2rem;
    height: 0.2rem;
}

span {
    color: black;
    font-size: 0.2rem;
}
</style>
