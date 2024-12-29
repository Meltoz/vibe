<template>
  <div class="max-w-full">
    <Nav />
    <NuxtPage />
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Nav from "./components/layout/nav.vue";
import Footer from "./components/layout/footer.vue";
</script>