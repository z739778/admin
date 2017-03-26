import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import usersLogin from '@/components/usersLogin'
import adminIndex from '@/components/adminIndex'

Vue.use(Router)

let routes = [{
  path: '/',
  name: 'Index',
  component: Index,
},{
  path: '/login',
  name: 'usersLogin',
  component: usersLogin
},{
  path: '/admin',
  name: 'adminIndex',
  component: adminIndex,
  meta: {
    auth: true
  }
}]

routes = routes.concat()

export default new Router({
  mode: 'history',
  routes
})