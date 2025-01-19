<script setup lang="ts">
const props = defineProps<{
  currentStep: number;
}>();

const emit = defineEmits<{
  finished: void
}>()

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
    <section class="grid grid-cols-3 2xl:w-7/12 xl:w-9/12 mx-auto justify-items-center my-6">
      <NuxtLink :to="prevStep()" v-if="currentStep > 1" class="mx-10 py-1 xl:py-0  w-[316px] xl:w-[276px]  text-center border-4 border-gray-400 rounded-lg shrink">Retour</NuxtLink>
      <NuxtLink :to="nextStep()" v-if="currentStep !== links.length" class="col-start-3 mx-10 py-1 w-[316px] xl:w-[276px]  xl:py-0  text-center bg-[#E4819B] rounded-lg border-4 border-[#E4819B] shrink">Suivant</NuxtLink>
      <button v-if="currentStep === links.length" @click="() => emit('finished', null)" class=" col-start-3 py-1  xl:py-0  text-center bg-[#E4819B] rounded-lg border-4 border-[#E4819B] shrink">Paiement</button>
    </section>
  </div>
</template>
