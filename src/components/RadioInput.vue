<template>
  <label :for="name" class="text-lg ml-2">
    <Field
      type="radio"
      class="appearance-none rounded-full bg-inherit box-shadow border-2 border-[#B5C0C7] p-1 checked:bg-neutral-900"
      :name="name"
      :value="value"
      @change="sendValue(value)"
      v-model="componentValue"
      :rules="rules"
    />
    {{ label }}
  </label>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
export default {
  props: {
    componentValue: { type: String, required: false },
    label: { type: String, required: true },
    name: { type: String, required: true },
    value: { type: String, required: true },
    rules: { type: String, required: false },
  },
  emits: ["radio-value"],
  components: {
    Field,
    ErrorMessage,
    Form,
  },
  methods: {
    sendValue(value) {
      this.$emit("radio-value", value);
    },
  },
};
</script>

<style scoped>
.box-shadow {
  box-shadow: 0 0 0 1px black;
}
</style>
