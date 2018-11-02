import Vue from 'vue'
import Router from 'vue-router'
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
import Order from '../components/home/order'
import Details from '../components/home/orderdetails'
import Spinner from '../components/waimai/Spinner'
import Fen from '../components/waimai/fen'
import Fenr from '../components/waimai/fenright'
import Wode from '../components/wode/wode'
import Shoping from '../components/waimai/shoping'
import xuanze from '../components/waimai/xuanze'
import add from '../components/waimai/add'
import kouwei from '../components/waimai/kouwei'
import invoice from '../components/waimai/invoice'
 Vue.use(Router)
// 我的
import Wodes from '../components/wode/wode'
// 账户信息
import erzhanghuxinxi from '../components/wode/two/erzhanghuxinxi'
// 我的余额
import Erjiyue from '../components/wode/two/erjiyue'
// 我的优惠
import Erjiwodeyouhui from '../components/wode/two/erjiwodeyouhui'
// 我的积分
import Erjijiwodejifen from '../components/wode/two/erjiwodejifen'
// 积分商城
import Erjijifen from '../components/wode/two/erjijifen'
// 会员卡
import Erhuiyuanzhongxin from '../components/wode/two/huiyuanzhongxin'
import Sangoumaishi from '../components/wode/three/sangoumaishi'
import Sangoumaijilu from '../components/wode/three/sangoumaijilu'
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
// 兑换红包
import Sanduihuanhongbao from '../components/wode/three/wodeyouhui/sanduihuanhongbao'
// 推荐有奖
import Tuijianyoujiang from "../components/wode/three/wodeyouhui/tuijianyoujiang";
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
      component: Login
    },
    {
      path: '/forget',
      name: 'Forget',
      component: Forget
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      children:[
        {
          path: 'orderdetails',
          name: 'Details',
          component: Details
        }
      ]
    },
    {
      path:'/Spinner',
      name:'Spinner',
      component:Spinner,
      children:[
        {
          path: '/Spinner/fen',
          name:'fen',
          component: Fen,
        },
        {
          path: '/Spinner/fenright',
          name:'fenringht',
          component: Fenr,
        },
      ]
    },
    {
      path: '/pro',
      component: Wode,
    },
      {
        path:'/shoping',
        name:'shoping',
        component:Shoping
      },{
        path:'xuanze',
        name:'xuanze',
        component:xuanze
      },{
        path:'add',
        name:'add',
        component:add
      },{
        path:'kouwei',
        name:'kouwei',
        component:kouwei
      },{
        path:'invoice',
        name:'invoice',
        component:invoice
      },
    // 我的主界面
    {
      path: '/pro',
      component: Wodes
    },
    // 账户到我的
    {
      path: '/tuiwode',
      component: Wodes
    },
    // 账户修改密码
    {
      path: '/xiugaimima',
      component: Forget
    },
  //  新增收货地址
  {
    path: '/xinzengdizhi',
    component: Wodes
  },

    {
      path: '/dengwode',
      component: Wodes
     
    },
    {
      path: '/lulu',
      component: erzhanghuxinxi
    },
    // 我的余额
    {
      path: '/wodeyue',
      component: Erjiyue,
     
    },
    {
      path: '/yueshuoming',
      component: Sanjiyue
    }, 
    // 我的优惠
    {
      path: '/wodeyouhui',
      component: Erjiwodeyouhui,
      children: [{
        path: '/sanjihongbaoshuoming',
        component: Sanhongbaoshuoming
      }]
    },
    {
      path: '/daijinjuanshuoming',
      component: Sanjiyue
     
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
    // 兑换红包
    {
      path: '/duihuanhongbao',
      component: Sanduihuanhongbao
    },
        // 推荐有奖
        {
          path: '/tuijianyoujiang',
          component: Tuijianyoujiang
        },
       
    // 我的积分
    {
      path: '/wodejifen',
      component: Erjijiwodejifen,
    },
      {
        path: '/erjifenshuoming',
        component: Sanjifenshuoming
      },
    // content
    {
      path: '/jifenn',
      component: Erjijifen
    },
    // 会员卡
    {
      path: '/hui',
      component: Erhuiyuanzhongxin
    },
    {
      path: '/goumaishi',
      component:  Sangoumaishi
    },
    {
      path: '/snafapiao',
      component: Sangoumaijilu
    },
   
    // 服务中心
    {
      path: '/fufu',
      component: Erjifuwu,
    },
    {
      path: '/erjifuwu/:index',
      component: Sanjifuwu
    },
    // 下载app
    {
      path: '/xiaxia',
      component: Erjixiazai,
    },
  ]
})
