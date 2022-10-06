<template>
  <Form class="h-[100vh]" v-slot="{ meta, values }">
    <the-header :pageNum="2">
      <section class="mt-48 w-[500px]">
        <h2 class="font-bold text-xl mb-2">გაქვს გადატანილი Covid-19?*</h2>
        <radio-input
          value="yes"
          label="კი"
          name="covidStatus"
          v-model="hadCovid"
          :rules="'required'"
        />
        <radio-input
          value="no"
          label="არა"
          name="covidStatus"
          v-model="hadCovid"
          :rules="'required'"
        />
        <radio-input
          value="have_right_now"
          label="ახლა მაქვს"
          name="covidStatus"
          v-model="hadCovid"
          :rules="'required'"
        />
        <div v-if="values.covidStatus === 'yes'" class="mt-10">
          <h2 class="font-bold text-xl mb-2">
            ანტისხეულების ტესტი გაქვს გაკეთებული?*
          </h2>
          <radio-input
            value="true"
            v-model="hadAntibodyTest"
            label="კი"
            name="covidTest"
            :rules="'required'"
          />
          <radio-input
            value="false"
            v-model="hadAntibodyTest"
            label="არა"
            name="covidTest"
            :rules="'required'"
          />
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
            v-model="covidSicknessDate"
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
      hadAntibodyTest: "",
      covidSicknessDate: "",
      testDate: "",
      number: "",
    };
  },
  methods: {
    submit() {
      this.$store.state.information.had_covid = this.hadCovid;
      this.$store.state.information.had_antibody_test = this.hadAntibodyTest;
      this.$store.state.information.antibodies.test_date = this.testDate;
      this.$store.state.information.antibodies.number = this.number;
      this.$store.state.information.covid_sickness_date =
        this.covidSicknessDate;
    },
  },
  beforeMount() {
    this.hadCovid = this.$store.state.information.had_covid;
    this.hadAntibodyTest = this.$store.state.information?.had_antibody_test;
    this.covidSicknessDate = this.$store.state.information.covid_sickness_date;
    this.testDate = this.$store.state.information.antibodies?.test_date;
    this.number = this.$store.state.information.antibodies?.number;
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
