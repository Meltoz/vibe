<script setup lang="ts">
const props = defineProps<{
  currentStep: number;
}>();

const links : string[] =  [
  '/billetterie',
  '/billetterie/extras',
  '/billetterie/location',
  '/billetterie/night',
  '/billetterie/parking',
  '/billetterie/payment',
]

const nextStep = ():string => {
  return links[(props.currentStep)];
}
const prevStep = () => links[(props.currentStep-2)];

</script>

<template>
  <div>
    <div>
      <ul class="flex justify-around xl:justify-center xl:gap-20 my-5 mx-3">
        <li
          v-for="(link, index) in links"
          class="pt-1 pb-0.5 px-2.5 md:pt-2 md:pb-1 md:px-3.5 xl:pt-4 xl:pb-2.5 xl:px-5  rounded-full text-xl xl:text-5xl font-ruska"
          :class="{ 'bg-green-400': currentStep === index+1, 'bg-green-700': currentStep > index +1, 'bg-gray-500' : currentStep < index+1 }"
          :key="index"
        >
          <NuxtLink :to="link">{{index+1}}</NuxtLink>
        </li>
      </ul>
    </div>
      <slot></slot>
    <section class="flex justify-between mx-5 gap-5 my-5">
      <NuxtLink :to="prevStep()" v-if="currentStep > 1" class=" text-center py-3 text-2xl border-2 border-gray-500 rounded-xl grow">Retour</NuxtLink>
      <NuxtLink :to="nextStep()" class=" text-center py-3 text-2xl bg-[#E4819B] rounded-xl grow ">Suivant</NuxtLink>
    </section>
  </div>
</template>
