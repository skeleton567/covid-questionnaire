export default {
  name(state) {
    return state.information.first_name;
  },
  lastName(state) {
    return state.information.last_name;
  },
  email(state) {
    return state.information.email;
  },
  hadCovid(state) {
    return state.information.had_covid;
  },
  hadAntibodyTest(state) {
    return state.information.had_antibody_test;
  },
  covidSicknessDate(state) {
    return state.information.covid_sickness_date;
  },
  testDate(state) {
    return state.information.antibodies.test_date;
  },
  number(state) {
    return state.information.antibodies.number;
  },
  hadVaccine(state) {
    return state.information.had_vaccine;
  },
  vaccinationStage(state) {
    return state.information.vaccination_stage;
  },
  iAmWaiting(state) {
    return state.information.i_am_waiting;
  },
  nonFormalMeetings(state) {
    return state.information.non_formal_meetings;
  },
  numberOfDaysFromOffice(state) {
    return state.information.number_of_days_from_office;
  },
  tellUsYourOpinionAbout(state) {
    return state.information.tell_us_your_opinion_about;
  },
  whatAboutMeetingsInLive(state) {
    return state.information.what_about_meetings_in_live;
  },
};
