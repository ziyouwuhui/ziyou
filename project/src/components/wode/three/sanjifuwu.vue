<template>
<div class="article">
    <Header></Header>
    <div class="top_header"></div>
    <p v-html="selectName"></p>
</div>
</template>

<script>
import Header from '../header'
export default {
    name: "fuwuzhongxin3",
    components: {
        Header
    },
    data() {
        return {
            data: [],
            selectName: ""
        };
    },
    created() {
        let menu = "https://elm.cangdu.org/v3/profile/explain";
        this.$http.get(menu).then((res) => {
            var obj = res.data;
            for (let i in obj) {
                this.data.push(obj[i]);
            }
            var ddd = this.$route.params.index;
            this.selectName = this.data[ddd - 1]
            console.log(this.selectName);
        });
    }
};
</script>

<style scoped>
.article{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

}
Header {
    width: 100%;
    position: fixed;
}
.article {
    background-color: white;
}
.top_header {
    padding: 0.4rem;
}
p {
    font-size: 0.3rem;
    margin: 0 0.2rem;
}
</style>
