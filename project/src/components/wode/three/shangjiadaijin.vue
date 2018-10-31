<template>
<div>
    <section class="top">
        <div></div>
        <div>
            <img :src="img01" alt="">
            <router-link to="/daijinjuanshuoming"> <span>商家代金券说明</span></router-link>
           
        </div>

    </section>
    <section class="bottom">
        <img :src="img02" alt="">
        <p class="p1">无法使用代金券</p>
        <p class="p2">非客户端或客户端版本过低</p>
       
        <router-link to="/shengjixiazai"> <p class="p3">下载或升级客户端</p></router-link>
    </section>
</div>
</template>

<script>
export default {
    name: "shanjiadaijin",
    data() {
        return {
            img01: require('../../../assets/img/我的余额叹号.png'),
            img02: require('../../../assets/img/商家说明.png')
        }
    }
}
</script>

<style scoped>
.top {
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 0.1rem;
    font-size: 0.18rem;
}
.top img{
    width: 0.2rem;
    height: 0.2rem;
}
span {
    color: rgb(49, 144, 232);
    padding: 0.2rem 0 0 0.1rem;
}

.top>div:nth-child(2) {
    display: flex;
    text-align: center;
}

.bottom {
    padding-top: 0.8rem;
    flex-direction: column;
    text-align: center;
}

.bottom>img {
    width: 2rem;
    height: 1rem;
}
.p1,.p2,.p3{
    padding: 0.1rem 0;
}
.p1{
     font-size: 0.2rem;
}
.p2{
     font-size: 0.1rem;
     color: #9999;
}
.p3{
    color: white;
    background-color: #56d176;
    padding: 0.2rem 0.1rem;
    margin: 0.1rem 1rem;
    border-radius: 0.15rem;
}
</style>
