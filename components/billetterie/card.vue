<script setup lang="ts">
const props = defineProps<{
  title: string,
  information?:string;
  price: number,
}>()
</script>

<template>
  <article class="p-5 shadow-xl flex justify-between items-center rounded-lg bg-gray-50">
    <div class="basis-8/12">
      <h4 class="text-3xl">{{title}} <span v-if="information" class="text-xl">{{information}}</span></h4>
      <div class="pl-24">
        <slot name="description"></slot>
      </div>
    </div>

    <div class="flex flex-col items-center basis-4/12">
      <span class="text-2xl">{{price}}€</span>
      <slot name="number"></slot>
    </div>
  </article>



</template>

<style scoped>

</style>