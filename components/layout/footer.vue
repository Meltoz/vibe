<template>
  <footer class="bg-gray-600 text-white">
    <section class="grid grid-cols-4 mx-10 justify-items-center pt-10">

      <div>
        <h5 class="font-semibold">Réseaux Sociaux</h5>
        <ul class="mt-3 px-3">
          <li>Discord</li>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Tiktok</li>
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