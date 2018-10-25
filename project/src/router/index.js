import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '../components/HelloWorld'
import Mstie from '../components/waimai/msite'
import Result from '../components/waimai/result'
import Sousuo from '../components/waimai/sousuo'
import Resulr_li from '../components/waimai/resulr_li'
import Rvaluate from '../components/waimai/resulr_evaluate'
import Business from '../components/waimai/business'
import Classification from '../components/waimai/classification'
import Noneshangjia from '../components/waimai/none_shangjia'
 Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mstie',
      component: Mstie
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
      children:[
        {
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
      path: '/sousuo',
      name: 'sousuo',
      component: Sousuo
    } ,
    {
      path: '/business',
      name: 'business',
      component: Business
    },
    {
      path:'/classification/:id',
      name:'classification',
      component:Classification
    },{
       path:'/none_shangjia/:id',
       name:'none_shangjia',
       component:Noneshangjia
    }
  ]
})
