<template>
<article>
    <Header></Header>
    <section>
        <div></div>
        <ul>
            <li v-if="key.indexOf('Content')!=-1" v-for="(it,key,index) in data" :key="index">
                <p>{{it}}</p>
            </li>
        </ul>
    </section>
</article>
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
        };
    },
    created() {
        let menu = "https://elm.cangdu.org/v3/profile/explain";
        this.$http.get(menu).then((res) => {
            this.data = res.data;

        });
    }
};
</script>

<style scoped>
p {
    font-size: 2rem;
    padding: 0 1rem;
}
</style>
