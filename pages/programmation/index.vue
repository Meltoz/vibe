<script setup lang="ts">
import {getAllPerformers} from "../../services/programmation.service";
import type {Performer} from "../../models/performer";

const data: Performer[] = await getAllPerformers();
const headerArtiste = ref('Tous les artistes présents à l\'évènements')
</script>

<template>
  <layout-header title="Programmation" img="/imgs/programmation/header.avif" />

  <p>{{headerArtiste}} </p>
  <prog-filter/>
  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
    <prog-card v-for="artist in data" :key="artist.name" :artist="artist" />
  </div>

  <layout-logo />
</template>