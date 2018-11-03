<template>
<div>
    <section class="top">
        <router-link class="top_router" :to="link">
            <div class="left">
                <div class="left_tu">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                </div>
                    <div class="wenwen">
                        <p class="font1">{{denglu}}</p>
                        <p class="font2">{{number}}</p>

                    </div>
                </div>
                <div class="right">
                    <i class="el-icon-arrow-right"></i>
                </div>
        </router-link>
    </section>
    <section class="bottom">
        <div>
            <router-link to="/wodeyue">
                <span class="span1">{{yue}}</span><span class="span4">元</span>
                <p>我的余额</p>
            </router-link>

        </div>
        <div>
            <router-link to="/wodeyouhui">
                <span class="span2">{{youhui}}</span><span class="span4">个</span>
                <p>我的优惠</p>
            </router-link>

        </div>
        <div>
            <router-link to="/wodejifen">
                <span class="span3">{{jifen}}</span><span class="span4">分</span>
                <p>我的积分</p>
            </router-link>

        </div>
    </section>
</div>
</template>

<script>
import W1 from '../../assets/img/我的.png'
export default {
    name: "zicontent",
    data() {
        return {
            denglu: "登录/注册",
            number: "",
            imageUrl: W1,
            yue: "0.00",
            youhui: localStorage.a,
            jifen: 0,
            link: "/lulu",
            ures: [],
        };
    },
    created() {

        if (localStorage.users) {
            this.link = "/lulu";

        } else {
            this.link = "/login";

        }

        if (this.number == false) {
            this.number = "暂无手机号";
        }

        // 取值
        this.ures = JSON.parse(localStorage.getItem('users'))
        console.log(this.ures[0].username);
        if (this.ures[0].username != '') {
            this.denglu = this.ures[0].username
        } else {
            this.denglu = "登录/注册";
        }
    }
}
</script>

<style scoped>
.top_router {
    background-color: #3190e8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.3rem 0.1rem;
}

.left {
    display: flex;
}

.left_tu {
    background-color: white;
    border-radius: 50%;
}

.font1,
.font2,
.el-icon-arrow-right {
    color: white;
}

.font1 {
    font-size: 0.2rem;
    font-weight: bold;
    margin-bottom: 0.05rem;
}

.wenwen {
    margin-left: 0.1rem;
}

p {
    color: black;
    padding-top: 0.1rem;
    font-size: 0.1rem;
}

/* 设置图片大小 */
.avatar {
    width: 0.5rem;
    padding: 0.05rem;
}

.bottom {
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 0.2rem;
    text-align: center;
    background-color: white;
}

/* 我的余额字体 */
.span1,
.span2,
.span3 {
    font-size: 0.4rem;
    font-weight: bold;
}

.span1,
.span3 {
    color: red;
}

.span2 {
    color: #3190e8;
}

.span4 {
    color: black;
}
</style>
