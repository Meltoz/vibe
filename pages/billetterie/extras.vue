<script setup lang="ts">
import Stepper from '../../components/billetterie/stepper.vue';
import CardExtra from '../../components/billetterie/card-extra.vue';
</script>

<template>
  <layout-header title="Extras" img="/imgs/billetterie/hero2.avif" />
  <div class="grid md:grid-cols-5 grid-col-1 mx-5 md:mx-32 mt-16 md:mt-32 mb-16">
    <p class="md:col-span-3 md:col-start-2 text-xl">
    Profitez pleinement de votre séjour au festival grâce à nos services pratiques ! Louez un vélo
    pour vous déplacer facilement entre les différents sites et découvrez la ville en toute liberté.
    Un parking sécurisé est à votre disposition, ainsi que des emplacements dédiés pour camping-cars
    et tentes afin de vivre l’expérience en toute sérénité.
    </p>
  </div>
  <stepper :current-step="2">
    <card-extra />
  </stepper>
</template>

<style scoped></style>
