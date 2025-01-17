<script setup lang="ts">

import Stepper from '../../components/billetterie/stepper.vue';
import CardExtra from '../../components/billetterie/card-extra.vue';
import NumberPicker from '../../components/layout/form/number-picker.vue';

const oneHour = ref(0);
const fourHour = ref(0);
const oneDay = ref(0);
const twoDay = ref(0);
const group = ref(0);

// Exécute la logique côté client
onMounted(() => {
  oneHour.value = Number.parseInt(sessionStorage.getItem('oneHour') || '0', 10);
  fourHour.value = Number.parseInt(sessionStorage.getItem('fourHour') || '0', 10);
  oneDay.value = Number.parseInt(sessionStorage.getItem('oneDay') || '0', 10);
  twoDay.value = Number.parseInt(sessionStorage.getItem('twoDay') || '0', 10);
  group.value = Number.parseInt(sessionStorage.getItem('location-group') || '0', 10);
});

const save = () => {
  sessionStorage.setItem('oneHour', oneHour.value.toString());
  sessionStorage.setItem('fourHour', fourHour.value.toString());
  sessionStorage.setItem('oneDay', oneDay.value.toString())
  sessionStorage.setItem('twoDay', twoDay.value.toString())
  sessionStorage.setItem('location-group', group.value.toString())
}
</script>

<template>
  <layout-header title="Location vélo" img="/imgs/billetterie/hero2.avif" />
<stepper :current-step="3">
  <section class="grid grid-cols-1 place-items-center gap-y-6 mx-6">
    <billetterie-card title="Forfait 1h" :price="15" class="xl:w-1/2">
      <template #description>
        <ul class="ta">
          <li>VTT, vélo de ville ou vélo enfant au choix.</li>
          <li>L’anti vol et nécessaire de sécurité fourni</li>
          <li class="italic">(lumière avant et arrière, réflecteurs, protections enfant...)</li>
          <li class="italic">Prix pour un vélo loué.</li>
        </ul>
      </template>
      <template #number>
        <number-picker id="oneHour" v-model="oneHour" @update:modelValue="save"  :max="10"/>
      </template>
    </billetterie-card>
    <billetterie-card title="Forfait 4h" :price="55" class="xl:w-1/2">
      <template #description>
        <ul class="ta">
          <li>VTT, vélo de ville ou vélo enfant au choix.</li>
          <li>L’anti vol et nécessaire de sécurité fourni</li>
          <li class="italic">(lumière avant et arrière, réflecteurs, protections enfant...)</li>
          <li class="italic">Prix pour un vélo loué.</li>
        </ul>
      </template>
      <template #number>
        <number-picker id="fourHour" v-model="fourHour" @update:modelValue="save"  :max="10"/>
      </template>
    </billetterie-card>
    <billetterie-card title="Forfait 1 Jour" :price="160" class="xl:w-1/2">
      <template #description>
        <ul class="ta">
          <li>VTT, vélo de ville ou vélo enfant au choix.</li>
          <li>L’anti vol et nécessaire de sécurité fourni</li>
          <li class="italic">(lumière avant et arrière, réflecteurs, protections enfant...)</li>
          <li class="italic">Prix pour un vélo loué.</li>
        </ul>
      </template>
      <template #number>
        <number-picker id="oneDay" v-model="oneDay" @update:modelValue="save" :max="10"/>
      </template>
    </billetterie-card>
    <billetterie-card title="Forfait 2 Jour" :price="300" class="xl:w-1/2">
      <template #description>
        <ul class="ta">
          <li>VTT, vélo de ville ou vélo enfant au choix.</li>
          <li>L’anti vol et nécessaire de sécurité fourni</li>
          <li class="italic">(lumière avant et arrière, réflecteurs, protections enfant...)</li>
          <li class="italic">Prix pour un vélo loué.</li>
        </ul>
      </template>
      <template #number>
        <number-picker id="twoDay" v-model="twoDay" @update:modelValue="save" :max="10"/>
      </template>
    </billetterie-card>
    <billetterie-card title="Forfait de groupe" information="(à partir de 4 locations)" :price="10" class="xl:w-1/2">
      <template #description>
        <ul class="ta">
          <li>VTT, vélo de ville ou vélo enfant au choix.</li>
          <li>L’anti vol et nécessaire de sécurité fourni</li>
          <li class="italic">(lumière avant et arrière, réflecteurs, protections enfant...)</li>
          <li class="italic">Tarif pour un vélo</li>
        </ul>
      </template>
      <template #number>
        <number-picker id="group" v-model="group" @update:modelValue="save" :max="10"/>
      </template>
    </billetterie-card>
  </section>

  <card-extra :active="1"/>
</stepper>
</template>

<style scoped>

</style>