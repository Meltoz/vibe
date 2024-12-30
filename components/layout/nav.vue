<template>
  <nav>
    <div>
      <ul class="hidden lg:flex justify-evenly h-16 items-center">
        <li>
          <NuxtLink to="/">
            <img src="/imgs/vib.svg" class="h-12"/>
          </NuxtLink>
        </li>
        <li v-for="nav in navs" :key="nav.name">
          <NuxtLink :to="nav.to" class="text-3xl rounded-xl bg-pink-300 px-2 pb-1.5 tracking-wide hover:bg-pink-200">
            {{ nav.name }}
          </NuxtLink>
        </li>
      </ul>
      <div class="lg:hidden flex justify-between mx-5 items-center" @click="isOpen = !isOpen" >
        <NuxtLink to="/">
          <img src="/imgs/vib.svg" class="h-6"/>
        </NuxtLink>
        <Menu :size="36"/>
      </div>
    </div>


    <ul class="lg:hidden" v-if="isOpen">
      <li v-for="nav in navs" :key="nav.name">
        <NuxtLink :to="nav.to" class="block px-6 py-2">{{ nav.name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Menu } from 'lucide-vue-next';

const navs = [{
  name: 'Billetterie',
  to: '/billetterie'
}, {
  name: 'Programmation',
  to: '/programmation'
}, {
  name: 'A propos',
  to: '/about'
}];
const isOpen = ref(false);

</script>