<template>
  <label :for="name" class="font-bold text-xl">{{ label }}</label>
  <textarea
    class="bg-inherit border border-gray-500 focus:outline-0 focus:border-black mb-10 mt-5"
    :name="name"
    :id="name"
    cols="60"
    rows="6"
    v-model="value"
    @input="sendValue(value)"
  ></textarea>
</template>

<script>
export default {
  props: {
    label: { type: String, required: true },
    name: { type: String, required: true },
    value: { type: String, required: false },
  },
  emits: ["get-value"],
  methods: {
    sendValue(value) {
      this.$emit("get-value", value);
    },
  },
};
</script>
