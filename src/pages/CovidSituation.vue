<template>
    <Form>
  <the-header pageNum="2">
    <div class="flex justify-between">
      <section class="mt-10 w-[500px]">
        <div>
          <h2 class="font-bold text-xl">გაქვს გადატანილი Covid-19?*</h2>
          <div class="mt-2 mb-5 ml-5">
            <Field
              v-slot="{ covidStatus }"
              name="covidStatus"
              type="radio"
              :value="yes"
            >
              <label class="text-lg ml-2">
                <input
                  type="radio"
                  class="appearance-none rounded-full bg-inherit box-shadow border-2 border-[#B5C0C7] p-1 checked:bg-neutral-900"
                  name="covidStatus"
                  v-bind="covidStatus"
                  :value="yes"
                />
                კი
              </label>
            </Field>
          </div>
          <div class="ml-5 mb-5">
            <Field
              v-slot="{ covidStatus }"
              name="covidStatus"
              type="radio"
              :value="no"
            >
              <label class="text-lg ml-2">
                <input
                  type="radio"
                  class="appearance-none rounded-full bg-inherit box-shadow border-2 border-[#B5C0C7] p-1 checked:bg-neutral-900"
                  name="covidStatus"
                  v-bind="covidStatus"
                  :value="no"
                />
                არა
              </label>
            </Field>
          </div>
          <div class="ml-5">
            <Field
              v-slot="{ covidStatus }"
              name="covidStatus"
              type="radio"
              :value="now"
            >
              <label class="text-lg ml-2">
                <input
                  type="radio"
                  class="appearance-none rounded-full bg-inherit box-shadow border-2 border-[#B5C0C7] p-1 checked:bg-neutral-900"
                  name="covidStatus"
                  v-bind="covidStatus"
                  :value="now"
                />
                ახლა მაქვს
              </label>
            </Field>
          </div>
        </div>
        <div class="mt-10">
          <h2 class="font-bold text-xl">
            ანტისხეულების ტესტი გაქვს გაკეთებული?*
          </h2>
          <div class="mt-2 mb-5 ml-5">
            <Field
              v-slot="{ covidTest}"
              name="covidTest"
              type="radio"
              :value="testYes"
            >
              <label class="text-lg ml-2">
                <input
                  type="radio"
                  class="appearance-none rounded-full bg-inherit box-shadow border-2 border-[#B5C0C7] p-1 checked:bg-neutral-900"
                  name="covidTest"
                  v-bind="covidTest"
                  :value="testYes"
                />
                კი
              </label>
            </Field>
          </div>
          <div class="mt-2 mb-5 ml-5">
            <Field
              v-slot="{ covidTest}"
              name="covidTest"
              type="radio"
              :value="testNo"
            >
              <label class="text-lg ml-2">
                <input
                  type="radio"
                  class="appearance-none rounded-full bg-inherit box-shadow border-2 border-[#B5C0C7] p-1 checked:bg-neutral-900"
                  name="covidTest"
                  v-bind="covidTest"
                  :value="testNo"
                />
                არა
              </label>
            </Field>
          </div>
        </div>

        <div>
          <h2 class="font-bold text-xl">
            თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
            რაოდენობა*
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
        <div>
          <h2 class="font-bold text-xl">
            მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*
          </h2>
          <Field
            class="outline-none ml-5 w-full px-5 py-2 bg-inherit border border-gray-600 mt-3 placeholder-gray-500"
            type="number"
            name="period"
            placeholder="დდ/თთ/წწ"
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
      :isActive="true"
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
};
</script>

<style scoped>
.box-shadow {
  box-shadow: 0 0 0 1px black;
}
</style>
