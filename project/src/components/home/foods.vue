<template>
<div>
    <div class="food_container">
        <header class="head_top">
            <div class="head_goback">
            <span @click="change" class="icon_left">&lt;</span>
            </div>
            <div class="title_head ellipsis">
            <span class="title_text">甜品饮品</span>
            </div>
        </header>
        <div class="sort_container">
            <div class="sort_item">
                <div class="sort_item_container">
                    <div class="sort_item_border">
                        <span>甜品饮品</span>
                        <img :src="src" alt="">
                    </div>
                </div>
            </div>
            <div class="sort_item">
                <div class="sort_item_container">
                    <div class="sort_item_border">
                        <span>排序</span>
                        <img :src="src" alt="">
                    </div>
                </div>
            </div>
            <div class="sort_item">
                <div class="sort_item_container">
                    <div class="sort_item_border">
                        <span class="category_title">筛选</span>
                        <span class="sort_icon">
                            <img :src="src">
                        </span>
                    </div>
                </div>
                <div class="sort_detail_type filter_container">
                    <div style="width:100%;">
                        <div class="filter_header_style">配送方式</div>
                        <ul class="filter_ul">
                            <li class="filter_li">
                                <img :src="fnsrc" alt="">
                                <span>蜂鸟专送</span>
                            </li>
                        </ul>
                    </div>
                    <div style="width:100%;">
                         <div class="filter_header_style">商家属性(可以多选)</div>
                        <ul class="filter_ul">
                            <li class="filter_li">
                                <img :src="fnsrc" alt="">
                                <span>蜂鸟专送</span>
                            </li>
                        </ul>
                    </div>
                    <div class="confirm_filter"></div>
                </div>
            </div>
        </div>
        <div class="back_cover"></div>
    </div>
</div> 
</template>
<script>
import svg from '../../../static/img/myimg/svg.png'
import fnsvg from '../../../static/img/myimg/svg1.png'
export default {
  name:'foods',
  data(){
      return{
          src:svg,
          fnsrc:fnsvg
      }
  }
}
</script>
<style scoped>
.filter_li span{
    font-size: .4rem;
    color: #333;
}
.filter_li img{
    width: .22rem;
    height: .22rem;
    margin-right: .03rem;
}
.filter_ul .filter_li{
    display: flex;
    align-items: center;
    border: .025rem solid #eee;
    width: 4.7rem;
    height: 1.4rem;
    margin-right: .25rem;
    border-radius: .125rem;
    padding: 0 .25rem;
    margin-bottom: .25rem;
}
.filter_container .filter_ul{
    display: flex;
    flex-wrap: wrap;
    padding: 0 .5rem;
    background-color: #fff;
}
.filter_container .filter_header_style{
    font-size: .4rem;
    color: #333;
    line-height: 1.5rem;
    height: 1.5rem;
    text-align: left;
    padding-left: .5rem;
    background-color: #fff;
}
.sort_container .filter_container{
    flex-direction: column;
    align-items: flex-start;
    min-height: 10.6rem;
    background-color: #f1f1f1;
}
.sort_container .sort_detail_type{
    width: 100%;
    position: absolute;
    display: flex;
    top: 1.6rem;
    left: 0;
    border-top: .025rem solid #e4e4e4;
    background-color: #fff;
}
.sort_icon img{
    width: 10px;
    height: 10px;
}
.choose_type .sort_icon{
    transform: rotate(180deg);
    fill: #3190e8;
}
.sort_item_container .sort_icon{
    vertical-align: middle;
    transition: all .3s;
    fill: #666;
}
.choose_type .category_title{
    color: #3190e8;
}
.sort_item .sort_item_container{
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 14;
    background-color: #fff;
    box-sizing: border-box;
    padding-top: .3rem;
}
.sort_item{
   font-size: .55rem;
    color: #444;
    width: 33.3%;
    height: 1.6rem;
    text-align: center;
    line-height: 1rem;

}
.back_cover{
    display: none;
}
 .head_top{
    background-color: #3190e8;
    width: 100%;
    height: 0.57rem;
  }
  .head_goback{
    left: 0.16rem;
    width: .6rem;
    height: 0.3rem;
    line-height: 0.53rem;
    margin-left: .1rem;
  }
  .title_head{
    position: absolute;
    top: .28rem;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 50%;
    color: white;
    text-align: center;
  }
  .title_head span{
    font-weight: 700;
    font-size: 0.2rem;
  }
  .head_goback .icon_left{
    font-size: .34rem;
    color: white;
  }
</style>
