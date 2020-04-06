import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

const state = {
  CONTACTS:[],
  SELECTED_CONTACTS:[],
  GROUPS:[],
  GROUP_MESSAGE:[],
  GROUP_DETAILS:{} //all groups connected to a user
};

export default { state, getters, mutations, actions };
