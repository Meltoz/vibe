<template>
  <footer class="bg-gray-600 text-white">
    <section class="grid grid-cols-2 gap-y-6 md:grid-cols-4 mx-5md:mx-16 justify-items-center pt-10 gap-x-20 pb-6">
      <div>
        <h5 class="font-semibold">Réseaux Sociaux</h5>
        <ul class="mt-3 px-3 space-y-1">
          <li><img src="/imgs/socials/discord.png" class="h-7 mx-auto" /></li>
          <li><img src="/imgs/socials/instagram.png" class="h-7 mx-auto" /></li>
          <li><img src="/imgs/socials/facebook.png" class="h-7 mx-auto" /></li>
          <li><img src="/imgs/socials/tiktok.png" class="h-7 mx-auto" /></li>
        </ul>
      </div>
      <div>
        <h5 class="font-semibold">Mentions Légales</h5>
        <ul class="mt-3 px-3">
          <li>Politique de confidentialité</li>
          <li>Gestion des cookies</li>
          <li>CGVU</li>
        </ul>
      </div>
      <div>
        <h5 class="font-semibold">Thématiques</h5>
        <ul class="mt-3 px-3">
          <li><NuxtLink to="/billetterie">Billetterie</NuxtLink></li>
          <li><NuxtLink to="/programmation">Programmation</NuxtLink></li>
          <li>Location</li>
        </ul>
      </div>
      <div>
        <h5 class="font-semibold">Contact</h5>
        <ul class="px-3 mt-3"><li>contact-festival@vib.com</li></ul>
      </div>
    </section>
  </footer>
</template>
<script setup lang="ts">
</script>