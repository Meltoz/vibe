<script setup lang="ts">

defineProps<{
  img: string,
  alt: string
  text: string
}>();
</script>

<template>
<div class="relative inline-block">
  <img :src="img" :alt="alt" class="object-cover h-80 aspect-auto rounded-md" />
  <div class="absolute bottom-5 w-full">
    <p class="text-[250%] font-bold text-center uppercase text-white">{{text}}</p>
  </div>
</div>
</template>

<style scoped>

</style>