<script setup lang="ts">

defineProps<{
  img: string,
  alt: string
  text: string
}>();
</script>

<template>
<div>
  <img :src="img" :alt="alt" class="object-cover h-80 aspect-auto rounded-md" />
  <p>{{text}}</p>
</div>
</template>

<style scoped>

</style>