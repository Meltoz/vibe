<template>

  <div class="layout">
    <div v-for="(halo, index) in halos"
         :key="index"
         :class="['halo', halo.class]"
         :style="{
        top: `${halo.top}%`,
        left: `${halo.left}%`,
      }"
    ></div>
    <div class="content bg-transparent">
      <Nav />
      <NuxtPage />
      <Footer />
    </div>
  </div>
</template>
<script setup lang="ts">
import Nav from "./components/layout/nav.vue";
import Footer from "./components/layout/footer.vue";
import { ref } from 'vue';

const halos = ref([
  { top: 0, left: -10, class: 'halo-1' },
  { top: 50, left: 90, class: 'halo-2' },
  { top: 100, left: 20, class: 'halo-3' },
]);
</script>

<style scoped>
.layout {
  position: relative;
  width: 100%;
  min-height: 100%; /* S'adapte à la hauteur du contenu */
  overflow: hidden; /* Empêche les débordements provoqués par les halos */
}

/* Contenu principal */
.content {
  position: relative; /* Place le contenu au-dessus des halos */
}
.halo {
  position: absolute;
  overflow: hidden;
  width: 3000px;
  height: 3000px;
  z-index: -10;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
  filter: blur(150px);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none; /* Empêche les interactions utilisateur */
}

/* Classes supplémentaires pour personnaliser les halos */
.halo-1 {
  background: radial-gradient(circle, #E4809B, rgba(255, 0, 0, 0));
}
.halo-2 {
  background: radial-gradient(circle, #99B8E2, rgba(0, 255, 0, 0));
}
.halo-3 {
  background: radial-gradient(circle, #D2DA90, rgba(0, 0, 255, 0));
}
</style>
