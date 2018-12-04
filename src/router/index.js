import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const routes = [
  { path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    children: [
      {path: '/about', name: 'about', component: require('../components/pages/about').default},
      {path: '/practice', name: 'practice', component: require('../components/pages/practice').default},
      {path: '/casual', name: 'casual', component: require('../components/pages/casual').default}
    ]
  }
]

export default new Router({
  routes
})
