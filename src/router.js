import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Splash from './views/Splash/Splash.vue'
import Login from './views/Login/Login.vue'
import Verify from './views/Login/Verify.vue'
import VerifyNumber from './views/Login/VerifyNumber.vue'
import Username from './views/Login/Username.vue'
import Chatroom from './views/Chatroom/Chatroom.vue'
import View from './views/Chatroom/View.vue'
import Groupchat from './views/Groupchat/Groupchat.vue'
import ViewGroup from './views/Groupchat/ViewGroup.vue'
import CreateGroup from './views/Groupchat/CreateGroup.vue'
import Settings from './views/Settings/Settings.vue'


Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          name: 'Splash',
          component: Splash
      },
      {
          path: '/Login',
          name: 'Login',
          component: Login
      },
      {
          path: '/Verify',
          name: 'Verify',
          component: Verify
      },
      {
          path: '/VerifyNumber',
          name: 'VerifyNumber',
          component: VerifyNumber
      },
      {
          path: '/Username',
          name: 'Username',
          component: Username
      },
      {
          path: '/Chatroom',
          name: 'Chatroom',
          component: Chatroom
      },
      {
          path: '/View',
          name: 'View',
          component: View
      },
      {
          path: '/Groupchat',
          name: 'Groupchat',
          component: Groupchat
      },
      {
          path: '/ViewGroup',
          name: 'ViewGroup',
          component: ViewGroup
      },
      {
          path: '/CreateGroup',
          name: 'CreateGroup',
          component: CreateGroup
      },
      {
          path: '/Settings',
          name: 'Settings',
          component: Settings
      },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ],
    mode:'history'
})
