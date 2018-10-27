<template>
<article>
    <Header></Header>
    <section>
        <h3>Q1: 使用余额的条件</h3>
        <p>为了保护账户安全，使用余额前必须先绑定手机号。</p>
        <h3>Q2: 余额可以怎么用？</h3>
        <p>余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以在支持在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。</p>
        <h3>Q3:我要如何提现？</h3>
        <p>为了保护账户和资金安全，您在提现前需要输入真实姓名和用该姓名开通的银行卡号、选择开户行，并验证已绑定饿了么账号的手机号。每日只能提现1次，每次限额50元。若提现金额超过50元，点击【提现】时系统会提示您已超额，请您修改提现金额</p>
    </section>
</article>
</template>

<script>
import Header from '../header'
export default {
    name: "sanjijifenshuoming",
    components:{
        Header
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
    background-color: white;
}
h3{
    padding: 0.2rem 0 0.2rem 0rem;
}
section{
   margin: 0.1rem;
}
</style>
