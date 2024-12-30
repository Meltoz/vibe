
<template>
  <layout-header title="A propos de nous" img="/imgs/about/header.avif"/>
  <div class="grid lg:grid-cols-5  grid-col-1 mx-5 lg:mx-32 mt-16 lg:mt-32 mb-16 gap-y-32">
    <p class="lg:col-span-3 lg:col-start-2 text-xl">
      Un festival engagé pour tous ! <span class="font-semibold">Accessible</span>
      et <span class="font-semibold">respectueux de votre budget</span>,
      nous mettons en avant des <span class="font-semibold">artistes
      émergents</span> et proposons une <span class="font-semibold">programmation musicale variée. Écoresponsable</span>
      avec <span class="font-semibold">éco-points et gobelets consignés</span>, et
      entièrement <span class="font-semibold">handifriendly</span>, ce rendez-vous unique rassemble <span
        class="font-semibold">musique</span>, <span class="font-semibold">diversité</span> et <span
        class="font-semibold">valeurs fortes</span>.</p>

    <p class="lg:col-span-3 lg:col-start-2 text-xl">
      Merci à vous tous ! <br/><span class="font-semibold">Chers festivaliers et partenaires</span>, c’est grâce à <span class="font-semibold">votre
      présence</span>, <span class="font-semibold">votre énergie</span> et <span class="font-semibold">votre
      soutien</span> que notre festival <span class="font-semibold">prend vie et s’anime</span> chaque année. Vous êtes le cœur battant de cet événement, et nous
      vous remercions chaleureusement pour votre contribution à cette aventure unique. À l’année prochaine !
    </p>
  </div>
  <section class="mx-5 lg:mx-[24%]">
    <h4 class="contour text-5xl lg:text-6xl font-semibold my-6">Nos partenaires</h4>
    <div class="flex md:justify-around justify-center gap-6 lg:gap-0 flex-wrap">
      <layout-card v-for="partner in partners" :key="partner.alt" :img="partner.img" :alt="partner.alt"/>
    </div>
  </section>

  <layout-logo/>
</template>

<style scoped>
.contour {
  color: transparent;
  -webkit-text-stroke: 1px #FF8FAD;
}
</style>
<script setup lang="ts">
useHead({
  title: 'VIB - A propos de nous',
  meta: [{
    name: 'description',
    content: 'VIB, le festival du sud de la France'
  }]
});

const partners = [{
  img: '/imgs/about/partners/greenroom.png',
  alt: 'Greenroom'
},{
  img: '/imgs/about/partners/inrock.png',
  alt: 'inrockuptibles'
},{
  img: '/imgs/about/partners/france_tv.png',
  alt: 'france tv'
}]
</script>
