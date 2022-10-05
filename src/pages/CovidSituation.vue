<template>
  <Form class="h-[100vh]" v-slot="{ meta, values }">
    <the-header :pageNum="2">
      <section class="mt-48 w-[500px]">
        <div>
          <h2 class="font-bold text-xl">გაქვს გადატანილი Covid-19?*</h2>
          <div class="mt-2 mb-5 ml-5">
            <radio-input
              value="yes"
              label="კი"
              name="covidStatus"
              :componentValue="hadCovid"
              @radioValue="setHadCovidValue"
              :rules="'required'"
            />
          </div>
          <div class="ml-5 mb-5">
            <radio-input
              value="no"
              label="არა"
              name="covidStatus"
              :componentValue="hadCovid"
              @radioValue="setHadCovidValue"
              :rules="'required'"
            />
          </div>
          <div class="ml-5">
            <radio-input
              value="have_right_now"
              label="ახლა მაქვს"
              name="covidStatus"
              :componentValue="hadCovid"
              @radioValue="setHadCovidValue"
              :rules="'required'"
            />
          </div>
        </div>
        <div v-if="values.covidStatus === 'yes'" class="mt-10">
          <h2 class="font-bold text-xl">
            ანტისხეულების ტესტი გაქვს გაკეთებული?*
          </h2>
          <div class="ml-5 mb-5 mt-2">
            <radio-input
              value="true"
              :componentValue="hadAntibodyTest"
              @radioValue="sethadAntibodyTestValue"
              label="კი"
              name="covidTest"
              :rules="'required'"
            />
          </div>
          <div class="mt-2 mb-5 ml-5">
            <radio-input
              value="false"
              :componentValue="hadAntibodyTest"
              @radioValue="sethadAntibodyTestValue"
              label="არა"
              name="covidTest"
              :rules="'required'"
            />
          </div>
        </div>

        <div v-if="values.covidStatus === 'yes' && values.covidTest === 'true'">
          <h2 class="font-bold text-xl">
            თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
            რაოდენობა*
          </h2>
          <input
            class="outline-none ml-5 w-full px-5 py-2 bg-inherit border border-gray-600 mt-3 placeholder-gray-500"
            type="date"
            name="date"
            placeholder="რიცხვი"
            v-model="testDate"
          />
          <input
            type="number"
            class="outline-none ml-5 w-full px-5 py-2 bg-inherit border border-gray-600 mt-3 placeholder-gray-500"
            name="antiBodies"
            placeholder="ანტისხეულების რაოდენობა"
            v-model="number"
          />
        </div>
        <div
          v-if="values.covidStatus === 'yes' && values.covidTest === 'false'"
        >
          <text-input
            componenetRule="required|date"
            type="text"
            label="მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*"
            name="period"
            @getValue="setcovidSicknessDate"
            :value="covidSicknessDate"
            placeholder="დდ/თთ//წწ"
          />
        </div>
      </section>
      <img
        class="h-[650px] w-[750px] mt-40 z-10"
        src="@/assets/images/temperature.png"
        alt="Boy with temperature"
      />
    </the-header>
    <footer class="mt-10">
      <the-footer
        :isActive="meta.valid"
        :previousPage="{ name: 'information' }"
        :nextPage="{ name: 'vaccinated' }"
        @storeData="submit"
      ></the-footer>
    </footer>
    <transition name="ball" appear>
      <img
        class="h-[200px] absolute left-[1020px] top-[340px]"
        src="@/assets/images/redball.png"
        alt="Red ball"
      />
    </transition>
  </Form>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import RadioInput from "@/components/RadioInput.vue";
import TextInput from "@/components/TextInput.vue";
export default {
  components: {
    Field,
    ErrorMessage,
    Form,
    RadioInput,
    TextInput,
  },
  data() {
    return {
      hadCovid: "",
      hadAntibodyTest: null,
      covidSicknessDate: "",
      testDate: "",
      number: null,
    };
  },
  methods: {
    submit() {
      if (this.hadCovid === "no" || this.hadCovid === "have_right_now") {
        return (this.$store.state.information.had_covid = this.hadCovid);
      }
      this.$store.state.information.had_covid = this.hadCovid;
      this.$store.state.information.had_antibody_test = this.hadAntibodyTest;
      if (this.hadAntibodyTest === "true") {
        this.$store.state.information.antibodies.test_date = this.testDate;
        this.$store.state.information.antibodies.number = this.number;
      } else {
        this.$store.state.information.covid_sickness_date =
          this.covidSicknessDate;
      }
    },
    setHadCovidValue(value) {
      this.hadCovid = value;
    },
    sethadAntibodyTestValue(value) {
      this.hadAntibodyTest = value;
      
    },
    setcovidSicknessDate(value) {
      this.covidSicknessDate = value;
    },
  },
  beforeMount() {
    this.hadCovid = this.$store.getters.hadCovid;
    this.hadAntibodyTest = this.$store.getters.hadAntibodyTest;
    this.covidSicknessDate = this.$store.getters.covidSicknessDate;
    this.testDate = this.$store.getters.testDate;
    this.number = this.$store.getters.number;
  },
};
</script>

<style scoped>
.ball-enter-from {
  translate: 100px -100px;
  width: 400px;
}
.ball-enter-active {
  transition: all 0.3s ease-out;
}
.ball-enter-to {
  width: 200px;
}
</style>
