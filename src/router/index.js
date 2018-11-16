import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Ebook from '@/pages/Ebook'
import Shop from '@/pages/Shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      redirect:'/ebook'
    },
    {
      path: '/ebook',
      name: 'Ebook',
      component: Ebook,
      children:[{
        path: ':fileName', //动态路由
        component: () => import('@/components/ebook/EbookReader.vue'),     
      }]
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
  ]
})
