<script setup lang="ts">
import Stepper from '../../components/billetterie/stepper.vue';
import CardExtra from '../../components/billetterie/card-extra.vue';
</script>

<template>
  <layout-header title="Extras" img="/imgs/billetterie/hero2.avif" />
  <p class="mx-10">
    Profitez pleinement de votre séjour au festival grâce à nos services pratiques ! Louez un vélo
    pour vous déplacer facilement entre les différents sites et découvrez la ville en toute liberté.
    Un parking sécurisé est à votre disposition, ainsi que des emplacements dédiés pour camping-cars
    et tentes afin de vivre l’expérience en toute sérénité.
  </p>
  <stepper :current-step="2">
    <card-extra />
  </stepper>
</template>

<style scoped></style>
