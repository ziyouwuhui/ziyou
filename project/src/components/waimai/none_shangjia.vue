<template>
<div>
    <transition name="el-fade-in-linear">
        <div v-show="show">
            <div class="none_ul">
                <p class="none_ul_p1">{{meNu.name}}</p>
                <p class="none_ul_p2">优惠信息</p>
                <div class="none_ul_p3">
                    <div v-for="(a,index) in me" :key="index" class="dic">
                        <span class="middle_span" :style="'background:#'+a.icon_color" >{{a.icon_name}}</span>
                        <span class="middle_three">{{a.description}}</span>
                    </div>
                </div>
                <p class="none_ul_p2">商家公告</p>
                <p class="none_ul_p3">{{meNu.promotion_info}}</p>
                <div class="cha" @click="show = !show">X</div>
            </div>
        </div>
    </transition>
</div>
</template>

<script>
export default {
    name: "none_shangjia",
    data() {
        return {
            show: true
        }
    }
}
</script>

<style scoped>
.none_ul_p3 {
    padding-left: .5rem;
    font-size: .1rem;
}

.none_ul_p1 {
    text-align: center;
    font-size: .3rem;
    color: #fff;
    margin: .5rem 0;
}

.none_ul_p2 {
    text-align: center;
    width: .8rem;
    font-size: .1rem;
    color: #fff;
    margin: .3rem auto;
    border: 1px solid gainsboro;
    padding: .08rem;
    border-radius: .2rem;
}

.cha {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: gainsboro;
    border: 1px solid gainsboro;
    font-size: .3rem;
    text-align: center;
    line-height: 50px;
    position: absolute;
    bottom: 1rem;
    left: 45%;
}

.none_ul {
    /*text-align: center;*/
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #262626;
    ;
    z-index: 200;
    color: white;
}
</style>
