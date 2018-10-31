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
import Spinner from '../components/waimai/Spinner'
import Fen from '../components/waimai/fen'
 Vue.use(Router)

export default new Router({
  routes: [
    {
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
      path:"/home",
      name: 'Home',
      component:Home
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
    },
    {
       path:'/none_shangjia/:id',
       name:'none_shangjia',
       component:Noneshangjia
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
<<<<<<< HEAD
    },{
      path:'/Spinner',
      name:'Spinner',
      component:Spinner,
      children:[
        {
          path: '/Spinner/fen',
          component: Fen,
        },
      ]
    }
=======
    },
   
>>>>>>> 2d35a6950cdb04f5ff6ae4c2e3567e853d4226e3
  ]
})
