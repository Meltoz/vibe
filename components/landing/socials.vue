<template>
  <section>
    <h3 class="contour text-6xl font-semibold mx-[15%] mt-20 tracking-tight">Suivez-Nous</h3>
    <div class="flex justify-center gap-5 md:gap-20 relative bottom-3 flex-wrap">
      <layout-card v-for="social in socials" :key="social.name" :title="social.name" :img="social.img" :alt="social.name"/>
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
const base = '/imgs/socials';
const socials = [
  {
    name: 'discord',
    img: `${base}/discord.png`
  },
  {
    name: 'youtube',
    img: `${base}/youtube.png`
  },{
    name: 'instagram',
    img: `${base}/instagram.png`
  },{
    name: 'Tiktok',
    img: `${base}/tiktok.png`
  }, {
    name: 'Facebook',
    img: `${base}/facebook.png`
  }];
</script>