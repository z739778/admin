import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import usersLogin form '@components/usersLogin'

Vue.use(Router)

let routes = [{
  path: '/',
  name: 'Index',
  component: Index
},{
  path: '/login',
  name: 'usersLogin',
  component: usersLogin
}]

routes = routes.concat()

export default new Router({
  mode: 'history',
  routes
})