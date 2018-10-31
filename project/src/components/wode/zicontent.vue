<template>
<article>
    <section class="top">
        <div class="left">
            <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <div class="content">
                <router-link class="font1" to="/fenglu">{{denglu}}</router-link>
                <router-link class="font2" to="/phone">{{number}}</router-link>
            </div>
        </div>

        <i class="el-icon-arrow-right"></i>
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
</article>
</template>

<script>
import W1 from '../../assets/img/我的.png'
export default {
    name: "zicontent",
    data() {
        return {
            denglu: "登录/注册",
            number: "暂无绑定手机号",
            imageUrl: W1,
            yue: "0.00",
            youhui: 0,
            jifen: 0
        };
    },
    methods: {
        // 图片地址
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        // 图片的限制
        beforeAvatarUpload(file) {
            const isJPG = file.type === "image/jpeg";
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error("上传头像图片只能是 JPG 格式!");
            }
            if (!isLt2M) {
                this.$message.error("上传头像图片大小不能超过 2MB!");
            }
            return isJPG && isLt2M;
        }
    }
}
</script>

<style scoped>
.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #3190e8;
    padding: 2.7rem 1rem;
}

.font1,
.font2 {
    color: white;
}

.font1 {
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.left {
    display: flex;
    align-items: center;
}

.content {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;

}

.avatar-uploader {
    background-color: white;
    border-radius: 50%;
}

.el-icon-arrow-right {
    color: white;
}

/* 设置图片大小 */
.avatar {
    width: 3rem;
    padding: 0.5rem;
}

.bottom {
    display: flex;
    justify-content: space-between;
    padding: 1.4rem 1rem;
    text-align: center;
    background-color: white;
}

/* 我的余额字体 */
.span1,
.span2,
.span3 {
    font-size: 2rem;
    font-weight: bold;
}

.span1,
.span3 {
    color: red;
}

.span2 {
    color: #3190e8;
}
.span4{
     color: black;
}
p {
    color: black;
    padding-top: 1rem;
    font-size: 1rem;
}
</style>
