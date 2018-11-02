<template>
<div>
    <Header></Header>
    <section class="top">
        <div>
            <p>头像</p>
            <p class="tuxiang">
                <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                    <img  :src="imageUrl" class="avatar">

                </el-upload>
                    <i class="el-icon-arrow-right"></i>
            </p>
        </div>
        <div>
            <p>用户名</p>
            <p>
                <span>{{mingzi}}</span>
                <i class="el-icon-arrow-right"></i>
            </p>
        </div>
        <div>
            <p>收货地址</p>
            <p>
                <router-link to="/xinzengdizhi">新增</router-link>
                <i class="el-icon-arrow-right"></i>
            </p>
        </div>
    </section>
    <section class="content">
        <div>
            <p>账号绑定</p>
            <p>
                <span>手机</span>
                <i class="el-icon-arrow-right"></i>
            </p>
        </div>
        <div>
            <p>安全设置</p>
        </div>
        <div>
            <p></p>
            <p>
                <span>登录密码</span>
                <router-link to="/xiugaimima">修改<i class="el-icon-arrow-right"></i></router-link>
            </p>
        </div>

        <section class="bottom">
            <p @click="fn()">退出登录</p>
        </section>
    </section>
    <div class="tanchuang " v-bind:class="{tanchuang1:tan}">
        <div></div>
        <div>
            <img class="img2" :src="tishi" alt="">
            <p class="p4">是否退出登录</p>
            <div class="tui">
                <p class="p5" @click="fn()">再等等</p>
                <router-link to="/tuiwode">
                    <p class="p5">退出登录</p>
                </router-link>
            </div>

        </div>
        <div></div>

    </div>
</div>
</template>

<script>
import Header from '../header'
export default {
    name: "zhanghuxinxi",
    components: {
        Header
    },
    data() {
        return {
            fu: require('../../../assets/img/下载.jpg'),
            tishi: require('../../../assets/img/提示.png'),
            tan: true,
            imageUrl: '',
            mingzi: '小白'
        }
    },
    created() {
        this.$store.commit("zihe", '账户信息');
        this.imageUrl ? this.imageUrl = '12' : this.imageUrl = this.tishi;
        this.ures = JSON.parse(localStorage.getItem('users'))
        if (this.ures[0].username != '') {
            this.mingzi = this.ures[0].username
        }

    },
    methods: {
        fn() {
            this.tan = !this.tan;
            localStorage.clear();
        },
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }

    }
}
</script>

<style scoped>
.top {
    margin-top: 0.2rem;
}

.top>div,
.content>div>p:nth-child(2) {
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 0.15rem 0.1rem;
    border-bottom: 0.03rem solid rgb(245, 245, 245);
}

.top>div {
    align-items: center;
}

.content>div>p:nth-child(1) {
    padding: 0.1rem 0.1rem;
}

.bottom>p {
    padding: 0.2rem 0.1rem;
    background-color: red;
    text-align: center;
    color: white;
    border-radius: 1rem;
    margin: 0.3rem;
}

.img2 {
    padding: 0 0.2rem;
}

.p4 {
    padding: 0.1rem 0;
    font-size: 0.4rem;
}

.p5 {
    color: white;
    margin: 0.1rem;
    padding: 0.1rem 0.1rem;
    background-color: rgb(76, 217, 100);
}

.tanchuang {
    text-align: center;
    background-color: white;
    position: absolute;
    top: 22%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0.2rem;
    border: 0.01rem solid red;

}

.tanchuang1 {
    display: none;
}

.tui {
    display: flex;
    justify-content: space-around;
}

.tuxiang {
    display: flex;
    align-items: center;
}

.avatar {
    width: 0.6rem;
    height: 0.6rem;
}
</style>
