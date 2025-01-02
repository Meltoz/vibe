

<template>
  <div class="relative group w-8/12 max-w-md overflow-hidden rounded-xl">
    <!-- Image principale -->
    <img
      :src="`/imgs/programmation/artistes/${artist.img}`"
      :alt="`${artist.name}`"
      class="w-full h-72 object-cover transition-transform duration-300 ease-in-out group-hover:brightness-50"
    />

    <!-- Overlay -->
    <div
      class="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    >
      <p class="text-sm">{{getDate(artist)}}</p>
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
  return `Le ${d.getDate()} juin chez VIB`
}
</script>