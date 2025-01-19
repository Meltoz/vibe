<script setup lang="ts">
const props = defineProps<{
  active?: number,
}>();

const cards = [{
  title: 'Location vélo',
  img: 'velo.avif',
  alt: 'Image d\'un vélo',
  link: '/billetterie/location',
  color: 'text-black'
},{
  title: 'Emplacement tente & camping car',
  img: 'camping.avif',
  alt: 'Image nocturne',
  link: '/billetterie/night',
  color: 'text-gray-300'
}, {
  title:'Emplacement parking',
  img:'parking.avif',
  alt: 'Image parking',
  link: '/billetterie/parking',
  color: 'text-white'
}];

</script>

<template>
  <section>
    <h4 class="text-7xl 2xl:w-7/12 2xl:mx-auto xl:mx-40">Les extras</h4>
    <div class="grid grid-cols-1 xl:grid-cols-3 2xl:w-7/12 xl:w-9/12 mx-auto justify-items-center  gap-y-6">
      <div v-for="(card, index) in cards" class="w-[316px] h-[98px] xl:w-[276px] xl:h-[350px] rounded-lg overflow-hidden relative mx-10">
        <img :src="`/imgs/billetterie/extras/${card.img}`"
             :class="{'brightness-50': active && active === index+1}"
             :alt="card.alt" class="w-full h-full object-cover"/>
        <h5 :class="card.color"
          class="absolute top-0 xl:top-5 left-1/2 -translate-x-1/2 text-base xl:text-xl font-bold xl:w-[214px] text-center backdrop-blur-sm p-1">{{card.title}}</h5>
        <NuxtLink
          :to="card.link"
          v-if="!active || active !== index+1"
          class="px-5 py-1.5  bg-[#E4819B] absolute bottom-1 xl:bottom-10 left-1/2 -translate-x-1/2 text-center rounded-lg font-semibold">Réserver</NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>