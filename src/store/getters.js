export default {
  finalInformation(state) {
    const finalInformation = {};
    finalInformation.first_name = state.information.first_name;
    finalInformation.last_name = state.information.last_name;
    finalInformation.email = state.information.email;

    if (
      state.information.had_covid === "no" ||
      state.information.had_covid === "have_right_now"
    ) {
      finalInformation.had_covid = state.information.had_covid;
    } else if (state.information.had_antibody_test === "true") {
      finalInformation.had_covid = state.information.had_covid;
      finalInformation.had_antibody_test = JSON.parse(
        state.information.had_antibody_test
      );
      if (
        state.information.antibodies.test_date ||
        state.information.antibodies.number
      ) {
        finalInformation.antibodies = {};
      }
      if (state.information.antibodies.test_date) {
        finalInformation.antibodies.test_date =
          state.information.antibodies.test_date;
      }
      if (state.information.antibodies.number) {
        finalInformation.antibodies.number =
          state.information.antibodies.number;
      }
    } else if (state.information.had_antibody_test === "false") {
      finalInformation.had_covid = state.information.had_covid;
      finalInformation.had_antibody_test = JSON.parse(
        state.information.had_antibody_test
      );
      finalInformation.covid_sickness_date =
        state.information.covid_sickness_date;
    }

    finalInformation.had_vaccine = JSON.parse(state.information.had_vaccine);
    if (finalInformation.had_vaccine) {
      finalInformation.vaccination_stage = state.information.vaccination_stage;
    } else {
      finalInformation.i_am_waiting = state.information.i_am_waiting;
    }

    finalInformation.non_formal_meetings =
      state.information.non_formal_meetings;
    finalInformation.number_of_days_from_office = JSON.parse(
      state.information.number_of_days_from_office
    );
    if (state.information.what_about_meetings_in_live) {
      finalInformation.what_about_meetings_in_live =
        state.information.what_about_meetings_in_live;
    }
    if (state.information.tell_us_your_opinion_about_us) {
      finalInformation.tell_us_your_opinion_about_us =
        state.information.tell_us_your_opinion_about_us;
    }

    return finalInformation;
  },
};
