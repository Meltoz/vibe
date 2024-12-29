<template>
  <section>
    <h3 class="contour text-6xl font-semibold mx-[15%] mt-20">Suivez-Nous</h3>
    <div class="flex justify-center gap-5 md:gap-20 relative bottom-3 flex-wrap">
      <div v-for="social in socials" :key="social.name" class="bg-gradient-to-br from-[#FF8FAD] to-[#fad2dd] p-8 rounded-xl w-40">
        <img :src="`/imgs/socials/${social.img}`" :alt="social.name" class="w-20 relative left-1/2 -translate-x-1/2"/>
        <p class="text-xl uppercase text-center mt-6">{{social.name}}</p>
      </div>
    </div>
  </section>
</template>
<style scoped>
  .contour {
    color: transparent;
    -webkit-text-stroke: 1px #FF8FAD;
  }
</style>
<script setup lang="ts">

const socials = [
  {
    name: 'discord',
    img: 'discord.png'
  },
  {
    name: 'youtube',
    img: 'youtube.png'
  },{
    name: 'instagram',
    img: 'instagram.png'
  },{
    name: 'Tiktok',
    img: 'tiktok.png'
  }, {
    name: 'Facebook',
    img: 'facebook.png'
  }];
</script>