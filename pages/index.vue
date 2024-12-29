<script setup lang="ts">


import Newsletter from "../components/landing/newsletter.vue";

const images = [{
  src: "/imgs/Landing/plage.avif",
  alt: "Hendaye",
  text: "Hendaye"
}, {
  src: "/imgs/Landing/plage.avif",
  alt: "Hendaye",
  text: "2 jours"
}, {
  src: "/imgs/Landing/plage.avif",
  alt: "Hendaye",
  text: "+ de 100 artistes"
}]
</script>

<template>
  <img src="/imgs/Landing/LP_hero.avif" class="w-full">
  <h1 class="text-7xl text-center contour font-semibold relative -top-12 z-10">Vibrez au rythme de la musique</h1>
  <h2 class="text-5xl text-gray-500 text-center -mt-6">Le 6 & 7 juin 2025</h2>

  <div class="grid grid-cols-5 mx-32 mt-32 gap-20">
    <p class="col-span-3 col-start-2 text-xl">Les <span class="font-semibold">6 et 7 juin 2025</span>, le Festival VIB vous donne rendez-vous à <span class="font-semibold">Hendaye</span> pour une
      expérience immersive et inoubliable. Imaginez-vous vibrer au rythme d’une <span class="font-semibold">programmation musicale envoûtante</span>, tout en
      contemplant un <span class="font-semibold">coucher de soleil</span> à couper le souffle sur l’océan Atlantique. Dans ce cadre idyllique où mer et ciel
      se rencontrent, VIB est bien plus qu’un simple festival : c’est une <span class="font-semibold">célébration de la musique</span>, de la nature et des
      émotions partagées. Préparez-vous à vivre <span class="font-semibold">deux jours magiques</span>, où chaque instant restera gravé dans votre mémoire.
    </p>

    <div class="col-start-2 col-span-3 grid grid-cols-subgrid mt-20">
      <LandingCard v-for="image in images" :key="image.src" :img="image.src" :alt="image.alt" :text="image.text"/>
    </div>
  </div>

  <Newsletter />

</template>

<style scoped>
.contour {
  color: white;
  text-shadow: 0 1px 4px black;
}
</style>