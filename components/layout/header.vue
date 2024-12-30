<script setup lang="ts">

defineProps<{
  title: string,
  img: string
}>()
</script>

<template>
  <div class="relative">
    <img :src="img" :alt="title" class="w-full h-[74vh]">
    <p class="text-[11rem] font-bold absolute bottom-24 w-full text-center text-white uppercase tracking-tighter">{{title}}</p>
  </div>
</template>

<style scoped>

</style>