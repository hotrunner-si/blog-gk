<template>
  <div class="calendar-view">
    <article
      v-for="adventure in sortedAdventures"
      :key="adventure.id"
      class="calendar-item"
    >
      <div class="calendar-date">
        <strong>{{ day(adventure.date) }}</strong>
        <span>{{ month(adventure.date) }}</span>
      </div>

      <div>
        <p class="eyebrow">{{ adventure.type }} · {{ adventure.location }}</p>
        <h3>{{ adventure.title }}</h3>
        <p>{{ adventure.distance }} km · {{ adventure.elevation }} m+ · {{ adventure.difficulty }}</p>
      </div>
    </article>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  adventures: { type: Array, required: true },
})

const sortedAdventures = computed(() =>
  [...props.adventures].sort((a, b) => new Date(a.date) - new Date(b.date))
)

const day = (date) => new Date(date).getDate()

const month = (date) =>
  new Intl.DateTimeFormat('sl-SI', { month: 'short' }).format(new Date(date))
</script>

<style scoped>
.calendar-view {
  display: grid;
  gap: var(--space-md);
}

.calendar-item {
  display: grid;
  grid-template-columns: 92px 1fr;
  gap: var(--space-lg);
  align-items: start;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-card-bg);
  padding: var(--space-lg);
}

.calendar-date {
  aspect-ratio: 1;
  border-radius: var(--radius-sm);
  background: var(--color-accent-soft);
  display: grid;
  place-items: center;
  text-align: center;
}

.calendar-date strong {
  display: block;
  font-size: 2rem;
  font-family: var(--font-display);
  color: var(--color-accent);
}

.calendar-date span {
  display: block;
  color: var(--color-muted);
  text-transform: uppercase;
}

h3 {
  margin: 0.25rem 0;
  font-size: 1.35rem;
}

p {
  color: var(--color-muted);
  line-height: 1.6;
}

@media (max-width: 640px) {
  .calendar-item {
    grid-template-columns: 1fr;
  }
}
</style>