<script setup lang="ts">
import {getAllPerformers} from "../../services/programmation.service";
import type {Performer} from "../../models/performer";
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

  <p class="text-4xl text-center my-32">{{headerArtiste}} </p>
  <prog-filter @filtered="filteredChanged" />
  <div class="grid grid-cols-3 gap-x-4 mx-32">
    <prog-card v-for="artist in data" :key="artist.name" :artist="artist" />
  </div>

  <layout-logo />
</template>