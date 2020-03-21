const mutations = {
  SET_USER_DATA(state, payload) {
    state.USER_DATA = payload;
  },
  SET_IS_ADMIN(state, payload) {
    state.IS_ADMIN = payload;
  },
  SET_IS_AUTHENTICATED(state, payload) {
    state.IS_AUTHENTICATED = payload;
  },
  SET_AUTH_TOKEN(state, payload) {
    state.AUTH_TOKEN = payload;
  },
  SET_USER_DETAILS(state, payload) {
    state.USER_DETAILS = payload;
  },

};

export { mutations };
