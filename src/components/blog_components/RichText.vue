<template>
  <template v-for="(part, index) in content" :key="index">
    <span v-if="part.type === 'accent'" class="accent">
      {{ part.value }}
    </span>

    <template v-else>
      {{ part.value }}
    </template>
  </template>
</template>

<script setup>
defineProps({
  content: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
.accent {
  color: var(--color-accent);
  font-family: var(--font-display);
  font-weight: 700;
}
</style>