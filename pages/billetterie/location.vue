<script setup lang="ts">

import Stepper from '../../components/billetterie/stepper.vue';
import CardExtra from '../../components/billetterie/card-extra.vue';
import NumberPicker from '../../components/layout/form/number-picker.vue';

const g = ref(0);
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
        <number-picker id="mlskjdf" v-model="g" :max="10"/>
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
        <number-picker id="mlskjdf" v-model="g" :max="10"/>
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
        <number-picker id="mlskjdf" v-model="g" :max="10"/>
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
        <number-picker id="mlskjdf" v-model="g" :max="10"/>
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
        <number-picker id="mlskjdf" v-model="g" :max="10"/>
      </template>
    </billetterie-card>
  </section>

  <card-extra :active="1"/>
</stepper>
</template>

<style scoped>

</style>