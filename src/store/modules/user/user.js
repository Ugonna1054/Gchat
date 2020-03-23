import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

const state = {
  USER_EMAIL:"",
  USER_DATA: {},
  AUTH_TOKEN: "",
  IS_ADMIN: false,
  IS_AUTHENTICATED: false,
  USER_DETAILS: {},
};

export default { state, getters, mutations, actions };
