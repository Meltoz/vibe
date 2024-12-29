<script setup lang="ts">
import Modal from "../layout/modal.vue";

const isRegisterModalOpen = ref(false);

const closeRegisterModal = () => {
  isRegisterModalOpen.value = false;
}

const openRegisterModal = () => {
  isRegisterModalOpen.value = true;
}

</script>

<template>
<div>
  <h3>Inscription à la newsletter</h3>
  <div>
    <p>Inscrivez à notre newsletter</p>
    <button @click="openRegisterModal">S'abonner</button>

    <Modal :is-open="isRegisterModalOpen" @close="closeRegisterModal">
      <div>
        <img src="/imgs/logo.png" class="h-48">
        <h3 class="text-center text-3xl">Tenez vous inormé des actualités du festival</h3>
      </div>

    </Modal>
  </div>
</div>
</template>

<style scoped>

</style>