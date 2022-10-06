<template>
  <Form class="h-[100vh]" v-slot="{ meta }">
    <the-header :pageNum="1">
      <section class="mt-48 w-[500px]">
        <div class="mb-5">
          <text-input
            componenetRule="required|min_length:3"
            type="text"
            label="სახელი*"
            name="name"
            v-model="nameValue"
          />
        </div>
        <div class="mb-5">
          <text-input
            componenetRule="required|min_length:3"
            type="text"
            label="გვარი*"
            name="lastname"
            v-model="lastNameValue"
          />
        </div>
        <div>
          <text-input
            componenetRule="email"
            type="email"
            label="მეილი*"
            name="email"
            v-model="emailValue"
          />
        </div>
        <div class="mt-28 w-64">
          <div class="w-60 border-t-2 border-gray-500 mb-5"></div>
          <p class="text-gray-500">
            *-ით მონიშნული ველების შევსება სავალდებულოა
          </p>
        </div>
      </section>
      <img
        class="h-[600px] mt-40"
        src="@/assets/images/BoyGirl.png"
        alt="Boy and the girl with stars in eyes"
      />
      <transition name="line" appear>
        <div
          class="bg-[#D6D16E] absolute top-80 left-[1175px] w-[420px] h-16 opacity-70"
        ></div>
      </transition>
    </the-header>
    <footer class="mt-24">
      <the-footer
        :isActive="meta.valid"
        :pageNum="1"
        :nextPage="{ name: 'covidSituation' }"
        @storeData="submit"
      ></the-footer>
    </footer>
  </Form>
</template>

<script>
import { Form } from "vee-validate";
import TextInput from "@/components/TextInput.vue";
export default {
  components: {
    Form,
    TextInput,
  },
  data() {
    return {
      nameValue: "",
      lastNameValue: "",
      emailValue: "",
    };
  },
  methods: {
    submit() {
      this.$store.state.information.first_name = this.nameValue;
      this.$store.state.information.last_name = this.lastNameValue;
      this.$store.state.information.email = this.emailValue;
    },
  },
  beforeMount() {
    this.nameValue = this.$store.state.information.first_name;
    this.lastNameValue = this.$store.state.information.last_name;
    this.emailValue = this.$store.state.information.email;
  },
};
</script>

<style scoped>
.line-enter-from {
  translate: 10px 50px;
  width: 0px;
}
.line-enter-active {
  transition: all 0.4s ease-out;
}
.line-enter-to {
  width: 420px;
}
</style>
