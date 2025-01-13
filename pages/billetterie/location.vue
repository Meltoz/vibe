<script setup lang="ts">

import Stepper from '../../components/billetterie/stepper.vue';
import CardExtra from '../../components/billetterie/card-extra.vue';
</script>

<template>
  <layout-header title="Location vélo" img="/imgs/billetterie/hero2.avif" />
<stepper :current-step="3">
  <card-extra :active="1"/>
</stepper>
</template>

<style scoped>

</style>