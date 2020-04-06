import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import User from "./modules/user/user";
import Chat from "./modules/chat/chat";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: "vuex",
  storage: localStorage,
  reducer: state => ({
    User: state.User, //only saves the user module
    Chat: state.Chat 
  })
});

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    User,
    Chat
  },
  plugins: [vuexPersist.plugin]
});
