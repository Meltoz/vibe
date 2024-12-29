<template>
  <nav class="flex justify-evenly h-16 items-center">
    <NuxtLink to="/">
      <img src="/imgs/vib.svg" class="h-12"/>
    </NuxtLink>
    <NuxtLink v-for="nav in navs" :key="nav.name" :to="nav.to" class="text-3xl rounded-xl bg-pink-300 px-2 pb-1.5 tracking-wide">
      {{ nav.name }}
    </NuxtLink>

    <ul></ul>
  </nav>
</template>

<script setup lang="ts">
const navs = [{
  name: 'Billetterie',
  to: '/billetterie'
}, {
  name: 'Programmation',
  to: '/programmation'
}, {
  name: 'A propos',
  to: '/about'
}]

</script>