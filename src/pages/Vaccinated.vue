<template>
  <Form class="h-[100vh]" v-slot="{ values, meta }">
    <the-header :pageNum="3">
      <section class="mt-48 w-[700px]">
        <h2 class="font-bold text-xl mb-2">უკვე აცრილი ხარ?*</h2>
        <radio-input
          value="true"
          label="კი"
          name="vaccinated"
          :rules="'required'"
          v-model="hadVaccine"
        />
        <radio-input
          value="false"
          label="არა"
          name="vaccinated"
          :rules="'required'"
          v-model="hadVaccine"
        />
        <div v-if="values.vaccinated === 'true'" class="mt-10">
          <h2 class="font-bold text-xl mb-2">აირჩიე რა ეტაპზე ხარ*</h2>
          <radio-input
            value="first_dosage_and_registered_on_the_second"
            label="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
            name="stage"
            :rules="'required'"
            v-model="vaccinationStage"
          />
          <radio-input
            value="fully_vaccinated"
            label="სრულად აცრილი ვარ"
            name="stage"
            :rules="'required'"
            v-model="vaccinationStage"
          />
          <radio-input
            value="first_dosage_and_not_registered_yet"
            label="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
            name="stage"
            :rules="'required'"
            v-model="vaccinationStage"
          />
          <div
            v-if="values.stage === 'first_dosage_and_not_registered_yet'"
            class="w-80 mt-10"
          >
            <h2 class="ml-12">
              რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი
              <a
                class="text-[#1289AE]"
                target="_blank"
                href=" https://booking.moh.gov.ge/"
              >
                https://booking.moh.gov.ge/
              </a>
            </h2>
          </div>
        </div>

        <div v-if="values.vaccinated === 'false'" class="mt-10">
          <h2 class="font-bold text-xl mb-2">რას ელოდები?*</h2>
          <radio-input
            value="registered_and_waiting"
            label="დარეგისტრირებული ვარ და ველოდები რიცხვს"
            name="wait"
            :rules="'required'"
            v-model="iAmWaiting"
          />
          <radio-input
            value="not_planning"
            label="არ ვგეგმავ"
            name="wait"
            v-model="iAmWaiting"
          />
          <radio-input
            value="had_covid_and_planning_to_be_vaccinated"
            label="გადატანილი მაქვს და ვგეგმავ აცრას"
            name="wait"
            v-model="iAmWaiting"
          />
          <div
            v-if="values.wait === 'had_covid_and_planning_to_be_vaccinated'"
            class="mt-10"
          >
            <h2 class="ml-12 w-96">
              ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ
              ვაქცინის გაკეთება.
            </h2>
            <p class="ml-12 mt-5">👉 რეგისტრაციის ბმული</p>
            <a
              class="text-[#1289AE] ml-12"
              target="_blank"
              href=" https://booking.moh.gov.ge/"
            >
              https://booking.moh.gov.ge/
            </a>
          </div>
        </div>
      </section>
      <img
        class="h-[600px] w-[800px] mt-48 z-10"
        src="@/assets/images/doctor.png"
        alt="Doctor with syringe"
      />

      <transition :name="animation" appear>
        <img
          class="h-[250px] mt-10 absolute top-36 right-[700px]"
          src="@/assets/images/star.png"
          alt="Doctor with syringe"
        />
      </transition>
    </the-header>
    <footer class="mt-14">
      <the-footer
        :isActive="meta.valid"
        :previousPage="{ name: 'covidSituation' }"
        :nextPage="{ name: 'covidPolicy' }"
        @storeData="submit"
      ></the-footer>
    </footer>
  </Form>
</template>

<script>
import { Form } from "vee-validate";
import RadioInput from "@/components/RadioInput.vue";
export default {
  components: {
    Form,
    RadioInput,
  },
  data() {
    return {
      hadVaccine: "",
      vaccinationStage: "",
      iAmWaiting: "",
      lastPath: null,
    };
  },
  methods: {
    submit() {
      this.$store.state.information.had_vaccine = this.hadVaccine;
      this.$store.state.information.vaccination_stage = this.vaccinationStage;
      this.$store.state.information.i_am_waiting = this.iAmWaiting;
    },
  },
  beforeMount() {
    this.hadVaccine = this.$store.state.information?.had_vaccine;
    this.vaccinationStage = this.$store.state.information.vaccination_stage;
    this.iAmWaiting = this.$store.state.information.i_am_waiting;
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.prevRoute = from;
    });
  },
  created() {
    this.lastPath = this.$router.options.history.state.back;
  },
  computed: {
    prevRoutePatch() {
      return this.lastPath ? this.lastPath : "/";
    },
    animation() {
      if (this.lastPath === "/covid-policy") {
        return "reverseStar";
      } else {
        return "star";
      }
    },
  },
};
</script>

<style scoped>
.star-enter-from {
  translate: -200px +200px;
}
.star-enter-active {
  transition: all 0.1s ease-in;
}
.star-enter-to {
  translate: 0px 0px;
}
.reverseStar-enter-from {
  translate: 200px 200px;
}
.reverseStar-enter-active {
  transition: all 0.1s ease-in;
}
.reverseStar-enter-to {
  translate: 0px 0px;
}
</style>
