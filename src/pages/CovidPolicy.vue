<template>
  <Form v-slot="{ meta }" :validation-schema="schema">
    <the-header :pageNum="4">
      <section class="mt-48 w-[500px]">
        <p>
          რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
          რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
          განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი —
          ჩვენთან გადმოსვლის.
        </p>
        <p class="mt-5">
          პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
          ყოველდღიური კომუნიკაციაც გაიშვიათდა.
        </p>

        <h2 class="font-bold text-xl mt-10 mb-2">
          რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები,
          სადაც ყველა სურვილისამებრ ჩაერთვება?*
        </h2>
        <radio-input
          value="twice_a_week"
          label="კვირაში ორჯერ"
          name="onlineMeeting"
          v-model="nonFormalMeetings"
        />
        <radio-input
          value="once_a_week"
          label="კვირაში ერთხელ"
          name="onlineMeeting"
          v-model="nonFormalMeetings"
        />
        <radio-input
          value="once_in_a_two_weeks"
          label="ორ კვირაში ერთხელ"
          name="onlineMeeting"
          v-model="nonFormalMeetings"
        />
        <radio-input
          value="once_in_a_month"
          label="თვეში ერთხელ"
          name="onlineMeeting"
          v-model="nonFormalMeetings"
        />

        <h2 class="font-bold text-xl mt-10 mb-2">
          კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
        </h2>
        <radio-input
          value="0"
          label="0"
          name="workFromOffice"
          v-model="numberOfDaysFromOffice"
        />
        <radio-input
          value="1"
          label="1"
          name="workFromOffice"
          v-model="numberOfDaysFromOffice"
        />
        <radio-input
          value="2"
          label="2"
          name="workFromOffice"
          v-model="numberOfDaysFromOffice"
        />
        <radio-input
          value="3"
          label="3"
          name="workFromOffice"
          v-model="numberOfDaysFromOffice"
        />
        <radio-input
          value="4"
          label="4"
          name="workFromOffice"
          v-model="numberOfDaysFromOffice"
        />
        <radio-input
          value="5"
          label="5"
          name="workFromOffice"
          v-model="numberOfDaysFromOffice"
        />
        <text-area
          label="რას ფიქრობ ფიზიკურ შეკრებებზე?"
          name="physicalMeet"
          v-model="whatAboutMeetingsInLive"
        />
        <text-area
          label="რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას
            შეცვლიდი??"
          name="situation"
          v-model="tellUsYourOpinionAbout"
        />
        <div class="w-full flex justify-end">
          <button
            type="button"
            @click="sendData"
            :class="{
              ['opacity-50']: !meta.valid,
              ['pointer-events-none']: !meta.valid,
            }"
            class="bg-[#208298] text-white py-4 px-6 rounded-full text-lg font-bold mt-5"
          >
            დასრულება
          </button>
        </div>
      </section>
      <img
        class="h-[600px] w-[700px] mt-48 ml-[700px] z-10 fixed"
        src="@/assets/images/bike.png"
        alt="Boy on bike"
      />
      <transition name="heart" appear>
        <img
          v-if="leave"
          class="h-[170px] w-[190px] mt-60 ml-[800px] fixed"
          src="@/assets/images/heart.png"
          alt="Red heart"
        />
      </transition>
    </the-header>
    <footer class="mt-14 pb-14">
      <the-footer
        :pageNum="4"
        :previousPage="{ name: 'vaccinated' }"
        @storeData="submit"
      ></the-footer>
    </footer>
  </Form>
</template>

<script>
import { Form } from "vee-validate";
import RadioInput from "@/components/RadioInput.vue";
import TextArea from "@/components/TextArea.vue";
import axios from "axios";
export default {
  components: {
    Form,
    RadioInput,
    TextArea,
  },
  data() {
    return {
      nonFormalMeetings: "",
      numberOfDaysFromOffice: "",
      whatAboutMeetingsInLive: "",
      tellUsYourOpinionAbout: "",
      schema: {
        onlineMeeting: "required",
        workFromOffice: "required",
      },
      leave: true,
    };
  },
  methods: {
    async sendData() {
      this.submit();
      this.leave = false;
      const data = this.$store.getters.finalInformation;
      try {
        const response = await axios.post(
          "https://covid19.devtest.ge/api/create",
          data
        );
        if (response.status === 201) {
          this.$router.replace({ name: "thankYou" });
        }
      } catch (error) {
        console.error(error);
      }
    },
    submit() {
      this.$store.state.information.non_formal_meetings =
        this.nonFormalMeetings;
      this.$store.state.information.number_of_days_from_office =
        this.numberOfDaysFromOffice;
      this.$store.state.information.what_about_meetings_in_live =
        this.whatAboutMeetingsInLive;
      this.$store.state.information.tell_us_your_opinion_about_us =
        this.tellUsYourOpinionAbout;
    },
  },
  beforeMount() {
    this.nonFormalMeetings = this.$store.state.information.non_formal_meetings;
    this.numberOfDaysFromOffice =
      this.$store.state.information?.number_of_days_from_office;
    this.whatAboutMeetingsInLive =
      this.$store.state.information.what_about_meetings_in_live;
    this.tellUsYourOpinionAbout =
      this.$store.state.information.tell_us_your_opinion_about_us;
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
  z-index: 100;
}
.heart-leave-active {
  transition: all 0.5s ease-in;
}
.heart-leave-to {
  scale: 20;
  filter: brightness(0);
  z-index: 100;
}
</style>
