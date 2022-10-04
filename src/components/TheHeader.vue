<template>
  <div class="m-0 px-[200px] pt-24">
    <header class="border-black border-b-2 pb-6">
      <div class="w-full flex justify-between items-center">
        <img src="@/assets/images/redberry.png" alt="" />
        <h2 class="font-blod text-4xl">
          <span>{{ pageNum }}</span
          >/4
        </h2>
      </div>
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: { pageNum: { type: Number, required: true } },
};
</script>
