<script setup lang="ts">

import Stepper from '../../components/billetterie/stepper.vue';
import CardExtra from '../../components/billetterie/card-extra.vue';
import NumberPicker from '../../components/layout/form/number-picker.vue';

const g = ref(0);
</script>

<template>
  <stepper :current-step="4">
    <section class="grid grid-cols-1 place-items-center gap-y-6 mx-6">
      <billetterie-card title="Tente Individuelle" information="(1-2 personnes)" :price="15" class="xl:w-1/2">
        <template #description>
          <ul class="">
            <li>Tente pour une ou 2 personne(s)</li>
            <li>Sac de couchage et lanterne inclus dans le forfait </li>
            <li>Vous aurez également accès aux services du campings (piscines, douches, toilettes, animations du soir etc)</li>
          </ul>
        </template>
        <template #number>
          <number-picker id="mlskjdf" v-model="g" :max="10"/>
        </template>
      </billetterie-card>
      <billetterie-card title="Tente format famille" information="(3-6 personnes)" :price="40" class="xl:w-1/2">
        <template #description>
          <ul class="">
            <li>Groupe de tentes à partir de 3 personnes jusqu’à 6 personnes </li>
            <li>Sac de couchage et lanterne inclus dans le forfait </li>
            <li>Vous aurez également accès aux services du campings (piscines, douches, toilettes, animations du soir etc)</li>
          </ul>
        </template>
        <template #number>
          <number-picker id="mlskjdf" v-model="g" :max="10"/>
        </template>
      </billetterie-card>
      <billetterie-card title="Tente groupe" information="(6-12 personnes)" :price="70" class="xl:w-1/2">
        <template #description>
          <ul class="">
            <li>Groupe de tentes à partir de 6 personnes jusqu’à 12 personnes</li>
            <li>Sac de couchage et lanterne inclus dans le forfait </li>
            <li>Vous aurez également accès aux services du campings (piscines, douches, toilettes, animations du soir etc)</li>
          </ul>
        </template>
        <template #number>
          <number-picker id="mlskjdf" v-model="g" :max="10"/>
        </template>
      </billetterie-card>
      <billetterie-card title="Emplacement Camping Car" :price="100" class="xl:w-1/2">
        <template #description>
          <ul class="">
            <li>Un emplacement est mis à votre disposition pour votre camping car.</li>
            <li>Vous avez la possibilité de vider vos eaux sales.</li>
            <li>Vous avez accès aux animations du soir, aux piscines etc</li>
          </ul>
        </template>
        <template #number>
          <number-picker id="mlskjdf" v-model="g" :max="10"/>
        </template>
      </billetterie-card>
      <billetterie-card title="Emplacement Camping Car VIP" :price="150" class="xl:w-1/2">
        <template #description>
          <ul class="">
            <li>Un emplacement est mis à votre disposition pour votre camping car.</li>
            <li>Vous avez la possibilité de vider vos eaux sales.</li>
            <li>Vous avez accès aux animations du soir, aux piscines etc</li>
          </ul>
        </template>
        <template #number>
          <number-picker id="mlskjdf" v-model="g" :max="10"/>
        </template>
      </billetterie-card>
    </section>
    <card-extra :active="2"/>
  </stepper>
</template>

<style scoped>

</style>