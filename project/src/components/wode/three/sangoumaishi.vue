<template>
<div class="wrap">
    <Header></Header>
    <section class="top">
        <p>支付剩余时间</p>
        <p style="font-size:.35rem">{{shijian}}</p>
    </section>
    <section class="bottom">
        <div class="bottom_bottom">
            <p>
                <img class="zhitu" :src="zhizhi" alt="">
                <span>支付宝</span>
            </p>
            <p>
                <i id="ai" class="el-icon-circle-check-outline"></i>
            </p>
        </div>
        <div class="bottom_bottom">
            <p>
                <img class="zhitu" :src="zhiwei" alt="">
                <span>微信</span>
            </p>
            <p>
                <i id="bi" class="el-icon-circle-check-outline"></i>
            </p>
        </div>
    </section>
    <section class="zhifu">
        <p class="p3" @click="fn($event)">确认支付</p>
    </section>
    <div class="tanchuang " v-bind:class="{tanchuang1:tan}">
        <div></div>
        <div class="dankuabg">
            <img class="img2" :src="tishi" alt="">
            <p class="p4">当前环境无法支付，请打开官方App进行付款</p>
            <router-link to="/order">
              <p class="p5" @click="fn()">确认</p>
            </router-link>
     
        </div>
        <div></div>

        </div>
    </div>
</template>

<script>
import Header from '../header'
export default {
    name: "huiyuanzhongxin",
    data() {
        return {
            shijian: null,
            tishi: require('../../../assets/img/提示.png'),
            zhizhi: require('../../../assets/img/zfb.png'),
            zhiwei: require('../../../assets/img/wxzf.png'),
            tan: true,
            chaoshi: "当前环境无法支付，请打开官方App进行付款"
        }
    },
    created() {
        this.$store.commit("zihe", '在线支付');
        let _this = this;

        function count(times) {
            var timer = null;
            timer = setInterval(function () {
                var minute = 0,
                    second = 0;
                if (times > 0) {
                    minute = Math.floor(times / 60);
                    second = Math.floor(times) - (minute * 60);
                } else if (times <= 0) {
                    clearInterval(timer);
                    _this.chaoshi = '登录超时';
                    _this.fn();

                }
                times--;
                _this.shijian = minute + ' : ' + second;
            }, 1000);

        }
        count(900);
    },
    methods: {
        fn(ev) {
            this.tan = !this.tan;

        },
    },
    components: {
        Header,
    },

}
</script>

<style scoped>
.dankuabg{
    padding: .2rem .1rem;
}
.zhitu {
    width: 0.5rem;
    height: 0.5rem;
}

.bottom_bottom>p {
    display: flex;

}

.bottom_bottom>p>span {
    padding-top: 0.15rem;
    margin-left: 0.15rem;
}

.top {
    background-color: white;
    text-align: center;
    padding: 0.2rem 0;
}

.top>p {
    padding: 0.1rem 0rem;
}

.bottom {
    margin: 0.2rem 0rem;
}

.bottom_bottom {
    padding: 0.2rem 0.1rem;
    background-color: white;
    border: 0.01rem solid rgb(245, 245, 245);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.zhifu {
    text-align: center;
    padding: 0.2rem;
    background-color: rgb(76, 217, 100);
    margin: 0.2rem 0.1rem;
    border-radius: 0.1rem;
}

.p3 {
    color: white;
}

.tanchuang {
    text-align: center;
    background-color: white;
    position: absolute;
    top: 22%;
    left: 50%;
    transform: translateX(-50%);
    width: 3.5rem;
    border-radius: 0.1rem;
}

.img2 {
    width: 2rem;
    height: 2rem;
}

.p4 {
    padding: 0.1rem 0;
}

.p5 {
    background-color: rgb(76, 217, 100);
    padding: 0.2rem 0;
    color: white;
    font-size: 0.3rem;
    border-radius: 0 0 0.1rem 0.1rem;
}

.tanchuang1 {
    display: none;
}
</style>
