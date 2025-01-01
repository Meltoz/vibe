

<template>
  <div class="relative group w-full max-w-md overflow-hidden">
    <!-- Image principale -->
    <img
      :src="`/imgs/programmation/artistes/${artist.img}`"
      :alt="`${artist.name}`"
      class="w-full h-auto transition-transform duration-300 ease-in-out group-hover:brightness-50"
    />

    <!-- Overlay avec informations -->
    <div
      class="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    >
      <h3 class="text-lg font-semibold">{{ artist.name }}</h3>
      <p class="text-sm mt-2">{{ artist.location }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {Performer} from "../../models/performer";

defineProps<{
  artist: Performer,
}>()
</script>