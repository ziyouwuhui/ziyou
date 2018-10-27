import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '../components/HelloWorld'
import Mstie from '../components/waimai/msite'
import Result from '../components/waimai/result'
import Resulr_li from '../components/waimai/resulr_li'
import Rvaluate from '../components/waimai/resulr_evaluate'
import Business from '../components/waimai/business'
import Classification from '../components/waimai/classification'
import Noneshangjia from '../components/waimai/none_shangjia'
import Home from '../components/home/Home'
import City from '../components/home/city'
import Login from '../components/home/login'
import Forget from '../components/home/forget'
import Sousuo from '../components/home/sousuo'
// 我的
import Wodes from '../components/wode/wode'
// 我的余额
import Erjiyue from '../components/wode/two/erjiyue'
// 我的优惠
import Erjiwodeyouhui from '../components/wode/two/erjiwodeyouhui'
// 我的积分
import Erjijiwodejifen from '../components/wode/two/erjiwodejifen'
// 积分商城
import Erjijifen from '../components/wode/two/erjijifen'
// 服务中心
import Erjifuwu from '../components/wode/two/erjifuwu'
// 下载饿了吗
import Erjixiazai from '../components/wode/two/erjixiazai'
// 引入我的三级路由
// 余额说明
import Sanjiyue from '../components/wode/three/sanjiyue'
// 红包
// 热门问题
import Sanjifuwu from '../components/wode/three/sanjifuwu'
// 红包说明
import Sanhongbaoshuoming from '../components/wode/three/wodeyouhui/sanhongbaoshuoming'
// 历史红包
import Sanjilishihongbao from '../components/wode/three/wodeyouhui/sanjilishihongbao'
// 积分说明
import Sanjifenshuoming from '../components/wode/three/sanjifenshuoming'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/mstie',
      name: 'mstie',
      component: Mstie
    },
    {
      path: '/result/:id',
      name: 'result',
      component: Result,
      children: [{
          path: '/result/resulr_li/:id',
          component: Resulr_li,
        },
        {
          path: '/result/resulr_evaluate/:id',
          component: Rvaluate,
        },
      ]
    },
    {
      path: "/home",
      name: 'Home',
      component: Home
    },
    {
      path: '/sousuo',
      name: 'sousuo',
      component: Sousuo
    },
    {
      path: '/business',
      name: 'business',
      component: Business
    },
    {
      path: '/classification/:id',
      name: 'classification',
      component: Classification
    },
    {
      path: '/none_shangjia/:id',
      name: 'none_shangjia',
      component: Noneshangjia
    },
    {
      path: '/city/:id',
      name: 'City',
      component: City
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/forget',
      name: 'Forget',
      component: Forget
    }, ,
    // 我的主界面
    {
      path: '/pro',
      component: Wodes
    },
    // 我的余额
    {
      path: '/wodeyue',
      component: Erjiyue,
      children: [{
        path: '/yueshuoming',
        component: Sanjiyue
      }, ]
    },
    // 我的优惠
    {
      path: '/wodeyouhui',
      component: Erjiwodeyouhui,
      children: [{
        path: '/sanjihongbaoshuoming',
        component: Sanhongbaoshuoming
      }, ]
    },
    // 历史红包
    {
      path: '/kanlishihongbao',
      component: Sanjilishihongbao
    },
    {
      path: '/shengjixiazai',
      component: Erjixiazai,
    },
    // 我的积分
    {
      path: '/wodejifen',
      component: Erjijiwodejifen,
      children: [{
        path: '/erjifenshuoming',
        component: Sanjifenshuoming
      }]
    },
    // content
    {
      path: '/jifenn',
      component: Erjijifen
    },
    // 服务中心
    {
      path: '/fufu',
      component: Erjifuwu,
      children: [{
        path: '/erjifuwu',
        component: Sanjifuwu
      }, ]
    },
    // 下载app
    {
      path: '/xiaxia',
      component: Erjixiazai,
    },
  ]
})
