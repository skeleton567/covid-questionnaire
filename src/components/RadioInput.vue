<template>
  <div class="ml-5 mb-5">
  <label :for="name" class="text-lg ml-2">
    <Field
      type="radio"
      class="appearance-none rounded-full bg-inherit box-shadow border-2 border-[#B5C0C7] p-1 checked:bg-neutral-900"
      :name="name"
      :value="value"
      @change="$emit('update:modelValue', $event.target.value)"
      v-model="modelValue"
      :rules="rules"
    />
    {{ label }}
  </label>
</div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
export default {
  props: {
    modelValue: { type: String, required: false },
    label: { type: String, required: true },
    name: { type: String, required: true },
    value: { type: String, required: true },
    rules: { type: String, required: false },
  },
  emits: ["update:modelValue"],
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
