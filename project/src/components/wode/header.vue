<template>
<header>
    <i class="el-icon-arrow-left"></i>
    <p>{{count}}</p>
    <p></p>
</header>
</template>

<script>
export default {
    name: "ziheader",
    computed: {
        count() {
            return this.$store.state.count
        }
    },
}
</script>

<style scoped>
header {
    background-color: #3190e8;
    color: white;
    line-height: 3.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
p{
   font-weight: bold; 
   font-size: 1.7rem;
}
</style>
