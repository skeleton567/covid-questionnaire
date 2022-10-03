<template>
  <label class="w-full font-bold text-xl" :for="name">{{ label }}</label>
  <Field
    class="outline-none w-full px-5 py-2 bg-inherit border border-gray-600 mt-3"
    :id="name"
    :name="name"
    :rules="componenetRule"
    :type="type"
  />
  <ErrorMessage class="text-red-400 text-sm px-5" :name="name" />
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
export default {
  props: ["componenetRule", "type", "label", "name"],
  components: {
    Field,
    ErrorMessage,
    Form,
  },
};
</script>
