<template>
<div class="wrap">
    <Header></Header>
    <div class="datu">
        <img :src="img01" alt="">
        </div>
        <div class="top">
            <div>
                <img :src="img01" alt="">
                <p>邀请微信好友</p>
            </div>
            <div>
                <img :src="img01" alt="">
                <p>邀请QQ好友</p>
            </div>
            <div>
                <img :src="img01" alt="">
                <p>面对面邀请</p>
            </div>
        </div>
        <div class="content">
            <div >
                <p class="p0">累计收益</p>
                <p>
                    <span class="wen">{{yuan}}</span>
                    <span>元</span>
                </p>
            </div>
            <div class="content_border"></div>
            <div>
                <p class="p0">成功邀请</p>
                <p>
                    <span class="wen">{{ren}}</span>
                    <span>人</span>
                </p>
            </div>
        </div>
        <div class="bottom">
            <p class="p1">-收益明细-</p>
            <p><img class="img02" :src="img02" alt=""></p>
            <p class="p2">还不赶紧去邀请好友</p>
        </div>
    </div>
</template>

<script>
import Header from '../../header'
export default {
    name: "tuijianyoujiang",
    data() {
        return {
            yuan:'0',
            ren:'0',
            img01: require('../../../../assets/img/img01.jpg'),
             img02: require('../../../../assets/img/订单.png')
        }
    },
     created() {
        this.$store.commit("zihe",'推荐有奖');
      
    },
    components: {
        Header
    },

}
</script>

<style scoped>
.datu>img {
    width: 100%;
    height: 2.5rem;
}

.top {
    display: flex;
    justify-content: space-around;
    padding-top: 0.1rem;
    background-color: white;
}

.top>div {
    text-align: center;
}

.top>div>img {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
}

.top>div>p {
    padding-top: 0.1rem;
    padding-bottom: 0.2rem;
    font-size: 0.1rem;
}
.content{
     display: flex;
    justify-content: space-around;
      padding: 0.2rem 0;
}
.content>div{
    text-align: center;
}
.content>div>p{
     padding: 0.01rem 0;
}
.wen{
    color: red;
    font-weight: bold;
    font-size: 0.25rem;
}
.content_border{
    width: 0.01rem;
    background-color: red;
}
.img02{
    width: 0.8rem;
}
.bottom{
    text-align: center;
}
.p0{
      font-size: 0.1rem;
}
.p1{
    font-size: 0.1rem;
}
.p2{
     font-size: 0.1rem;
     color: rgb(153, 153, 153);
}
</style>
