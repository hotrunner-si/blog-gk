<template>
  <div class="blog-timeline">
    <article v-for="adventure in sortedAdventures" :key="adventure.id" class="timeline-item">
      <div class="calendar-date">
        <strong>{{ day(adventure.date) }}</strong>
        <span>{{ month(adventure.date) }}</span>
      </div>

      <div class="timeline-content">
        <p class="eyebrow">
          {{ adventure.type }} · {{ adventure.location }}
        </p>

        <h3>{{ adventure.title }}</h3>
      </div>
      <div class="list-stats">
        <span>{{ adventure.distance }} km</span>
        <span>{{ adventure.elevation }} m+</span>
        <span>{{ adventure.difficulty }}</span>

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

const formatDate = (date) =>
  new Intl.DateTimeFormat('sl-SI').format(new Date(date))
</script>

<style scoped>
.blog-timeline {
  display: grid;
  gap: var(--space-md);
}

.timeline-item {
  display: grid;
  grid-template-columns: 92px 1fr auto;
  gap: var(--space-lg);
  align-items: center;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-card-bg);
  padding: var(--space-lg);
}

.calendar-date {
  width: 92px;
  height: 92px;
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
  line-height: 1;
}

.calendar-date span {
  display: block;
  margin-top: 0.25rem;
  color: var(--color-muted);
  text-transform: uppercase;
  font-size: 0.8rem;
}

.timeline-content {
  min-width: 0;
}

.timeline-content h3 {
  margin: 0.25rem 0 0;
  font-size: 1.35rem;
  line-height: 1.2;
}

.timeline-content p {
  color: var(--color-muted);
  line-height: 1.5;
}

.list-stats {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: var(--space-sm);
  flex-wrap: wrap;
  min-width: 260px;
  max-width: 320px;
}

.list-stats span {
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
  background: var(--color-accent-soft);
  color: var(--color-text);
  font-size: 0.88rem;
  white-space: nowrap;
}

/* srednji zasloni */
@media (max-width: 700px) {
  .timeline-item {
    grid-template-columns: 78px 1fr;
    gap: var(--space-md);
    align-items: center;
    padding: var(--space-md);
  }

  .calendar-date {
    width: 78px;
    height: 78px;
  }

  .calendar-date strong {
    font-size: 1.65rem;
  }

  .calendar-date span {
    font-size: 0.72rem;
  }

  .timeline-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.45rem;
  }

  .timeline-content h3 {
    font-size: 1.1rem;
  }

  .timeline-content p {
    margin-bottom: 0;
    font-size: 0.72rem;
    line-height: 1.25;
  }

  .list-stats {
    grid-column: 2;
    min-width: 0;
    max-width: none;
    justify-content: flex-start;
    gap: 0.4rem;
    margin-top: -0.1rem;
  }

  .list-stats span {
    padding: 0.25rem 0.5rem;
    font-size: 0.76rem;
  }
}

/* telefon */
@media (max-width: 460px) {
  .blog-timeline {
    gap: var(--space-sm);
  }

  .timeline-item {
    grid-template-columns: 58px 1fr;
    gap: var(--space-sm);
    padding: var(--space-sm);
    border-radius: var(--radius-sm);
  }

  .calendar-date {
    width: 58px;
    height: 58px;
  }

  .calendar-date strong {
    font-size: 1.3rem;
  }

  .calendar-date span {
    margin-top: 0.15rem;
    font-size: 0.62rem;
  }

  .timeline-content h3 {
    font-size: 0.9rem;
    line-height: 1.15;
  }

  .timeline-content p {
    font-size: 0.52rem;
    line-height: 1.2;
  }

  .list-stats {
    gap: 0.2rem;
  }

  .list-stats span {
    padding: 0.25rem 0.42rem;
    font-size: 0.58rem;
  }
}
</style>