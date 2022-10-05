<template>
  <div class="h-[100vh] flex flex-col justify-center items-center">
    <transition name="bird" @after-enter="afterImgEnter" appear>
      <img
        class="w-24 h-24"
        src="@/assets/images/StartBird.png"
        alt="rocket bird logo"
      />
    </transition>
    <div v-if="imageSet" class="w-96 h-24 bg-[#B5C0C7] z-50"></div>
    <transition name="link" appear>
      <div
        v-if="imageSet"
        class="font-bold text-3xl w-24 flex justify-center z-0"
      >
        <router-link :to="{ name: 'information' }" class="text-center link"
          >კითხვარის დაწყება</router-link
        >
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageSet: false,
    };
  },
  methods: {
    afterImgEnter() {
      this.imageSet = true;
    },
  },
};
</script>

<style scoped>
.bird-enter-from {
  scale: 25;
}
.bird-enter-active {
  transition: all 0.5s ease-out;
}
.bird-enter-to {
  translate: 0px -86px;
  scale: 1;
}

.link-enter-from {
  translate: 0px -100px;
  opacity: 0;
}
.link-enter-active {
  transition: all 1s ease-out;
}
.link-enter-to {
  translate: 0px 0px;
  opacity: 1;
}

.link:hover {
  text-shadow: 2px 0px 0 #b5c0c7, 3px 0px 0 black;
}
</style>
