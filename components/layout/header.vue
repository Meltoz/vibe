<script setup lang="ts">

defineProps<{
  title: string,
  img: string
}>()
</script>

<template>
  <div class="relative ">
    <img :src="img" :alt="title" class="w-full h-[30vh] md:h-[60vh] lg:h-[74vh] aspect-auto object-cover">
    <p class="text-4xl md:text-6xl lg:text-[10rem] font-ruska font-bold absolute bottom-24 w-full text-center text-white uppercase">{{title}}</p>
  </div>
</template>