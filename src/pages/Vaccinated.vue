<template>
  <Form v-slot="{ meta, values }" :validation-schema="schema">
    <the-header pageNum="3">
      <div class="flex justify-between">
        <section class="mt-10 w-[700px]">
          <div>
            <h2 class="font-bold text-xl">უკვე აცრილი ხარ?*</h2>
            <div class="mt-2 mb-5 ml-5">
              <label class="text-lg ml-2">
                <Field
                  type="radio"
                  class="appearance-none rounded-full bg-inherit box-shadow border-2 border-[#B5C0C7] p-1 checked:bg-neutral-900"
                  name="vaccinated"
                  :value="'yes'"
                />
                კი
              </label>
            </div>
            <div class="ml-5 mb-5">
              <label class="text-lg ml-2">
                <Field
                  type="radio"
                  class="appearance-none rounded-full bg-inherit box-shadow border-2 border-[#B5C0C7] p-1 checked:bg-neutral-900"
                  name="vaccinated"
                  :value="'no'"
                />
                არა
              </label>
            </div>
          </div>

          <div v-if="values.vaccinated === 'yes'" class="mt-10">
            <h2 class="font-bold text-xl">აირჩიე რა ეტაპზე ხარ*</h2>
            <div class="ml-5 mt-2">
              <label class="text-lg ml-2">
                <Field
                  type="radio"
                  class="appearance-none rounded-full bg-inherit box-shadow border-2 border-[#B5C0C7] p-1 checked:bg-neutral-900"
                  name="stage"
                  :value="'FirstDoseAndReg'"
                />
                პირველი დოზა და დარეგისტრირებული ვარ მეორეზე
              </label>
            </div>
            <div class="my-5 ml-5">
              <label class="text-lg ml-2">
                <Field
                  type="radio"
                  class="appearance-none rounded-full bg-inherit box-shadow border-2 border-[#B5C0C7] p-1 checked:bg-neutral-900"
                  name="stage"
                  :value="'fullyVacinated'"
                />
                სრულად აცრილი ვარ
              </label>
            </div>
            <div class="ml-5">
              <label class="text-lg ml-2">
                <Field
                  type="radio"
                  class="appearance-none rounded-full bg-inherit box-shadow border-2 border-[#B5C0C7] p-1 checked:bg-neutral-900"
                  name="stage"
                  :value="'FirstDoseAndNoReg'"
                />
                პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე
              </label>
            </div>
            <div v-if="values.stage === 'FirstDoseAndNoReg'" class="w-80 mt-10">
              <h2 class="ml-12">
                რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი
                <a class="text-[#1289AE]" target="_blank" href=" https://booking.moh.gov.ge/">
                  https://booking.moh.gov.ge/
                </a>
              </h2>
            </div>
          </div>

          <div v-if="values.vaccinated === 'no'" class="mt-10">
            <h2 class="font-bold text-xl">რას ელოდები?*</h2>
            <div class="ml-5 mt-2">
              <label class="text-lg ml-2">
                <Field
                  type="radio"
                  class="appearance-none rounded-full bg-inherit box-shadow border-2 border-[#B5C0C7] p-1 checked:bg-neutral-900"
                  name="wait"
                  :value="'registeredAndWait'"
                />
                დარეგისტრირებული ვარ და ველოდები რიცხვს
              </label>
            </div>
            <div class="my-5 ml-5">
              <label class="text-lg ml-2">
                <Field
                  type="radio"
                  class="appearance-none rounded-full bg-inherit box-shadow border-2 border-[#B5C0C7] p-1 checked:bg-neutral-900"
                  name="wait"
                  :value="'notPlanned'"
                />
                არ ვგეგმავ
              </label>
            </div>
            <div class="ml-5">
              <label class="text-lg ml-2">
                <Field
                  type="radio"
                  class="appearance-none rounded-full bg-inherit box-shadow border-2 border-[#B5C0C7] p-1 checked:bg-neutral-900"
                  name="wait"
                  :value="'infectedAndPlanVacination'"
                />
                გადატანილი მაქვს და ვგეგმავ აცრას
              </label>
            </div>
            <div
              v-if="values.wait === 'infectedAndPlanVacination'"
              class="mt-10"
            >
              <h2 class="ml-12 w-96">
                ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ
                ვაქცინის გაკეთება. </h2>
                <p class="ml-12 mt-5">👉 რეგისტრაციის ბმული</p>
                <a class="text-[#1289AE] ml-12" target="_blank" href=" https://booking.moh.gov.ge/">
                  https://booking.moh.gov.ge/
                </a>
              
            </div>
          </div>
        </section>
        <img
          class="h-[600px]"
          src="@/assets/images/doctor.png"
          alt="Doctor with syringe"
        />
      </div>
      <button @click="log">dsf</button>
    </the-header>
    <footer class="mt-20">
      <the-footer
        pageNum="3"
        :isActive="
          meta.valid ||
          values.covidStatus === 'no' ||
          values.covidStatus === 'now' ||
          values.covidTest === 'testYes'
        "
        :previousPage="{ name: 'information' }"
        :nextPage="{ name: 'covidSituation' }"
      ></the-footer>
    </footer>
  </Form>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
export default {
  components: {
    Field,
    ErrorMessage,
    Form,
  },
  data() {
    return {
      schema: {
        vaccinated(value) {
          if (value) {
            return true;
          }
          return false;
        },
        stage(value) {
          if (value) {
            return true;
          }
          return false;
        },
        wait(value) {
          if (value) {
            return true;
          }
          return false;
        },
      },
    };
    },
    methods: {
        log() {
            console.log(this.Form);
    }
  }
};
</script>

<style scoped>
.box-shadow {
  box-shadow: 0 0 0 1px black;
}
</style>
