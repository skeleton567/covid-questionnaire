<template>
  <base-wrap>
    <router-view></router-view>
  </base-wrap>
</template>

<script>
import "@/assets/tailwind.css";
import BaseWrap from "@/components/BaseWrap.vue";

export default {
  components: { BaseWrap },
};
</script>

<style>
@font-face {
  font-family: "BPGArial";
  src: local("BPGArial"),
    url(@/assets/fonts/bpg_arial_2009.ttf) format("truetype");
}
</style>
