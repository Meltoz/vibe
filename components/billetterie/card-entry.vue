<script setup lang="ts">
const props = defineProps<{
  title: string,
  price: number,
  color: string,
  access: string
}>()
</script>

<template>
<div class="flex">
  <div >
    <h3 class="text-5xl">{{title}}</h3>
    <p>Comprend :</p>
    <ul>
      <li>L'accès à toutes les scènes de concert {{access}}</li>
      <li>L'accès à tous les concert {{access}}</li>
      <li>Les frais de service</li>
      <li>L'accès au spot Océan</li>
    </ul>
    <p class="text-center">ATTENTION le parking est payant cette année</p>
  </div>
  <div class="">
    <p>{{price}}</p>
  </div>

</div>
</template>

<style scoped>

</style>