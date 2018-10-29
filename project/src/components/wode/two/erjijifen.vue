<template>
<article>
    <div>
        <h1 class="p1">请重新进入</h1>
        <p class="p2">请返回后重新进入积分商城</p>
        <img :src="xia" alt="">
    </div>
</article>
</template>

<script>
export default {
    name: "erjifenn",
    components: {
    },
    data() {
        return {
            xia: require('../../../assets/img/下载.jpg')
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
    background-color: rgb(240, 240, 240);
}

div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
}

img {
    width: 2rem;
    border-radius: 50%;
}

h1,
p {
    padding: 0.1rem 0;
}

h1 {
    font-weight: bold;
    color: rgb(96, 102, 190);
}

p {
    font-size: 0.15rem;
}
</style>
