<template>
  <button class="theme-toggle" type="button" @click="toggleTheme">
    <span class="theme-toggle_icon" aria-hidden="true">
      <svg v-if="isDark" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
        <circle cx="12" cy="12" r="5" />
        <path
          d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>

      <svg v-else viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 12.79A9 9 0 1111.21 3c0 .34.02.68.06 1.01A7 7 0 0021 12.79z" />
      </svg>
    </span>
  </button>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import SunIcon from '@/assets/icons/sun.svg'
import MoonIcon from '@/assets/icons/moon.svg'

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