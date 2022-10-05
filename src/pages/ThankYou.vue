<template>
  <div class="h-[100vh] bg-black flex flex-col justify-center items-center">
    <transition name="bigStar" appear>
      <div class="mr-56" v-show="textSet">
        <img
          class=""
          src="@/assets/images/big-star.png"
          alt="small white star"
        />
      </div>
    </transition>
    <transition name="thankYou" @after-enter="afterTextEnter" appear>
      <h1 class="text-white text-6xl font-bold tracking-[0.24rem] my-6">
        მადლობა
      </h1>
    </transition>
    <transition name="smallStar" appear>
      <div class="ml-56" v-show="textSet">
        <img
          class=""
          src="@/assets/images/small-star.png"
          alt="small white star"
        />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textSet: false,
    };
  },
  methods: {
    afterTextEnter() {
      this.textSet = true;
    },
  },
};
</script>

<style scoped>
.thankYou-enter-from {
  translate: 0px 9.72px;
  opacity: 0;
}
.thankYou-enter-active {
  transition: all 0.6s ease-in;
}
.thankYou-enter-to {
  translate: 0px 9.72px;
  opacity: 1;
}

.bigStar-enter-from {
  translate: 40px 40px;
  opacity: 0;
}
.bigStar-enter-active {
  transition: all 1s ease-in-out;
}
.bigStar-enter-to {
  translate: 0px 0px;
}

.smallStar-enter-from {
  translate: -40px -40px;
  opacity: 0;
}
.smallStar-enter-active {
  transition: all 0.7s ease-in-out;
}
.smallStar-enter-to {
  translate: 0px 0px;
}
</style>
