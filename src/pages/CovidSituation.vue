<template>
  <Form v-slot="{ meta, values }" :validation-schema="schema">
    <the-header pageNum="2">
      <div class="flex justify-between">
        <section class="mt-10 w-[500px]">
          <div>
            <h2 class="font-bold text-xl">გაქვს გადატანილი Covid-19?*</h2>
            <div class="mt-2 mb-5 ml-5">
              <radio-input value="yes" label="კი" name="covidStatus"/>
            </div>
            <div class="ml-5 mb-5">
              <radio-input value="no" label="არა" name="covidStatus"/>
            </div>
            <div class="ml-5">
              <radio-input value="now" label="ახლა მაქვს" name="covidStatus"/>
            </div>
          </div>
          <div v-if="values.covidStatus === 'yes'" class="mt-10">
            <div class="ml-5">
              <h2 class="font-bold text-xl">
                ანტისხეულების ტესტი გაქვს გაკეთებული?*
              </h2>
              <radio-input value="testYes" label="კი" name="covidTest"/>
            </div>
            <div class="mt-2 mb-5 ml-5">
              <radio-input value="testNo" label="არა" name="covidTest"/>
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
          class="h-[600px]"
          src="@/assets/images/temperature.png"
          alt="Boy with temperature"
        />
      </div>
    </the-header>
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
        :nextPage="{ name: 'covidSituation' }"
      ></the-footer>
    </footer>
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
    RadioInput
  },
  data() {
    return {
      schema: {
        covidStatus(value) {
          if (value) {
            return true;
          }
          return false;
        },
        covidTest(value) {
          if (value) {
            return true;
          }
          return false;
        },
        period(value) {
          const dateRegex =
            /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
          if (dateRegex.test(value)) {
            return true;
          } else if (!value) {
            return "";
          }
          return "რიცხი უნდა ჩაიწეროს დღე/თვე/წელი ფორმატით";
        },
      },
    };
  },
};
</script>

<style scoped>
.box-shadow {
  box-shadow: 0 0 0 1px black;
}
</style>
