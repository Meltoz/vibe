

<template>
  <div class="flex md:relative group md:w-8/12 max-w-md overflow-hidden rounded-xl"
  :class="getColor(artist)">
    <!-- Image principale -->
    <img
      :src="`/imgs/programmation/artistes/${artist.img}`"
      :alt="`${artist.name}`"
      class="w-1/2 md:w-full  md:h-72 object-cover transition-transform duration-300 ease-in-out md:group-hover:brightness-50"
    />

    <div class="md:hidden text-[10px] ml-1 grow my-2">
      <h4 class="font-semibold text-center text-[12px]">{{getDate(artist)}}</h4>
      <p class="font-semibold text-center text-[12px]">{{artist.name}}</p>
      <p class="mt-3">{{artist.style}}</p>
      <p>{{artist.nationality}}</p>
      <p>{{artist.location}}</p>
    </div>
    <!-- Overlay -->
    <div
      class="hidden md:flex  absolute inset-0 flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    >
      <p class="text-sm">{{getDate(artist)}} chez VIB</p>
      <h3 class="text-xl font-semibold">{{ artist.name }}</h3>
      <div class="mt-5 text-sm">
        <p>Genre : <span class="font-semibold">{{artist.style}}</span></p>
        <p>Localité : <span class="font-semibold">{{artist.nationality}}</span></p>
        <p>Scène: <span class="font-semibold">{{artist.location}}</span></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {Performer} from "../../models/performer";

defineProps<{
  artist: Performer,
}>()

const getDate = (artist: Performer) => {
  const d = new Date(artist.dateOfPerformance);
  return `Le ${d.getDate()} juin`
}
const getColor = (artist: Performer) => new Date(artist.dateOfPerformance).getDay() === 6 ? 'bg-[#E4819B]': 'bg-[#99B8E2]'
</script>