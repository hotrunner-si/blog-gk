<template>
  <div class="view-switcher" aria-label="Izbira prikaza bloga">
    <button
      :class="{ active: modelValue === 'cards' }"
      @click="$emit('update:modelValue', 'cards')"
    >
      Cards
    </button>

    <button
      :class="{ active: modelValue === 'list' }"
      @click="$emit('update:modelValue', 'list')"
    >
      List
    </button>

    <button
      :class="{ active: modelValue === 'calendar' }"
      @click="$emit('update:modelValue', 'calendar')"
    >
      Calendar
    </button>
  </div>
</template>

<script setup>
defineProps({
  modelValue: { type: String, required: true },
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.view-switcher {
  display: flex;
  gap: var(--space-sm);
  margin-top: var(--space-lg);
  flex-wrap: wrap;
}

button {
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: transparent;
  color: var(--color-text);
  padding: 0.75rem 1rem;
  cursor: pointer;
}

button.active {
  background: var(--color-accent);
  color: var(--color-button-text);
  border-color: var(--color-accent);
  font-weight: 600;
}
</style>