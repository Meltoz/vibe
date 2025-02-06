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
  <section class="w-full md:w-1/2 space-y-6 md:space-y-20 px-3 md:mx-auto">
    <div class="flex justify-center gap-3">
      <button
        class=" py-2 rounded font-semibold basis-1/3 shrink hover:bg-pink-400 "
        :class="{'bg-pink-700' : day === 'all','bg-vpink' : day !== 'all'}"
        @click="dayChanged('all')">Tous</button>
      <button
        class=" py-2 rounded font-semibold basis-1/3 shrink hover:bg-blue-200"
        :class="{'bg-blue-600' : day === 'friday' , 'bg-vblue' : day !== 'friday'}"
        @click="dayChanged('friday')">Vendredi</button>
      <button
        class=" py-2 rounded font-semibold basis-1/3 shrink hover:bg-green-800"
        :class="{'bg-green-600' : day === 'saturday', 'bg-vgreen' : day !== 'saturday'}"
        @click="dayChanged('saturday')">Samedi</button>
    </div>
    <div class="relative px-10">
      <input v-model="artist"
             @change="filterChanged"
             placeholder="RECHERCHER"
             class="p-1.5 border border-black w-full rounded-full md:rounded-xl pl-16">
      <Search class="absolute z-10 right-14 bottom-2 "/>
    </div>

  </section>
</template>

