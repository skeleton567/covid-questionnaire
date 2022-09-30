<template>
  <Form v-slot="{ meta }">
    <the-header pageNum="1">
      <div class="flex justify-between">
        <section class="mt-10 w-[500px]">
          <div class="mb-5">
            <label class="w-full font-bold text-xl" for="name">სახელი*</label>
            <Field
              class="outline-none w-full px-5 py-2 bg-inherit border border-gray-600 mt-3"
              id="name"
              name="name"
              :rules="nameRules"
            />
            <ErrorMessage class="text-red-400 text-sm px-5" name="name" />
          </div>
          <div class="mb-5">
            <label class="w-full font-bold text-xl" for="lastname"
              >გვარი*</label
            >
            <Field
              class="outline-none w-full px-5 py-2 bg-inherit border border-gray-600 mt-3"
              name="lastname"
              id="lastname"
              type="text"
              :rules="lastNameRules"
            />
            <ErrorMessage class="text-red-400 text-sm px-5" name="lastname" />
          </div>
          <div>
            <label class="w-full font-bold text-xl" for="email">მეილი*</label>
            <Field
              class="outline-none w-full px-5 py-2 bg-inherit border border-gray-600 mt-3"
              name="email"
              id="email"
              type="text"
              :rules="emailRules"
            />
            <ErrorMessage class="text-red-400 text-sm px-5" name="email" />
          </div>

          <div class="mt-28 w-64">
            <div class="w-60 border-t-2 border-gray-500 mb-5"></div>
            <p class="text-gray-500">
              *-ით მონიშნული ველების შევსება სავალდებულოა
            </p>
          </div>
        </section>
        <img
          class="h-[600px]"
          src="@/assets/images/BoyGirl.png"
          alt="Boy and the girl with stars in eyes"
        />
      </div>
      <footer class="mt-20">
        <the-footer
          :isActive="meta.valid"
          pageNum="1"
          :nextPage="{ name: 'covidSituation' }"
        ></the-footer>
      </footer>

      <transition name="line" appear>
        <div
          class="bg-[#D6D16E] absolute top-80 left-[1175px] w-[420px] h-16 opacity-70"
        ></div>
      </transition>
    </the-header>
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
  methods: {
    nameRules(value) {
      if (value && value.trim() && value.length > 1) {
        return true;
      } else {
        return "სახელის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსაგან";
      }
    },
    lastNameRules(value) {
      if (value && value.trim() && value.length > 1) {
        return true;
      } else {
        return "გვარის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსაგან";
      }
    },
    emailRules(value) {
      const emailRegex = /.@redberry.ge$/;
      if (emailRegex.test(value)) {
        return true;
      } else {
        return "მეილი უნდა იყოს რედბერის ფორმატში";
      }
    },
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
