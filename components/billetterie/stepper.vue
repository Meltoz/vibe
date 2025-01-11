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
      <ul class="flex justify-center gap-20">
        <li
          v-for="(link, index) in links"
          class="pt-4 pb-2 px-5 rounded-full text-5xl font-ruska"
          :class="{ 'bg-green-400': currentStep === index+1, 'bg-green-700': currentStep > index +1, 'bg-gray-500' : currentStep < index+1 }"
          :key="index"
        >
          <NuxtLink :to="link">{{index+1}}</NuxtLink>
        </li>
      </ul>
    </div>
    <slot></slot>
    <section>
      <NuxtLink :to="prevStep()" v-if="currentStep > 1">Précedent</NuxtLink>
      <NuxtLink :to="nextStep()">suivant</NuxtLink>
    </section>
  </div>
</template>
