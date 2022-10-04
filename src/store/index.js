import { createStore } from "vuex";

import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

const store = createStore({
  state() {
    return {
      information: {
        first_name: "",
        last_name: "",
        email: "",
        had_covid: "",
      },
    };
  },
  mutations,
  actions,
  getters,
});

export default store;
