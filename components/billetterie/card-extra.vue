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
    <h4>Les extras</h4>
    <div>
      <div v-for="(card, index) in cards" class="w-[276px] h-[350px] rounded-lg overflow-hidden relative ">
        <img :src="`/imgs/billetterie/extras/${card.img}`" :alt="card.alt" class="w-full h-full object-cover"/>
        <h5 :class="card.color"
          class="absolute top-5 left-1/2 -translate-x-1/2 text-xl font-bold w-[214px] text-center">{{card.title}}</h5>
        <NuxtLink
          :to="card.link"
          v-if="!active || active !== index+1"
          class="px-5 py-1.5  bg-[#E4819B] absolute bottom-10 left-1/2 -translate-x-1/2 text-center rounded-lg font-semibold">Réserver</NuxtLink>

      </div>
    </div>
  </section>


</template>

<style scoped>

</style>