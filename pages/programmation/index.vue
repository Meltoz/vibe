<script setup lang="ts">
import {getAllPerformers} from "../../services/programmation.service";
import type { FilterOptions } from '../../models/helper';

const data = ref(await getAllPerformers(null, ''));
const headerArtiste = ref('Tous les artistes présents à l\'évènements');

const filteredChanged = async (filter: FilterOptions) => {
  switch(filter.day){
    case 'all':
      headerArtiste.value= 'Tous les artistes présents à l\'évènements'
      break;
    case 'friday':
      headerArtiste.value='Les artistes du vendredi !'
      break;
    case 'saturday':
      headerArtiste.value= 'Les artistes du samedi !'
    break;
    default:
      headerArtiste.value= 'Tous les artistes présents à l\'évènements'
  }
  data.value = await getAllPerformers(filter.day === 'all' ? null : filter.day, filter.artiste)
}
</script>

<template>
  <layout-header title="Programmation" img="/imgs/programmation/header.avif" />

  <p class="text-base md:text-4xl text-center my-6 md:my-32">{{headerArtiste}} </p>
  <div class="mx-3">
    <prog-filter @filtered="filteredChanged" />
  </div>

  <div class="grid grid-cols-2 xl:grid-cols-3 justify-items-stretch justify-center md:justify-items-center mx-3 xl:mx-40 gap-2 xl:gap-y-10 mt-20">
    <prog-card v-for="artist in data" :key="artist.name" :artist="artist" />
  </div>

  <layout-logo />
</template>