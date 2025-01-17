<script setup lang="ts">

import Stepper from '../../components/billetterie/stepper.vue';
import Extras from './extras.vue';
import CardExtra from '../../components/billetterie/card-extra.vue';
import NumberPicker from '../../components/layout/form/number-picker.vue';

const car = ref(0);
const group = ref(0);
const caravane = ref(0);

onMounted(() => {
  car.value = Number.parseInt(sessionStorage.getItem('car') || '0', 10);
  group.value = Number.parseInt(sessionStorage.getItem('parking-group') || '0', 10);
  caravane.value = Number.parseInt(sessionStorage.getItem('caravane') || '0', 10);
});

const save = () => {
  sessionStorage.setItem('car', car.value.toString());
  sessionStorage.setItem('parking-group', group.value.toString());
  sessionStorage.setItem('caravane', caravane.value.toString());
}
</script>

<template>
  <stepper :current-step="5">
    <section class="grid grid-cols-1 place-items-center gap-y-6 mx-6">
      <billetterie-card title="Parking voiture seule" :price="15" class="xl:w-1/2">
        <template #description>
          <ul class="">
            <li>Tente pour une ou 2 personne(s) </li>
            <li>Sac de couchage et lanterne inclus dans le forfait </li>
            <li>Vous aurez également accès aux services du campings (piscines, douches, toilettes, animations du soir etc)</li>
          </ul>
        </template>
        <template #number>
          <number-picker id="car" v-model="car" @update:modelValue="save" :max="10"/>
        </template>
      </billetterie-card>
      <billetterie-card title="Parking de groupe de voiture" :price="40" class="xl:w-1/2">
        <template #description>
          <ul class="">
            <li>Groupe de tentes à partir de 3 personnes jusqu’à 6 personnes </li>
            <li>Sacs de couchage et lanternes inclus dans le forfait</li>
            <li>Vous aurez également accès aux services du camping (piscines, douches, toilettes, animations du soir etc) </li>
          </ul>
        </template>
        <template #number>
          <number-picker id="group" v-model="group" @update:modelValue="save" :max="10"/>
        </template>
      </billetterie-card>
      <billetterie-card title="Parking voiture et caravane" :price="70" class="xl:w-1/2">
        <template #description>
          <ul class="">
            <li>Groupe de tentes à partir de 6 personnes jusqu’à 12 personnes</li>
            <li>Sacs de couchage et lanternes inclus dans le forfait </li>
            <li>Vous aurez également accès aux services du camping (piscines, douches, toilettes, animations du soir etc)</li>
          </ul>
        </template>
        <template #number>
          <number-picker id="caravane" v-model="caravane" @update:modelValue="save" :max="10"/>
        </template>
      </billetterie-card>
    </section>

    <card-extra :active="3" />
  </stepper>
</template>

<style scoped>

</style>