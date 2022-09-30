import { createRouter, createWebHistory } from "vue-router";
import StartPage from "@/pages/StartPage.vue";
import PersonalInformation from "@/pages/PersonalInformation.vue";
import CovidSituation from "@/pages/CovidSituation.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: StartPage,
    },
    {
      path: "/personal-information",
      name: "information",
      component: PersonalInformation,
    },
    {
      path: "/covid-situation",
      name: "covidSituation",
      component: CovidSituation,
    },
  ],
});

export default router;
