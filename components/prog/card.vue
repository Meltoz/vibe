

<template>
<div>
  <p>{{artist.name}}</p>
  <p>Location : {{artist.location}}</p>
</div>
</template>

<script setup lang="ts">
import type {Performer} from "../../models/performer";

defineProps<{
  artist: Performer,
}>()
</script>