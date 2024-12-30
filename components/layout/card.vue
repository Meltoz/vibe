<script setup lang="ts">

defineProps<{
  title?: string,
  img: string
  alt: string
}>()
</script>

<template>
  <div class="bg-gradient-to-br from-[#FF8FAD] to-[#fad2dd] p-8 rounded-xl w-40 min-h-28">
    <img :src="img" :alt="alt" class="w-20 relative left-1/2 -translate-x-1/2"/>
    <p v-if="title" class="text-xl uppercase text-center mt-6">{{title}}</p>
  </div>
</template>

<style scoped>

</style>