<template>
<div class="wrap">
    <Header></Header>
    <form action="" class="top">
        <p>
            <input type="text" v-model="username" placeholder="请输入兑换码">
        </p>
            <div>
                <p>
                    <input type="text" v-model="yanzhengma"  placeholder="验证码">
                </p>
                    <p class="span1">
                        <img :src="a" alt="">
                        <span @click="fn()">换一张</span>
                    </p>
            </div>
    </form>
    <section class="bottom">
        <p @click="fn2()">兑换</p>
    </section>
    <div class="tanchuang " v-bind:class="{tanchuang1:tan}">
        <div></div>
        <div>
            <img class="img2" :src="tishi" alt="">
            <p class="p4">{{tantan}}</p>
            <p class="p5" @click="fn3()">确认</p>
        </div>

    </div>
</div>
</template>

<script>
import Header from '../../header'
export default {
    name: "sanduihuanhongbao",
    components: {
        Header
    },
    data() {
        return {
            tishi: require('../../../../assets/img/提示.png'),
            a: null,
            username: '',
            yanzhengma: '',
            tan: true,
            tantan: ''
        }
    },
    created() {
        let munn = 'https://elm.cangdu.org/v1/captchas';
        this.$http.post(munn).then((res) => {
                this.a = res.data.code
            }),
            this.$store.commit("zihe", '兑换红包');
        let menu = "https://elm.cangdu.org/v1/users/:user_id/hongbao/exchange";
        this.$http.post(menu).then((res) => {
            this.data = res.data;
        });

    },
    methods: {
        fn() {
            let mun = 'https://elm.cangdu.org/v1/captchas';
            this.$http.post(mun).then((res) => {
                this.a = res.data.code
            })
        },
        fn2() {
            if (this.username == false) {
                this.tantan = '请输入兑换码'
                this.fn3();
            } else if (this.yanzhengma == false) {
                this.tantan = '请输入验证码'
                this.fn3();
            } else {
                this.tantan = '无效的兑换码'
                this.fn3();
            }
        },
        fn3() {
            this.tan = !this.tan;
        }
    }
}
</script>

<style scoped>
input {
    font-size: 0.25rem;
}

.top>p {
    margin: 0.1rem;
    background-color: white;
    line-height: 0.6rem;
}

.top>div {
    display: flex;
    justify-content: space-between;
    margin: 0.1rem;
}

.top>div>p {
    background-color: white;
    line-height: 0.6rem;
    width: 48%;
}

.bottom {
    text-align: center;
    padding: 0.2rem;
}

.bottom>p {
    padding: 0.2rem 0.3rem;
    background-color: rgb(76, 217, 100);
    color: white;
    font-size: 0.2rem;
}

.tanchuang {
    text-align: center;
    background-color: white;
    position: absolute;
    top: 22%;
    left: 50%;
    transform: translateX(-50%);
    width: 4rem;
}

.tanchuang1 {
    display: none;
}

.p4,
.p5 {
    padding: 0.2rem 0;
}

.p5 {
    background-color: rgb(76, 217, 100);
}
</style>
