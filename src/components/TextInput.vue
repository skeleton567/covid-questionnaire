<template>
  <label class="w-full font-bold text-xl" :for="name">{{ label }}</label>
  <Field
    class="outline-none w-full px-5 py-2 bg-inherit border border-gray-600 mt-3"
    :id="name"
    :name="name"
    :rules="componenetRule"
    :type="type"
    v-model="value"
    @input="sendValue(value)"
  />
  <ErrorMessage class="text-red-400 text-sm px-5" :name="name" />
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
export default {
  props: ["componenetRule", "type", "label", "name", "value"],
  emits: ['get-value'],
  components: {
    Field,
    ErrorMessage,
    Form,
  },
  methods: {
    sendValue(value) {
      this.$emit('get-value', value);
    }
  }
};
</script>
