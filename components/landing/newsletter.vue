<script setup lang="ts">
import Modal from "../layout/modal.vue";

const isRegisterModalOpen = ref(false);
const isConfirmModalOpen = ref(false);

const closeRegisterModal = () => {
  isRegisterModalOpen.value = false;
}

const openRegisterModal = () => {
  isRegisterModalOpen.value = true;
}

const openConfirmModal = () => {
  isConfirmModalOpen.value = true;
}

const closeConfirmModal = () => {
  isConfirmModalOpen.value = false;
  isRegisterModalOpen.value = false;
}
</script>

<template>
<section class="bg-gradient-to-t from-pink-400 to-pink-100 to-60%">
  <div class="mx-[21%]">
    <h3 class="text-2xl py-6">Inscription à la newsletter</h3>
    <div class="flex justify-between mx-16 pb-16">
      <p class="basis-6/12">Inscrivez vous à notre <span class="font-semibold">Newsletter</span> pour recevoir les informations du festival et les bons plans de la billetterie !</p>
      <button @click="openRegisterModal" class="rounded-md bg-green-200 px-6 py-2 text-xl font-semibold hover:bg-green-100">S'abonner</button>
    </div>
  </div>
</section>

  <Modal :is-open="isRegisterModalOpen" @close="closeRegisterModal">
    <div class="mx-10 text-xl">
      <img src="/imgs/logo.png" class="h-48 relative left-1/2 -translate-x-1/2">
      <h3 class="text-center text-4xl font-semibold">Tenez vous informé des actualités du festival !</h3>
      <section class="space-y-4 mb-6">
        <fieldset class="flex flex-col">
          <label for="firstname" class="px-2">Prénom</label>
          <input type="text" id="firstname" placeholder="Jean" class="border rounded px-2 py-1">
        </fieldset>
        <fieldset class="flex flex-col">
          <label for="email" class="px-2">Adresse mail</label>
          <input type="text" id="email" placeholder="jean.serien@outlook.com" class="border rounded px-2 py-1">
        </fieldset>
        <div class="flex justify-end">
          <button @click="openConfirmModal" class="text-2xl font-semibold bg-pink-400/80 rounded-xl px-3 py-2 hover:bg-pink-200">S'abonner</button>
        </div>
      </section>
    </div>
  </Modal>
  <Modal :is-open="isConfirmModalOpen" @close="closeConfirmModal">
    <img src="/imgs/Landing/modal_confirm.avif" class="h-48 rounded-t-xl">
    <p class="text-center py-6 text-xl font-semibold">Vous êtes bien abonné à notre NewsLetter !</p>
    <div class="flex justify-end mb-6 mr-6">
      <button class="rounded-md bg-green-200 px-6 py-2 text-xl font-semibold hover:bg-green-100" @click="closeConfirmModal">OK !</button>
    </div>
  </Modal>
</template>

<style scoped>

</style>