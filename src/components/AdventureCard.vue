<template>
  <article class="adventure-card">
    <div class="card-topline">
      <span>{{ adventure.type }}</span>
      <span>{{ formattedDate }}</span>
    </div>

    <h3>{{ adventure.title }}</h3>
    <p class="location">{{ adventure.location }}</p>
    <p>{{ adventure.excerpt }}</p>

    <div class="stats-row">
      <span>{{ adventure.distance }} km</span>
      <span>{{ adventure.elevation }} m+</span>
      <span>{{ adventure.difficulty }}</span>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  adventure: { type: Object, required: true },
})

const formattedDate = computed(() =>
  new Intl.DateTimeFormat('sl-SI', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(props.adventure.date))
)
</script>

<style scoped>
.adventure-card {
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-card-bg);
  padding: var(--space-lg);
}

h3 {
  margin: 0.25rem 0;
  font-size: 1.35rem;
}

p {
  color: var(--color-muted);
  line-height: 1.6;
}

.location {
  color: var(--color-green);
}

.card-topline,
.stats-row {
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
  color: var(--color-muted);
  font-size: 0.88rem;
}

.stats-row span {
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
  background: var(--color-accent-soft);
  color: var(--color-text);
}
</style>