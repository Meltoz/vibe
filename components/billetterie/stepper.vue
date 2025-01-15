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
    <section class="flex justify-between xl:max-w-full gap-5 xl:gap-[30rem] mx-6 xl:mx-[27.2rem] my-12">
      <NuxtLink :to="prevStep()" v-if="currentStep > 1" class="basis-1/2 py-1 xl:py-0  text-center border-4 border-gray-400 rounded-lg shrink">Retour</NuxtLink>
      <NuxtLink :to="nextStep()" v-if="currentStep !== links.length" class=" basis-1/2 py-1  xl:py-0  text-center bg-[#E4819B] rounded-lg border-4 border-[#E4819B] shrink">Suivant</NuxtLink>
      <button v-if="currentStep === links.length" @click="() => emit('finished', null)" class="basis-1/2 py-1  xl:py-0  text-center bg-[#E4819B] rounded-lg border-4 border-[#E4819B] shrink">Paiement</button>
    </section>
  </div>
</template>
