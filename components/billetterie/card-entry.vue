<script setup lang="ts">

const props = defineProps<{
  title: string,
  price: number,
  color: string,
  access: string
}>()

</script>

<template>
<div class="flex items-stretch px-6">
  <div class="w-full rounded-l-xl">
    <h3 class="text-5xl text-center my-3">Pass {{title}}</h3>
    <p>Comprend :</p>
    <ul class="pl-10 list-disc">
      <li>L'accès à toutes les scènes de concert {{access}}</li>
      <li>L'accès à tous les concert {{access}}</li>
      <li>Les frais de service</li>
      <li>L'accès au spot Océan</li>
    </ul>
    <p class="text-center my-5">ATTENTION le parking est payant cette année</p>
  </div>
  <div :style="{ backgroundColor: color }" class="rounded-r-xl flex flex-col justify-center items-center gap-5 w-3/12">
    <p class="text-6xl">{{price}}€</p>
    <slot></slot>
  </div>
</div>
</template>