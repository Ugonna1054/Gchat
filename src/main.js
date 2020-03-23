import Vue from 'vue'
import App from './App.vue'
import router from './router'

//new additions - refactored bootstrap vue import
import store from "./store/store";
import "./utils/bootstrap-vue/bootstrap-vue";
import "./utils/vue-toastr/toastr";
import "./utils/vee-validate/vee-validate";


import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faSearch, faCommentAlt, faUserFriends, faPhoneAlt, faEllipsisH, faEllipsisV, faAngleLeft, faVideo, faPaperclip, faMicrophone, faSmile, faVideoSlash, faChevronDown, faCaretDown, faUser, faEnvelope, faInfo, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faSearch, faCommentAlt, faUserFriends, faPhoneAlt, faEllipsisH, faEllipsisV, faAngleLeft, faVideo, faPaperclip, faMicrophone, faSmile, faVideoSlash, faChevronDown, faCaretDown, faUser, faEnvelope, faInfo, faUserAlt )

Vue.component('font-awesome-icon', FontAwesomeIcon)

import vueCountryRegionSelect from 'vue-country-region-select'
Vue.use(vueCountryRegionSelect)



import Switches from 'vue-switches';

Vue.config.productionTip = false

new Vue({
  router,
  store,
    Switches,
  render: h => h(App)
}).$mount('#app')
