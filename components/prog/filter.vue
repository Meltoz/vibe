<script setup lang="ts">
import type { FilterOptions } from '../../models/helper';
import {Search} from'lucide-vue-next';

const emit = defineEmits<{
  filtered: FilterOptions
}>();
const day = ref('');
let artist: string = '';


const filterChanged = () => {
  emit('filtered', {day: day.value, artiste: artist});
}

const dayChanged = (daychanged: string) => {
  day.value = daychanged;
  filterChanged();
}

</script>
<template>
  <section class="w-1/2 space-y-20 mx-auto">
    <div class="flex justify-center gap-3">
      <button
        class=" py-2 rounded bg-green-600 font-semibold basis-1/3 shrink hover:bg-green-800"
        :class="{'bg-green-700' : day === 'all'}"
        @click="dayChanged('all')">Tous</button>
      <button
        class=" py-2 rounded bg-blue-300 font-semibold basis-1/3 shrink hover:bg-blue-200"
        :class="{'bg-blue-600' : day === 'friday'}"
        @click="dayChanged('friday')">Vendredi</button>
      <button
        class=" py-2 rounded bg-pink-500 font-semibold basis-1/3 shrink hover:bg-pink-400"
        :class="{'bg-pink-700' : day === 'saturday'}"
        @click="dayChanged('saturday')">Samedi</button>
    </div>
    <div class="relative">
      <input v-model="artist"
             @change="filterChanged"
             placeholder="RECHERCHER"
             class="p-1.5 border border-black w-full">
      <Search class="absolute z-10 right-2 bottom-2"/>
    </div>

  </section>
</template>

