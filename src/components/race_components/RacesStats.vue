<template>
  <aside class="sidebar" :class="{ 'sidebar--open': isOpen }">
    <div class="sidebar-head">
      <p class="sidebar-tag">Moja statistika</p>
      <button class="more-toggle" type="button" @click="isOpen = !isOpen">
        {{ isOpen ? 'manj ' : 'več' }}
        <span class="dropdown-icon" :class="isOpen">
          ▼
        </span>
      </button>
    </div>

    <div class="stats-links">
      <a :href="statsLinks.utmb.link" target="_blank" rel="noopener noreferrer" class="stats-btn-primary">
        UTMB indeks: {{ statsLinks.utmb.index }}
      </a>
      <a :href="statsLinks.strava.link" target="_blank" rel="noopener noreferrer" class="stats-btn-primary">
        {{ statsLinks.strava.koms }} Strava kronc
      </a>
    </div>

    <div class="stats-extra">
      <div class="block-section">
        <h3 class="block-title">Osebni rekordi</h3>
        <div class="list">
          <a v-for="pr in personalBests" :key="pr.label" :href="pr.link" target="_blank" rel="noopener noreferrer"
            class="pb-item">
            <p class="pb-label">{{ pr.label }}</p>
            <p class="pb-value">{{ pr.value }}</p>
          </a>
        </div>
      </div>

      <div class="block-section">
        <h3 class="block-title">Najpomembnejši dosežki v trail teku</h3>
        <div class="list">
          <a v-for="achievement in achievements" :key="achievement.title" :href="achievement.link"
            class="achievement-item">
            {{ achievement.title }}
          </a>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import { statsLinks, personalBests, achievements } from '@/data/races'

const isOpen = ref(false)
</script>

<style scoped>
.sidebar {
  padding: 2rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: var(--color-card-bg);
}

.sidebar-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.sidebar-tag {
  margin: 0;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: var(--color-accent);
}

.more-toggle {
  display: none;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  padding: 0.55rem 0.95rem;
  background: var(--color-card-bg-strong);
  color: var(--color-text);
  font: inherit;
  font-weight: 500;
  cursor: pointer;
}

.dropdown-icon {
  display: inline-block;
  margin-left: 0.5rem;
  transition: transform 0.25s ease;
}
.sidebar--open .dropdown-icon {
  transform: rotate(180deg);
}

.more-toggle:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.stats-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2.5rem;
}

.stats-btn-primary {
  padding: 1rem;
  border-radius: var(--radius-md);
  background: var(--color-accent);
  color: var(--color-button-text);
  text-decoration: none;
  font-weight: 700;
  text-align: center;
}

.stats-btn-primary:hover {
  background: var(--color-accent-hover);
}

.block-section {
  margin-top: 3.5rem;
}

.block-title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 900;
}

.list {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.pb-item {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  text-decoration: none;
}

.pb-item:hover {
  border-color: var(--color-accent);
}

.pb-label,
.pb-value {
  margin: 0;
}

.pb-label {
  color: var(--color-muted);
}

.pb-value {
  font-weight: 900;
}

.achievement-item {
  display: block;
  padding: 1.25rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  text-decoration: none;
  color: var(--color-muted);
}

.achievement-item:hover {
  border-color: var(--color-accent);
}

@media (max-width: 959px) {
  .sidebar {
    padding: 1rem;
  }

  .more-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .stats-links {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
    margin-top: 1rem;
  }

  .stats-btn-primary {
    padding: 0.85rem 0.75rem;
    font-size: 0.95rem;
  }

  .stats-extra {
    display: none;
  }

  .sidebar--open .stats-extra {
    display: block;
  }
}

@media (max-width: 520px) {
  .sidebar-head {
    align-items: flex-start;
  }

  .sidebar-tag {
    letter-spacing: 0.22em;
    line-height: 1.5;
  }

  .stats-links {
    grid-template-columns: 1fr;
  }
}
</style>
