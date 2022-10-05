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
        had_antibody_test: null,
        covid_sickness_date: "",
        antibodies: {
          test_date: "",
          number: null,
        },
        had_vaccine: "",
        vaccination_stage: "",
        i_am_waiting: "",
        non_formal_meetings: "",
        number_of_days_from_office: "",
        what_about_meetings_in_live: "",
        tell_us_your_opinion_about: "",
      },
    };
  },
  mutations,
  actions,
  getters,
});

export default store;
