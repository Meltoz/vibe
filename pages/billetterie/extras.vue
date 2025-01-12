<script setup lang="ts">

import Stepper from '../../components/billetterie/stepper.vue';
import CardExtra from '../../components/billetterie/card-extra.vue';
</script>

<template>
  <layout-header title="Extras" img="/imgs/billetterie/hero2.avif" />
<stepper :current-step="2">
  <card-extra/>
</stepper>
</template>

<style scoped>

</style>