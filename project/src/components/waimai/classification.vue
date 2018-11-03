<template>
<div>
    <div>
        <section class="big" v-for="(it1,key) in data" :key="key">
            <div class="big_top">
                <span class="span" @click="change"></span>
                <span class="span1">{{it1.name}}---{{key}}</span>
            </div>
            <div class="big_bottom">
                <div class="big_img" v-for="(child,cindex) in it1.foods" :key="cindex">
                    <!--<img src="./img/主页.png" alt="">-->
                    <img :src="'//elm.cangdu.org/img/'+child.image_path" alt="">
          </div>
                    <div class="binjia">
                        <p>{{it1.phone}}</p>
                        <p>{{it1.name}}</p>
                        <p style="display: flex">
                            <span>评分: </span>
                            &nbsp; &nbsp;
                            <span class="spannnnn">
                    <el-rate
                      v-model="it1.rating"
                      disabled
                      show-score
                      text-color="#ff9900"
                      score-template="{value}">
                     </el-rate>
                   </span>
                        </p>
                        <p>
                            <span>月售{{it1.recent_order_num}}单</span>
                            <span>售价{{it1.float_minimum_order_amount}}起</span>
                        </p>
                        <p>
                            <span>评论数 {{it1.rating_count}}</span>
                            <span>好评率{{it1.float_delivery_fee}}%</span>
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
            data: [],
            da: {},
            value5: '',
            id: this.$route.params.id,
        };
    },
    created() {
        let api = "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=" + this.$route.params.id;
        // let api = '\n' +
        // let q =  'https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762';
        this.$http.get(api).then((data) => {
            this.data = data.data;
            this.da = data.data.id;
            console.log(this.data, "000000000000000");
        })
    },
    methods: {
        change(e) {
            this.$router.back(-1);
            // var target = event.target;
            // var dataid = e;
            // $(target);
        }
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
