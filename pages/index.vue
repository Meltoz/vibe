<script setup lang="ts">
import Newsletter from "../components/landing/newsletter.vue";
import Socials from "../components/landing/socials.vue";
import Logo from "../components/layout/logo.vue";

useHead({
  title: 'VIB - Accueil',
  meta: [{
    name: 'description',
    content: 'Page d\'accueil du festival VIB'
  }]
})

const images = [{
  src: "/imgs/Landing/plage.avif",
  alt: "Hendaye",
  text: "Hendaye"
}, {
  src: "/imgs/Landing/plage.avif",
  alt: "Hendaye",
  text: "2 jours"
}, {
  src: "/imgs/Landing/artistes.avif",
  alt: "Hendaye",
  text: "+ de 100 artistes"
}]
</script>

<template>
  <img src="/imgs/Landing/LP_hero.avif" class="w-full">
  <h1 class="text-7xl text-center contour font-semibold relative -top-12 z-10">Vibrez au rythme de la musique</h1>
  <h2 class="text-5xl text-gray-500 text-center -mt-6">Le 6 & 7 juin 2025</h2>

  <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 mx-5 md:mx-24 xl:mx-32 mt-32 gap-x-5 gap-y-20">
    <p class="md:col-span-3 col-start-1 xl:col-start-2">Les <span class="font-semibold">6 et 7 juin 2025</span>, le Festival
      VIB vous donne rendez-vous à <span class="font-semibold">Hendaye</span> pour une
      expérience immersive et inoubliable. Imaginez-vous vibrer au rythme d’une <span class="font-semibold">programmation musicale envoûtante</span>,
      tout en
      contemplant un <span class="font-semibold">coucher de soleil</span> à couper le souffle sur l’océan Atlantique.
      Dans ce cadre idyllique où mer et ciel
      se rencontrent, VIB est bien plus qu’un simple festival : c’est une <span class="font-semibold">célébration de la musique</span>,
      de la nature et des
      émotions partagées. Préparez-vous à vivre <span class="font-semibold">deux jours magiques</span>, où chaque
      instant restera gravé dans votre mémoire.
    </p>

    <div class="grid grid-cols-subgrid md:col-span-3 xl:col-start-2 gap-y-5">
      <LandingCard v-for="image in images" :key="image.src" :img="image.src" :alt="image.alt" :text="image.text"/>
    </div>
  </div>
  <div class="relative inline-block w-11/12 md:w-7/12 left-1/2 -translate-x-1/2">
    <img src="/imgs/Landing/ciel.avif" class="mt-16 w-full h-56 object-cover rounded-xl">
    <div class="absolute bottom-3 w-[100%]">
      <p class=" text-xl md:text-[200%] font-bold text-center uppercase text-white">Une vue incroyable sur l'océan et le coucher de
        soleil</p>
    </div>
  </div>

  <div class="grid md:grid-cols-5 grid-col-1 mx-5 md:mx-32 mt-16 md:mt-32 mb-16">
    <p class="md:col-span-3 md:col-start-2 text-xl">Chez VIB tout est pensé pour <span class="font-semibold">faciliter votre séjour</span>
      et rendre votre expérience
      encore plus <span class="font-semibold">agréable</span>. Dans la
      section <span class="font-semibold">“Location”</span> vous aurez la possibilité de <span class="font-semibold">louer un vélo</span>
      pour vous rendre rapidement d’une scène à l’autre
      ainsi qu’explorer les environs d’Hendaye en toute liberté. Vous aurez également la possibilité de <span
          class="font-semibold">réserver un
        emplacement pour camping-car ou tente</span> si vous souhaitez vivre pleinement l’aventure en mode camping. Pour
      ceux qui
      viennent en voiture, un <span class="font-semibold">emplacement de parking</span> est également disponible afin de
      vous garantir une arrivée sans
      stress. Profitez de ces options pratiques pour savourer le festival dans les meilleures conditions !
    </p>
  </div>

  <Newsletter/>
  <Socials />
  <logo />
</template>

<style scoped>
.contour {
  color: white;
  text-shadow: 0 1px 4px black;
}
</style>