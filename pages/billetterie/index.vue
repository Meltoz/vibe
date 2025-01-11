<script setup lang="ts">

import NumberPicker from '../../components/layout/form/number-picker.vue';
import CardEntry from '../../components/billetterie/card-entry.vue';
import Stepper from '../../components/billetterie/stepper.vue';

const vendredi = ref(0);
const samedi = ref(0);
const twoDay = ref(0);
</script>

<template>
  <layout-header title="Billetterie"  img="/imgs/billetterie/hero.avif" />
  <stepper :current-step="1">
<div class="w-full grid grid-cols-1 place-items-center gap-y-10">
  <card-entry title="Vendredi" :price="70" color="#99B8E2" access="du vendredi" class="w-1/2">
    <number-picker id="fdqsf" v-model="vendredi" :max="10"/>
  </card-entry>
  <card-entry title="Samedi" :price="70" color="#E4819B" access="du samedi" class="w-1/2">
    <number-picker id="er" v-model="samedi" :max="10"/>
  </card-entry>
  <card-entry title="2 Jours" :price="120" color="#D2DA90" access="des deux jours" class="w-1/2">
    <number-picker id="azd" v-model="twoDay" :max="10"/>
  </card-entry>
</div></stepper>

</template>

<style scoped>

</style>