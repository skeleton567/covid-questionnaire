<template>
  <Form v-slot="{ meta }" :validation-schema="schema">
    <the-header pageNum="4">
      <div class="flex justify-between">
        <section class="mt-48 w-[500px]">
          <p >
            რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
            რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
            განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი —
            ჩვენთან გადმოსვლის.
          </p>
          <p class="mt-5">
            პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
            ყოველდღიური კომუნიკაციაც გაიშვიათდა.
          </p>

          <h2 class="font-bold text-xl mt-10">
            რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები,
            სადაც ყველა სურვილისამებრ ჩაერთვება?*
          </h2>
          <div class="mt-4 mb-5 ml-5">
            <radio-input
              value="twiceAWeek"
              label="კვირაში ორჯერ"
              name="onlineMeeting"
            />
          </div>
          <div class="ml-5 mb-5">
            <radio-input
              value="onceAWeek"
              label="კვირაში ერთხელ"
              name="onlineMeeting"
            />
          </div>
          <div class="ml-5 mb-5">
            <radio-input
              value="onceInTwoWeeks"
              label="ორ კვირაში ერთხელ"
              name="onlineMeeting"
            />
          </div>
          <div class="ml-5">
            <radio-input
              value="onceAMonth"
              label="თვეში ერთხელ"
              name="onlineMeeting"
            />
          </div>

          <h2 class="font-bold text-xl mt-10">
            კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
          </h2>
          <div class="mt-4 mb-5 ml-5">
            <radio-input value="1" label="1" name="workFromOffice" />
          </div>
          <div class="ml-5 mb-5">
            <radio-input value="2" label="2" name="workFromOffice" />
          </div>
          <div class="ml-5 mb-5">
            <radio-input value="3" label="3" name="workFromOffice" />
          </div>
          <div class="ml-5 mb-5">
            <radio-input value="4" label="4" name="workFromOffice" />
          </div>
          <div class="ml-5">
            <radio-input value="5" label="5" name="workFromOffice" />
          </div>
          <div class="mt-10">
            <label for="physicalMeet" class="font-bold text-xl"
            >რას ფიქრობ ფიზიკურ შეკრებებზე?</label
          >
          <textarea
            class="bg-inherit border border-gray-500 focus:outline-0 focus:border-black mb-10 mt-5"
            name="physicalMeet"
            id="physicalMeet"
            cols="60"
            rows="6"
          ></textarea>
          </div>
          
          <div class="mt-5">
          <label for="situation" class="font-bold text-xl"
            >რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას
            შეცვლიდი??</label
          >
          <textarea
            class="bg-inherit border border-gray-500 mb-10 focus:outline-0 focus:border-black mt-5"
            name="situation"
            id="situation"
            cols="60"
            rows="6"
          ></textarea>
          <div class="w-full flex justify-end">
            <button type="button" @click="sendData" :class="{ ['opacity-50']: !meta.valid, ['pointer-events-none']: !meta.valid }" class="bg-[#208298] text-white py-4 px-6 rounded-full text-lg font-bold">დასრულება</button>
          </div>
        </div>
        </section>
        <img
          class="h-[600px] w-[700px] mt-48 ml-[700px] z-10 fixed"
          src="@/assets/images/bike.png"
          alt="Boy on bike"
        />
        <transition name="heart" appear>
        <img
          class="h-[170px] w-[190px] mt-60 ml-[800px] fixed"
          src="@/assets/images/heart.png"
          alt="Red heart"
        />
      </transition>
      </div>
      <footer class="mt-20 pb-10">
        <the-footer
          pageNum="4"
          :previousPage="{ name: 'vaccinated' }"
        ></the-footer>
      </footer>
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
        onlineMeeting: "required",
        workFromOffice: "required",
      },
    };
  },
  methods: {
    async sendData() {
      await this.$router.push({ name: 'thankYou' });
    }
  },
};
</script>

<style scoped>
.heart-enter-from {
  scale: 2;
}
.heart-enter-active {
  transition: all 0.3s ease-out;
}
.heart-enter-to {
  scale: 1;
}
.heart-leave-from {
  scale: 1;
  filter: brightness(0);
}
.heart-leave-active {
  transition: all 1s ease-out;
}
.heart-leave-to {
  scale: 20;
  filter: brightness(0);
}
</style>
