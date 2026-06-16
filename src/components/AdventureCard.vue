<template>
  <RouterLink :to="`/blog/${adventure.slug}`" class="adventure-card">
    
      <div class="card-topline">
        <span>{{ adventure.type }}</span>
        <span>{{ formattedDate }}</span>
      </div>

      <div class="card-image-wrap">
        <img :src="adventure.image" :alt="adventure.title" class="card-image" />

        <div class="image-overlay">
          <p class="location">{{ adventure.location }}</p>

          <div class="stats-row">
            <span>{{ adventure.distance }} km</span>
            <span>{{ adventure.elevation }} m+</span>
            <PlaygroundIcons :playground="adventure.playground" />
          </div>
        </div>
      </div>

      <div class="card-content">
        <h3>{{ adventure.title }}</h3>
        <p>{{ adventure.excerpt }}</p>
      </div>
  </RouterLink>
</template>

<script setup>
import { computed } from 'vue'
import PlaygroundIcons from './PlaygroundIcons.vue'

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
  min-height: 360px;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-card-bg);
  padding: var(--space-md);
  overflow: hidden;
  color: inherit;
  text-decoration: none;
}

.card-topline {
  display: flex;
  justify-content: space-between;
  gap: var(--space-sm);
  flex-wrap: wrap;
  color: var(--color-muted);
  font-size: 0.88rem;
}

.card-image-wrap {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-sm);
  min-height: 220px;
}

.card-image {
  width: 100%;
  height: 220px;
  display: block;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  inset: 0;
  padding: var(--space-sm);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.image-overlay::before {
  content: "";
  position: absolute;
  inset: -3rem -1rem -1rem;
  z-index: -1;
  background: linear-gradient(
    to top,
    rgba(16, 20, 17, 0.78),
    rgba(16, 20, 17, 0)
  );
}

.location {
  margin: 0;
  color: #ecc370;
  font-weight: 600;
}

.stats-row {
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
  font-size: 0.82rem;
}

.stats-row span {
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
  background: rgba(255, 250, 240, 0.9);
  color: #1f241f;
}

.card-content h3 {
  margin: 0.25rem 0;
  font-size: 1.35rem;
}

.card-content p {
  color: var(--color-muted);
  line-height: 1.6;
}
</style>