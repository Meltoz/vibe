<script setup lang="ts">
import NumberPicker from '../../components/layout/form/number-picker.vue';
import CardEntry from '../../components/billetterie/card-entry.vue';
import Stepper from '../../components/billetterie/stepper.vue';

const vendredi = ref(0);
const samedi = ref(0);
const twoDay = ref(0);
</script>

<template>
  <layout-header title="Billetterie" img="/imgs/billetterie/hero.avif" />
  <p class="mx-5 my-6">
    Au <span class="font-semibold">Festival VIB</span>, la musique prend vie grâce à une programmation qui mêle <span class="font-semibold">artistes de renommée
    internationale</span> et <span class="font-semibold">talents émergents</span>. En plus de faire vibrer le public avec des performances
    inoubliables, le festival s’engage à <span class="font-semibold">soutenir la nouvelle génération</span> de musiciens en leur
    offrant une scène pour se révéler. Cette rencontre entre têtes d’affiche et découvertes
    prometteuses crée une alchimie unique, faisant de VIB <span class="font-semibold">bien plus qu’un simple événement</span> : un
    véritable tremplin pour la scène musicale de demain.
  </p>
  <stepper :current-step="1">
    <div class="w-full grid grid-cols-1 place-items-center gap-y-10">
      <card-entry
        title="Vendredi"
        :price="70"
        color="#99B8E2"
        access="du vendredi"
      >
        <number-picker id="fdqsf" v-model="vendredi" :max="10" />
      </card-entry>
      <card-entry title="Samedi" :price="70" color="#E4819B" access="du samedi" >
        <number-picker id="er" v-model="samedi" :max="10" />
      </card-entry>
      <card-entry
        title="2 Jours"
        :price="120"
        color="#D2DA90"
        access="des deux jours"
      >
        <number-picker id="azd" v-model="twoDay" :max="10" />
      </card-entry>
    </div>
  </stepper>
</template>

<style scoped></style>
