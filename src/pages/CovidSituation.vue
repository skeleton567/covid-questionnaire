<template>
  <Form v-slot="{ meta, values }" :validation-schema="schema">
    <the-header pageNum="2">
      <div class="flex justify-between">
        <section class="mt-10 w-[500px]">
          <div>
            <h2 class="font-bold text-xl">გაქვს გადატანილი Covid-19?*</h2>
            <div class="mt-2 mb-5 ml-5">
              <radio-input value="yes" label="კი" name="covidStatus" />
            </div>
            <div class="ml-5 mb-5">
              <radio-input value="no" label="არა" name="covidStatus" />
            </div>
            <div class="ml-5">
              <radio-input value="now" label="ახლა მაქვს" name="covidStatus" />
            </div>
          </div>
          <div v-if="values.covidStatus === 'yes'" class="mt-10">
            <div class="ml-5">
              <h2 class="font-bold text-xl">
                ანტისხეულების ტესტი გაქვს გაკეთებული?*
              </h2>
              <radio-input value="testYes" label="კი" name="covidTest" />
            </div>
            <div class="mt-2 mb-5 ml-5">
              <radio-input value="testNo" label="არა" name="covidTest" />
            </div>
          </div>

          <div
            v-if="
              values.covidStatus === 'yes' && values.covidTest === 'testYes'
            "
          >
            <h2 class="font-bold text-xl">
              თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და
              ანტისხეულების რაოდენობა*
            </h2>
            <Field
              class="outline-none ml-5 w-full px-5 py-2 bg-inherit border border-gray-600 mt-3 placeholder-gray-500"
              type="number"
              name="date"
              placeholder="რიცხვი"
            />
            <Field
              class="outline-none ml-5 w-full px-5 py-2 bg-inherit border border-gray-600 mt-3 placeholder-gray-500"
              name="antiBodies"
              placeholder="ანტისხეულების რაოდენობა"
            />
          </div>

          <div
            v-if="values.covidStatus === 'yes' && values.covidTest === 'testNo'"
          >
            <label for="period" class="font-bold text-xl">
              მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*
            </label>
            <Field
              class="outline-none ml-5 w-full px-5 py-2 bg-inherit border border-gray-600 mt-3 placeholder-gray-500"
              id="period"
              type="text"
              name="period"
              placeholder="დდ/თთ/წწ"
            />
            <ErrorMessage
              class="text-red-400 text-sm px-5 ml-4"
              name="period"
            />
          </div>
        </section>
        <img
          class="h-[650px] w-[850px] z-10"
          src="@/assets/images/temperature.png"
          alt="Boy with temperature"
        />
      </div>

      <footer class="mt-20">
        <the-footer
          pageNum="2"
          :isActive="
            meta.valid ||
            values.covidStatus === 'no' ||
            values.covidStatus === 'now' ||
            values.covidTest === 'testYes'
          "
          :previousPage="{ name: 'information' }"
          :nextPage="{ name: 'vaccinated' }"
        ></the-footer>
      </footer>
      <transition name="ball" appear>
        <img
          class="h-[200px] absolute left-[940px] top-[340px]"
          src="@/assets/images/redball.png"
          alt="Red ball"
        />
      </transition>
    </the-header>
  </Form>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import RadioInput from "@/components/RadioInput.vue";
export default {
  components: {
    Field,
    ErrorMessage,
    Form,
    RadioInput,
  },
  data() {
    return {
      schema: {
        covidStatus: "required",
        covidTest: "required",
        period: "date",
      },
    };
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
