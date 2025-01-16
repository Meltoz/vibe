<script setup lang="ts">
const props = defineProps<{
  title: string,
  information?:string;
  price: number,
}>()
</script>

<template>
  <article class="p-5 shadow-xl grid grid-cols-3 place-items-center md:place-items-start rounded-lg bg-gray-50">
    <h4 class="col-span-3 text-2xl md:col-span-2 xl:text-3xl mb-4 font-semibold">{{title}} <span v-if="information" class="text-base xl:text-xl">{{information}}</span></h4>
    <div class="col-span-2 md:col-start-1">
      <div class="xl:pl-24">
        <slot name="description"></slot>
      </div>
    </div>

    <div class="md:hidden gap-10 xl:gap-0
">
      <span class="text-2xl font-semibold">{{price}}€</span>
    </div>
    <div class="md:hidden grid-cols-1 col-span-3 mt-3">
      <slot name="number"></slot>
    </div>

    <div class="hidden md:block grid:col-start-2 justify-self-center space-y-4">
      <span class="text-2xl font-semibold">{{price}}€</span>
      <slot name="number"></slot>
    </div>

  </article>



</template>

<style scoped>

</style>