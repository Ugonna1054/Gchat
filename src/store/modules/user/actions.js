import { userService } from "../../../services/user.services";
import { ApiService } from "../../../services/api.services";

const actions = {
  LOGIN: async ({ commit, dispatch }, { email, password }) => {
    // eslint-disale-next-line prettier/prettier
    return await userService
      .Login(email, password)
      .then(async res => {
        let token = res.token;
        commit("SET_AUTH_TOKEN", res.token);
        commit("SET_IS_AUTHENTICATED", true);
        commit("SET_IS_ADMIN", res.isAdmin);
        ApiService.setHeader(token);
        let authorize = await dispatch("AUTHORISE_USER", token);
        return Promise.resolve({
          isAdmin: res.isAdmin,
          authorize,
        });
      })
      .catch(err => {
        window.console.log(err);
        return Promise.reject(err);
      });
  },

  AUTHORISE_USER: async ({ commit }, token) => {
    return await userService
      .Authorize(token)
      .then(res => {
        window.console.log("user_data", res);
        commit("SET_USER_DATA", res);
        return true;
      })
      .catch(err => {
        window.console.log(err);
        return false;
      });
  }
};

export { actions };
