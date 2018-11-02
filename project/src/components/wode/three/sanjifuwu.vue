<template>
<div class="article">
    <Header></Header>
    <div class="top_div"></div>
    <div class="top_header"></div>
    <div class="aa">
        <p v-html="selectName"></p>
    </div>
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
            selectName: "",
        };
    },
    created() {
        this.$store.commit("zihe", '服务中心');
        let menu = "https://elm.cangdu.org/v3/profile/explain";
        this.$http.get(menu).then((res) => {
            var obj = res.data;
            for (let i in obj) {
                this.data.push(obj[i]);
            }
            var ddd = this.$route.params.index;
            this.selectName = this.data[ddd - 1];
        });
    }
};
</script>

<style scoped>
 .article {
    background-color: white;

} 

Header {
    width: 100%;
    position: fixed;
}
.top_div{
     padding: 0.4rem;
}
p {
    font-size: 0.3rem;
    margin: 0 0.2rem;
    
}
</style>
