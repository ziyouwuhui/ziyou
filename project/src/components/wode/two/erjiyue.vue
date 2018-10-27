<template>
<article>
   <Header></Header>
    <section>
        <div class="wrap">
            <div class="wrap_top">
                <p>当前余额</p>
                <p>
                    <img class="img01" :src=" yuetupiantanhao" alt="">
                    <router-link to="/yueshuoming">余额说明</router-link>
                    
                </p>
            </div>
            <div class="wrap_content">
                <span>{{yue}}</span>
                <span>元</span>
            </div>
            <div class="wrap_bottom">
                <p>提现</p>
            </div>
        </div>
    </section>
   <footer>
        <p>交易明细</p>
        <div>
            <img class="img02" :src=" yuetupian" alt="">
            <p>暂无交易明细</p>
        </div>
    </footer>
    <router-view></router-view>
</article>
</template>

<script>
import Header from '../header'
export default {
    name: "erjiyue",
    components:{
        Header
    },
     data() {
        return {
            yue: '0.00',
            yuetupian: require('../../../assets/img/余额图片.png'),
            yuetupiantanhao: require('../../../assets/img/我的余额叹号.png')
        }
    }
}
</script>

<style scoped>
article {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgb(245, 245, 245);
}
section {
    background-color: #3190e8;
    padding: 0.1rem;
}
.wrap {
    border: 1px solid #3190e8;
    background-color: white;
    border-radius: 0.1rem;
}
.wrap_top {
    display: flex;
    justify-content: space-between;
}
.img01{
    width: 0.2rem;
    height: 0.2rem;
}
.wrap_top>p {
  
    padding: 0.1rem;
    font-size: 0.2rem;
}
.wrap_content>span:nth-child(1) {
    padding: 0rem 0rem 1rem 0.1rem;
    font-weight: bold;
    font-size: 0.3rem;
}
.wrap_bottom>p {
    background-color: rgb(204, 204, 204);
    text-align: center;
    padding: 0.1rem ;
    border-radius: 0 0 0.1rem 0.1rem;
    color: white;
    font-size: 0.3rem;
      margin-top: 1rem;
}
footer>p{
    font-size: 0.2em;
    padding: 0.2rem;
    color:  rgb(109, 169, 230);
}
.img02{
    width: 3rem;
    height: 1.5rem;
}
footer>div{
    text-align: center;
}
footer>div>p{
    padding: 0.1rem;
}
</style>
