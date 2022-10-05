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

        <h2 class="font-bold text-xl mt-10">
          რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები,
          სადაც ყველა სურვილისამებრ ჩაერთვება?*
        </h2>
        <div class="mt-4 mb-5 ml-5">
          <radio-input
            value="twice_a_week"
            label="კვირაში ორჯერ"
            name="onlineMeeting"
            :componentValue="nonFormalMeetings"
            @radioValue="setNonFormalMeetings"
          />
        </div>
        <div class="ml-5 mb-5">
          <radio-input
            value="once_a_week"
            label="კვირაში ერთხელ"
            name="onlineMeeting"
            :componentValue="nonFormalMeetings"
            @radioValue="setNonFormalMeetings"
          />
        </div>
        <div class="ml-5 mb-5">
          <radio-input
            value="once_in_a_two_weeks"
            label="ორ კვირაში ერთხელ"
            name="onlineMeeting"
            :componentValue="nonFormalMeetings"
            @radioValue="setNonFormalMeetings"
          />
        </div>
        <div class="ml-5">
          <radio-input
            value="once_in_a_month"
            label="თვეში ერთხელ"
            name="onlineMeeting"
            :componentValue="nonFormalMeetings"
            @radioValue="setNonFormalMeetings"
          />
        </div>

        <h2 class="font-bold text-xl mt-10">
          კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
        </h2>
        <div class="mt-4 mb-5 ml-5">
          <radio-input
            value="0"
            label="0"
            name="workFromOffice"
            :componentValue="numberOfDaysFromOffice"
            @radioValue="setNumberOfDaysFromOffice"
          />
        </div>
        <div class="mt-4 mb-5 ml-5">
          <radio-input
            value="1"
            label="1"
            name="workFromOffice"
            :componentValue="numberOfDaysFromOffice"
            @radioValue="setNumberOfDaysFromOffice"
          />
        </div>
        <div class="ml-5 mb-5">
          <radio-input
            value="2"
            label="2"
            name="workFromOffice"
            :componentValue="numberOfDaysFromOffice"
            @radioValue="setNumberOfDaysFromOffice"
          />
        </div>
        <div class="ml-5 mb-5">
          <radio-input
            value="3"
            label="3"
            name="workFromOffice"
            :componentValue="numberOfDaysFromOffice"
            @radioValue="setNumberOfDaysFromOffice"
          />
        </div>
        <div class="ml-5 mb-5">
          <radio-input
            value="4"
            label="4"
            name="workFromOffice"
            :componentValue="numberOfDaysFromOffice"
            @radioValue="setNumberOfDaysFromOffice"
          />
        </div>
        <div class="ml-5">
          <radio-input
            value="5"
            label="5"
            name="workFromOffice"
            :componentValue="numberOfDaysFromOffice"
            @radioValue="setNumberOfDaysFromOffice"
          />
        </div>
        <div class="mt-10">
          <text-area
            label="რას ფიქრობ ფიზიკურ შეკრებებზე?"
            name="physicalMeet"
            :value="whatAboutMeetingsInLive"
            @getValue="setWhatAboutMeetingsInLive"
          />
        </div>

        <div class="mt-5">
          <text-area
            label="რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას
            შეცვლიდი??"
            name="situation"
            :value="tellUsYourOpinionAbout"
            @getValue="setTellUsYourOpinionAbout"
          />
          <div class="w-full flex justify-end">
            <button
              type="button"
              @click="sendData"
              :class="{
                ['opacity-50']: !meta.valid,
                ['pointer-events-none']: !meta.valid,
              }"
              class="bg-[#208298] text-white py-4 px-6 rounded-full text-lg font-bold"
            >
              დასრულება
            </button>
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
    };
  },
  methods: {
    sendData() {
      this.submit();
      this.$router.push({ name: "thankYou" });
    },
    setNonFormalMeetings(value) {
      this.nonFormalMeetings = value;
    },
    setNumberOfDaysFromOffice(value) {
      this.numberOfDaysFromOffice = value;
    },
    setWhatAboutMeetingsInLive(value) {
      this.whatAboutMeetingsInLive = value;
    },
    setTellUsYourOpinionAbout(value) {
      this.tellUsYourOpinionAbout = value;
    },
    submit() {
      this.$store.state.information.non_formal_meetings =
        this.nonFormalMeetings;
      this.$store.state.information.number_of_days_from_office =
        this.numberOfDaysFromOffice;
      this.$store.state.information.what_about_meetings_in_live =
        this.whatAboutMeetingsInLive;
      this.$store.state.information.tell_us_your_opinion_about =
        this.tellUsYourOpinionAbout;
    },
  },
  beforeMount() {
    this.nonFormalMeetings = this.$store.getters.nonFormalMeetings;
    this.numberOfDaysFromOffice = this.$store.getters.numberOfDaysFromOffice;
    this.whatAboutMeetingsInLive = this.$store.getters.whatAboutMeetingsInLive;
    this.tellUsYourOpinionAbout = this.$store.getters.tellUsYourOpinionAbout;
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
