<template>
<div class="wrap">
    <Header></Header>
    <section class="top">
        <p>支付剩余时间</p>
        <p>{{shijian}}</p>
    </section>
    <section class="bottom">
        <div class="bottom_bottom">
            <p>
                <img class="zhitu" :src="zhifutu" alt="">
                <span>支付宝</span>
            </p>
            <p>
                <img class="xuan11" :class="{color1:co}" :src="xuan" @click="xuan1($event)">
            </p>
        </div>
        <div class="bottom_bottom">
            <p>
                <img class="zhitu" :src="zhifutu" alt="">
                <span>微信</span>
            </p>
            <p>
                <img class="xuan12" :class="{color2:cd}"  :src="xuan" @click="xuan2($event)">
            </p>
        </div>
    </section>
    <section class="zhifu">
        <p class="p3" @click="fn($event)">确认支付</p>
    </section>
    <div class="tanchuang " v-bind:class="{tanchuang1:tan}">
        <div></div>
        <div>
            <img class="img2" :src="tishi" alt="">
            <p class="p4">当前环境无法支付，请打开官方App进行付款</p>
            <p class="p5" @click="fn()">确认</p>
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
            co: true,
            cd: false,
            shijian: null,
            xuan: require('../../../assets/img/选中对号.png'),
            tishi: require('../../../assets/img/提示.png'),
            zhifutu: require('../../../assets/img/饿了么1.png'),
            tan: true
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
                }
                if (second <= 9) {
                    second = '0' + second;
                };
                times--;
                _this.shijian = minute + ':' + second;
            }, 1000);
            if (times <= 0) {
                clearInterval(timer);
            }
        }
        count(900);
    },
    methods: {
        fn(ev) {
            this.tan = !this.tan;
        },
        xuan1(ev) {
            ev.target.style.backgroundColor = 'red';
            this.co = true;
            this.cd = false;
            console.log(this.co);
             console.log(this.cd);
        },
        xuan2(ev) {
            ev.target.style.backgroundColor = 'red';
            this.co = false;
            this.cd = true;
              console.log(this.co);
             console.log(this.cd);
        }
    },
    components: {
        Header,
    },

}
</script>

<style scoped>
.co {
    background-color: red;
}

.cd {
    background-color: red;
}

.zhitu {
    width: 0.5rem;
    height: 0.5rem;
}

.bottom_bottom>p:nth-child(1) {
    display: flex;
}

.bottom_bottom>p:nth-child(1)>span {
    padding-top: 0.15rem;
    padding-left: 0.2rm;
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

}

.p4,
.p5 {
    padding: 0.1rem 0;
}

.p5 {
    background-color: rgb(76, 217, 100);
}

.tanchuang1 {
    display: none;
}

.xuan11,
.xuan12 {
    width: 0.3rem;
    border-radius: 50%;
}
</style>
