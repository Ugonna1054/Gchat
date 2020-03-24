import Vue from 'vue'
import Router from 'vue-router'
import Splash from './views/Splash/Splash.vue'
import Login from './views/Login/Login.vue'
import LoginUser from './views/Login/LoginUser.vue'
import Verify from './views/Login/Verify.vue'
import VerifyNumber from './views/Login/VerifyNumber.vue'
import Username from './views/Login/Username.vue'
import Chatroom from './views/Chatroom/Chatroom.vue'
import View from './views/Chatroom/View.vue'
import Profile from './views/Chatroom/Profile.vue'
import Groupchat from './views/Groupchat/Groupchat.vue'
import ViewGroup from './views/Groupchat/ViewGroup.vue'
import CreateGroup from './views/Groupchat/CreateGroup.vue'
import SelectMembers from './views/Groupchat/SelectMembers.vue'
import GroupInfo from './views/Groupchat/GroupInfo.vue'
import Settings from './views/Settings/Settings.vue'
import EditProfile from './views/Settings/EditProfile.vue'
import Password from './views/Settings/Password.vue'
import Privacy from './views/Settings/Privacy.vue'
import Chat from './views/Settings/Chat.vue'
import Help from './views/Settings/Help.vue'
import Contacts from './views/Contacts/Contacts.vue'
import AddContact from './views/Contacts/AddContact.vue'
import Search from './views/Contacts/Search.vue'
import Call from './views/Call/Call.vue'


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
        path: '/LoginUser',
        name: 'LoginUser',
        component: LoginUser
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
          path: '/Profile',
          name: 'Profile',
          component: Profile
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
          path: '/SelectMembers',
          name: '/SelectMembers',
          component: SelectMembers
      },
      {
          path: '/GroupInfo',
          name: '/GroupInfo',
          component: GroupInfo
      },
      {
          path: '/Settings',
          name: 'Settings',
          component: Settings
      },
      {
        path: '/EditProfile',
        name: 'EditProfile',
        component: EditProfile
    },
    {
        path: '/Password',
        name: 'password',
        component: Password
    },
      {
        path: '/Privacy',
        name: 'Privacy',
        component: Privacy
    },
    {
        path: '/Chat',
        name: 'Chat',
        component: Chat
    },
    {
        path: '/Help',
        name: 'Help',
        component: Help
    },
    {
        path: '/Contacts',
        name: 'Contacts',
        component: Contacts
    },
    {
        path: '/AddContact',
        name: 'AddContact',
        component: AddContact
    },
    {
        path: '/Search',
        name: 'Search',
        component: Search
    },
    {
      path: '/Call',
      name: 'Call',
      component: Call
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
