<script setup lang="ts">

import NumberPicker from '../../components/layout/form/number-picker.vue';
import CardEntry from '../../components/billetterie/card-entry.vue';

const test = ref(5)
</script>

<template>
  <layout-header title="Billetterie"  img="/imgs/billetterie/hero.avif" />

  <card-entry title="Pass Vendredi" :price="70" color="red" access="du vendredi" />
</template>

<style scoped>

</style>