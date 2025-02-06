<script setup lang="ts">
import NumberPicker from '../../components/layout/form/number-picker.vue';
import CardEntry from '../../components/billetterie/card-entry.vue';
import Stepper from '../../components/billetterie/stepper.vue';

const vendredi = ref(0);
const samedi = ref(0);
const twoDay = ref(0);

onMounted(() => {
  vendredi.value = Number.parseInt(sessionStorage.getItem('friday') || '0', 10);
  samedi.value = Number.parseInt(sessionStorage.getItem('saturday') || '0', 10);
  twoDay.value = Number.parseInt(sessionStorage.getItem('entry-twoday') || '0', 10);
})

const save = () => {
  sessionStorage.setItem('friday', vendredi.value.toString());
  sessionStorage.setItem('saturday', samedi.value.toString());
  sessionStorage.setItem('entry-twoday', twoDay.value.toString());
}
</script>

<template>
  <layout-header title="Billetterie" img="/imgs/billetterie/hero.avif" />
  <div class="grid md:grid-cols-5 grid-col-1 mx-5 md:mx-32 mt-16 md:mt-32 mb-16">
  <p class="md:col-span-3 md:col-start-2 text-xl">
    Au <span class="font-semibold">Festival VIB</span>, la musique prend vie grâce à une programmation qui mêle <span class="font-semibold">artistes de renommée
    internationale</span> et <span class="font-semibold">talents émergents</span>. En plus de faire vibrer le public avec des performances
    inoubliables, le festival s’engage à <span class="font-semibold">soutenir la nouvelle génération</span> de musiciens en leur
    offrant une scène pour se révéler. Cette rencontre entre têtes d’affiche et découvertes
    prometteuses crée une alchimie unique, faisant de VIB <span class="font-semibold">bien plus qu’un simple événement</span> : un
    véritable tremplin pour la scène musicale de demain.
  </p>
  </div>
  <stepper :current-step="1">
    <div class="w-full grid grid-cols-1 place-items-center gap-y-10">
      <card-entry
        title="Vendredi"
        :price="70"
        color="bg-vblue"
        access="du vendredi"
      >
        <number-picker id="fdqsf" v-model="vendredi" @update:modelValue="save" :max="10" />
      </card-entry>
      <card-entry title="Samedi" :price="70" color="bg-vgreen" access="du samedi" >
        <number-picker id="er" v-model="samedi" @update:modelValue="save" :max="10" />
      </card-entry>
      <card-entry
        title="2 Jours"
        :price="120"
        color="bg-vpink"
        access="des deux jours"
      >
        <number-picker id="twoDay" v-model="twoDay"  @update:modelValue="save":max="10" />
      </card-entry>
    </div>
  </stepper>
</template>

<style scoped></style>
