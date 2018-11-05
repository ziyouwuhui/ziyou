<template>
<div>
    <div>
        <section class="big" v-for="(it1,key) in resulrli" :key="key">
            <div class="big_top">
                <span class="span" @click="change"><</span>
                <span class="span1">{{namesq}}</span>
            </div>
            <div class="big_bottom">
                <div class="big_img" v-for="(child,cindex) in it1.foods" :key="cindex">
                    <!--<img src="./img/主页.png" alt="">-->
                    <img :src="'//elm.cangdu.org/img/'+Ing" alt="">
          </div>
                    <div class="binjia">
                        <p>{{it1.phone}}</p>
                        <p>{{namesq}}</p>
                        <p style="display: flex">
                            <span>评分: </span>
                            &nbsp; &nbsp;
                            <span class="spannnnn">
                    <el-rate
                      v-model="value5"
                      disabled
                      show-score
                      text-color="#ff9900"
                      score-template="{value}">
                     </el-rate>
                   </span>
                        </p>
                        <p>
                            <span>月售230单</span>
                            <span>售价 $20 起</span>
                        </p>
                        <p>
                            <span>评论数 4.5</span>
                            <span>好评率56%</span>
                        </p>
                    </div>
                </div>
        </section>
    </div>
</div>
</template>

<script>
export default {
    name: "classification",
    data() {
        return {
            value5: 4.5,
            resulrli:[],
            // tupians:''
            Ing:'',  
            namesq:''
        };       
    },
    created() {
        this.namesq = this.$route.params.names;
        this.Ing = this.$route.params.img;
        this.resulrli = this.$store.state.resulr_li;
        console.log(this.tupians,'i love you')
        console.log(this.resulrli,"wodetu")
    },
    methods: {
        change(e) {
            this.$router.back(-1);
        }
    },
    computed:{
        tupian(){
            return this.$store.state.tupians;
        },
        
    }
}
</script>

<style scoped>
.binjia p {
    margin: .15rem;
    font-size: 0.058rem;
    color: gray;
}

.big_img {
    margin-top: .85rem;
}

.big_img img {
    width: 100%;
}

.big_top {
    background-color: #3190e8;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 0.65rem;
    line-height: .6rem;
    padding: .1rem 0;
    text-align: center;

}

.big_top span {
    font-size: .24rem;
    color: white;
    text-align: center;
    font-weight: 700;
}

.big_top .span {
    font-size: .24rem;
    color: white;
    float: left;
    margin-left: .1rem;
}

.big {
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    z-index: 113;
    height: 100%;
}
</style>
