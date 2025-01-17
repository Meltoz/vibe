<script setup lang="ts">

const props = defineProps<{
  title: string,
  price: number,
  color: string,
  access: string
}>()

</script>

<template>
<div class="flex items-stretch px-6 xl:min-w-[55rem]">
  <div class="w-8/12 md:w-8/12 rounded-l md:rounded-l-xl shadow-xl px-5 bg-gray-50">
    <h3 class="text-3xl font-semibold md:text-5xl text-center my-3">Pass {{title}}</h3>
    <p class="text-xs md:text-base">Comprend :</p>
    <ul class="pl-10 list-disc text-xs md:text-base">
      <li>L'accès à toutes les scènes de concert {{access}}</li>
      <li>L'accès à tous les concert {{access}}</li>
      <li>Les frais de service</li>
      <li>L'accès au spot Océan</li>
    </ul>
    <p class="text-center my-5 text-xs md:text-base">ATTENTION le parking est payant cette année</p>
  </div>
  <div :style="{ backgroundColor: color }" class="rounded-r md:rounded-r-xl flex flex-col justify-center items-center gap-5 w-4/12 md:w-4/12 shadow-xl px-5">
    <p class="text-4xl xl:text-6xl">{{price}}€</p>
    <slot></slot>
  </div>
</div>
</template>