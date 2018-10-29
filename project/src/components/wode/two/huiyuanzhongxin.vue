<template>
<div class="wrap">
    <Header></Header>
    <p class="top0">为账户购买会员</p>
    <section class="top">
        <div class="top1">
            <p>会员特权</p>
            <p>会员说明</p>
        </div>
        <ol>
            <li class="li" v-for="(da,index) in datas" :key="index">
                <h4>{{da.title}}</h4>
                <p>{{da.tie}}</p>
            </li>
        </ol>
    </section>
    <section class="content">
        <p>开通会员</p>
        <div class="content_bottom">
            <p>1个月<span class="rmb">￥20</span></p>
            <p class="mai"><router-link to="/goumaishi">购买</router-link></p>
        </div>
    </section>
    <section class="bottom">
        <div class="bottom1">
            <span>兑换会员</span>
            <span class="span12">使用卡号密码</span>
        </div>
        <div class="bottom2">
            <span>购买记录</span>
            <span class="span12">开发票</span>
        </div>
    </section>
</div>
</template>

<script>
import Header from '../header'
export default {
    name: "huiyuanzhongxin",
    data() {
        return {
            datas: [{
                title: '减免配送费',
                tie: '每月减免30单，每日可减免3单，每单最高减4元'
            }, {
                title: '减免配送费',
                tie: '每月减免30单，每日可减免3单，每单最高减4元'
            }]
        }
    },
     created() {
        this.$store.commit("zihe",'会员中心');
      
    },
    components: {
        Header
    }
}
</script>

<style scoped>
.top {
    background-color: white;
}

.top0 {
    padding: 0.2rem 0 0.2rem 0.2rem;
    font-size: 0.2rem;
    color: rgb(153, 153, 153);
}

.top1 {

    display: flex;
    justify-content: space-between;
    padding: 0.2rem 0.2rem;
}

ol {
    padding: 0.2rem 0 0.2rem 0.2rem;
}

.li {
    padding: 0.2rem 0;
    border-top: 0.01rem solid rgb(153, 153, 153);
}

.li>p {
    font-size: 0.1rem;
    color: rgb(153, 153, 153);
    padding: 0.1rem 0;
}

.content {
    margin-top: 0.2rem;
    background-color: white;
    padding: 0rem 0.2rem;
}

.content>p {
    padding: 0.2rem 0.1rem;
}

.content_bottom {
    display: flex;
    justify-content: space-between;
    border-top: 0.01rem solid rgb(153, 153, 153);
    padding: 0.1rem 0;
}

.content_bottom>p {
    padding: 0.1rem 0.1rem;
}

.rmb {
    color: red;
    font-weight: bold;
    font-size: 0.2rem;
}

.mai {
    border: 0.01rem solid red;
    border-radius: 0.1rem;
}

.bottom1,
.bottom2 {
    margin: 0.1rem 0;
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 0.1rem;
}
.span12{
    font-size: 0.19rem;
    color: rgb(153, 153, 153);
}
</style>
