<template>
  <div class="upcoming">
    <div class="upcoming-header">
      <div>
        <p class="upcoming-tag">2026</p>
        <h2 class="upcoming-title">Načrti</h2>
      </div>
      <div class="slider-controls">
        <button @click="scrollLeft" class="slider-btn" aria-label="Prejšnje tekme">&lt;</button>
        <button @click="scrollRight" class="slider-btn" aria-label="Naslednje tekme">&gt;</button>
      </div>
    </div>

    <div ref="slider" class="slider">
      <article v-for="race in upcomingRaces" :key="race.name" class="upcoming-card">
        <img :src="race.image" :alt="race.imageAlt" class="upcoming-image" />
        <p class="upcoming-date">{{ race.date }}</p>
        <a :href="race.link" target="_blank" rel="noopener noreferrer" class="upcoming-name">{{ race.name }}</a>
        <div class="upcoming-stats">
          <div>
            <p class="upcoming-label">Razdalja</p>
            <p class="upcoming-value">{{ race.distance }}</p>
          </div>
          <div>
            <p class="upcoming-label">Višinci</p>
            <p class="upcoming-value">{{ race.elevation }}</p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { upcomingRaces } from '@/data/races'

const slider = ref(null)

function scrollLeft() { slider.value?.scrollBy({ left: -320, behavior: 'smooth' }) }
function scrollRight() { slider.value?.scrollBy({ left: 320, behavior: 'smooth' }) }
</script>

<style scoped>
div::-webkit-scrollbar {
  display: none;
}

.upcoming {
  padding: 2rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: var(--color-card-bg);
}

.upcoming-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.upcoming-tag {
  margin: 0;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: var(--color-accent);
}

.upcoming-title {
  margin: 0.75rem 0 0;
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  font-weight: 900;
}

.slider-controls {
  display: flex;
  gap: 0.75rem;
}

.slider-btn {
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-text);
  cursor: pointer;
}

.slider {
  display: flex;
  gap: 1.25rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 0.5rem;
}

.upcoming-card {
  min-width: 280px;
  padding: 1.25rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: var(--color-card-bg-strong);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.upcoming-card:hover {
  box-shadow: var(--shadow-soft);
}

.upcoming-image {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: var(--radius-md);
  margin-bottom: 1rem;
}

.upcoming-date {
  font-size: 0.75rem;
  text-transform: uppercase;
  color: var(--color-muted);
}

.upcoming-name {
  display: block;
  margin-top: 0.5rem;
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 900;
  text-decoration: none;
  transition: color 0.2s ease;
}

.upcoming-name:hover {
  color: var(--color-accent-hover);
}

.upcoming-stats {
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
}

.upcoming-label {
  margin: 0;
  color: var(--color-muted);
  font-size: 0.85rem;
}

.upcoming-value {
  margin: 0.25rem 0 0;
  font-weight: 800;
}

@media (max-width: 640px) {
  .upcoming {
    padding: 1.25rem;
  }

  .upcoming-header {
    align-items: flex-start;
  }
}
</style>
