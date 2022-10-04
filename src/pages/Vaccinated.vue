<template>
  <Form v-slot="{ values }" :validation-schema="schema">
    <the-header pageNum="3">
      <div class="flex justify-between">
        <section class="mt-10 w-[700px]">
          <h2 class="font-bold text-xl">უკვე აცრილი ხარ?*</h2>
          <div class="ml-5">
            <div class="mt-2 mb-5">
              <radio-input value="yes" label="კი" name="vaccinated" />
            </div>
            <radio-input value="no" label="არა" name="vaccinated" />
          </div>
          <div v-if="values.vaccinated === 'yes'" class="mt-10">
            <h2 class="font-bold text-xl">აირჩიე რა ეტაპზე ხარ*</h2>
            <div class="ml-5 mt-2">
              <radio-input
                value="FirstDoseAndReg"
                label="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
                name="stage"
              />
            </div>
            <div class="my-5 ml-5">
              <radio-input
                value="fullyVacinated"
                label="სრულად აცრილი ვარ"
                name="stage"
              />
            </div>
            <div class="ml-5">
              <radio-input
                value="FirstDoseAndNoReg"
                label="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
                name="stage"
              />
            </div>
            <div v-if="values.stage === 'FirstDoseAndNoReg'" class="w-80 mt-10">
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

          <div v-if="values.vaccinated === 'no'" class="mt-10">
            <h2 class="font-bold text-xl">რას ელოდები?*</h2>
            <div class="ml-5 mt-2">
              <radio-input
                value="registeredAndWait"
                label="დარეგისტრირებული ვარ და ველოდები რიცხვს"
                name="wait"
              />
            </div>
            <div class="my-5 ml-5">
              <radio-input value="notPlanned" label="არ ვგეგმავ" name="wait" />
            </div>
            <div class="ml-5">
              <radio-input
                value="infectedAndPlanVacination"
                label="გადატანილი მაქვს და ვგეგმავ აცრას"
                name="wait"
              />
            </div>
            <div
              v-if="values.wait === 'infectedAndPlanVacination'"
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
          class="h-[600px] w-[800px] mt-10 z-10"
          src="@/assets/images/doctor.png"
          alt="Doctor with syringe"
        />
      </div>
      <footer class="mt-20">
        <the-footer
          :isActive="
            values.vaccinated === 'yes' &&
            values.stage ||
            values.vaccinated === 'no' &&
            values.wait
          "
          :previousPage="{ name: 'covidSituation' }"
          :nextPage="{ name: 'covidSituation' }"
        ></the-footer>
      </footer>

      <transition name="star" appear>
        <img
          class="h-[250px] mt-10 absolute top-36 right-[700px]"
          src="@/assets/images/star.png"
          alt="Doctor with syringe"
        />
      </transition>
    </the-header>
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
      schema: {
        vaccinated: "required",
        stage: "required",
        wait: "required",
      },
    };
  },
};
</script>

<style scoped>
.star-enter-from {
  translate: -200px +200px;
}
.star-enter-active {
  transition: all 0.2s ease-out;
}
.star-enter-to {
  translate: 0px 0px;
}

.box-shadow {
  box-shadow: 0 0 0 1px black;
}
</style>
