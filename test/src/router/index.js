import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import filterAndMustache from '@/components/filterAndMustache'
import comp from '@/components/comp'
import Toolbar from '@/components/noteapp/Toolbar'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
//mode:'history',
  routes: [    
  	{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/filter',
      name: 'filterAndMustache',
      component: filterAndMustache
    },
    {
      path: '/comp',
      name: 'comp',
      component: comp
    },
    {
      path: '/noteapp',
      name: 'Toolbar',
      component: Toolbar
    },
    {
    	path:'/test',
    	name:'Test',
    	component:Test
    },
  ]
})
