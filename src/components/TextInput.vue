<template>
  <label class="w-full font-bold text-xl" :for="name">{{ label }}</label>
  <Field
    class="outline-none w-full px-5 py-2 bg-inherit border border-gray-600 mt-3 placeholder-gray-500"
    :id="name"
    :name="name"
    :rules="componenetRule"
    :type="type"
    v-model="value"
    @input="sendValue(value)"
    :placeholder="placeholder"
  />
  <ErrorMessage class="text-red-400 text-sm px-5" :name="name" />
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
export default {
  props: {
    componenetRule: { type: String, required: true },
    type: { type: String, required: true },
    label: { type: String, required: true },
    name: { type: String, required: true },
    value: { type: String, required: false },
    placeholder: { type: String, required: false },
  },
  emits: ["get-value"],
  components: {
    Field,
    ErrorMessage,
    Form,
  },
  methods: {
    sendValue(value) {
      this.$emit("get-value", value);
    },
  },
};
</script>
