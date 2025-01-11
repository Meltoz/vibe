<script setup lang="ts">
import { Trash2 } from 'lucide-vue-next';

const props = defineProps<{
  modelValue: number,
  id: string,
  max?: number
}>();

const emit = defineEmits(['update:modelValue']);


const increment = () => {
  if(props.modelValue < props.max) {
    emit('update:modelValue', props.modelValue+1);
  }

}

const decrement = () => {
  if(props.modelValue - 1 >= 0){
    emit('update:modelValue', props.modelValue - 1);
  }
}
const reset = () => {
  emit('update:modelValue', 0);
}

</script>

<template>
<fieldset class="flex gap-2">
  <div class="flex gap-2">
    <button @click="decrement"
            v-if="modelValue > 0"
            class="">-</button>
    <input type="text" :id="id" :value="modelValue" readonly class="w-6 text-center bg-transparent"/>
    <button @click="increment">+</button>
  </div>

  <Trash2 class="cursor-pointer" v-if="modelValue > 0" @click="reset" />

</fieldset>
</template>