<template>
  <label :for="name" class="text-lg ml-2">
    <Field
      type="radio"
      class="appearance-none rounded-full bg-inherit box-shadow border-2 border-[#B5C0C7] p-1 checked:bg-neutral-900"
      :name="name"
      :value="value"
    />
    {{ label }}
  </label>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
export default {
  props: ["value", "label", "name"],
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
