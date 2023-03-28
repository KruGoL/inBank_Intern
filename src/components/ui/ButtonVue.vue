<template>
  <button class="bg-violet-dark mx-auto w-full sm:w-80 h-12 text-white rounded-lg">
    {{ title }}
  </button>
</template>

<script setup lang="ts">
defineProps({ title: String })
</script>
