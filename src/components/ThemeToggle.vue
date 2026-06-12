<template>
  <button
    class="theme-toggle"
    type="button"
    :aria-label="isDark ? 'Preklopi na svetli način' : 'Preklopi na temni način'"
    :title="isDark ? 'Svetli način' : 'Temni način'"
    @click="toggleTheme"
  >
    <span class="theme-toggle_icon" aria-hidden="true">{{ isDark ? '☀' : '☾' }}</span>
    <span>{{ isDark ? 'Light' : 'Dark' }}</span>
  </button>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

const STORAGE_KEY = 'gorski-kilometri-theme'
const theme = ref('light')
const isDark = computed(() => theme.value === 'dark')

function applyTheme(nextTheme) {
  theme.value = nextTheme
  document.documentElement.dataset.theme = nextTheme
  localStorage.setItem(STORAGE_KEY, nextTheme)
}

function toggleTheme() {
  applyTheme(isDark.value ? 'light' : 'dark')
}

onMounted(() => {
  const savedTheme = localStorage.getItem(STORAGE_KEY)
  applyTheme(savedTheme === 'dark' ? 'dark' : 'light')
})
</script>

<style scoped>
.theme-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-card-bg-strong);
  color: var(--color-text);
  padding: 0.55rem 0.8rem;
  cursor: pointer;
  transition:
    transform 160ms ease,
    border-color 160ms ease,
    background-color 160ms ease;
}

.theme-toggle:hover {
  transform: translateY(-1px);
  border-color: var(--color-accent);
}

.theme-toggle_icon {
  display: inline-grid;
  place-items: center;
  width: 1.15rem;
  height: 1.15rem;
  color: var(--color-accent);
}
</style>