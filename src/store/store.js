import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import User from "./modules/user/user";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: "vuex",
  storage: localStorage,
  reducer: state => ({
    User: state.User, //only saves the user module
    Agent: state.Agent 
  })
});

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    User,
  },
  plugins: [vuexPersist.plugin]
});
