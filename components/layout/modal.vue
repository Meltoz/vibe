<script setup lang="ts">
import { X } from 'lucide-vue-next';

defineProps<{
  isOpen: boolean
}>();

const emit = defineEmits<{
  close: void
}>();

const close = () => {
  emit('close', null);
}
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" @click="close">
    <div class="text-black gradient-blur rounded-xl max-w-screen-sm relative" @click.stop>
      <!-- Bouton de fermeture -->
      <div class="flex justify-end mx-6 my-4 absolute right-0">
        <button class="border-4 border-black rounded p-0.5 " @click="close">
          <X :stroke-width="3" />
        </button>
      </div>

      <!-- Contenu de la modal -->
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .gradient-blur {
    background: radial-gradient(circle, #FF8FAD, #fad2dd);
  }
</style>