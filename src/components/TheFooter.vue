<template>
  <div class="w-full flex justify-center space-x-28">
    <router-link v-if="pageNum != 1" :to="previousPage"
      ><img src="@/assets/images/previous.png" alt=""
    /></router-link>
    <router-link
      :class="{ ['opacity-50']: !isActive, ['pointer-events-none']: !isActive }"
      :to="nextPage"
      ><img src="@/assets/images/next.png" alt="" @click="submitData"
    /></router-link>
  </div>
</template>

<script>
export default {
  props: ["pageNum", "previousPage", "nextPage", "isActive"],
  emits: ["store-data"],
  methods: {
    submitData() {
      this.$emit("store-data");
    },
  },
};
</script>
