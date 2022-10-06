import { createRouter, createWebHistory } from "vue-router";
import StartPage from "@/pages/StartPage.vue";
import PersonalInformation from "@/pages/PersonalInformation.vue";
import CovidSituation from "@/pages/CovidSituation.vue";
import Vaccinated from "@/pages/Vaccinated.vue";
import CovidPolicy from "@/pages/CovidPolicy.vue";
import ThankYou from "@/pages/ThankYou.vue";
import NotFound from "@/pages/NotFound.vue";

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
    {
      path: "/vaccinated",
      name: "vaccinated",
      component: Vaccinated,
    },
    {
      path: "/covid-policy",
      name: "covidPolicy",
      component: CovidPolicy,
    },
    {
      path: "/thank-you",
      name: "thankYou",
      component: ThankYou,
    },
    {
      path: "/:notFound(.*)",
      name: "notFound",
      component: NotFound,
    },
  ],
});

export default router;
