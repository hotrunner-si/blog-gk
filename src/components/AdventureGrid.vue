<template>
  <section class="section-block">
    <div class="section-heading">
      <p class="eyebrow">Izbrane poti</p>
      <h2>Izpostavljeno</h2>
    </div>

    <div class="adventure-grid">
      <AdventureCard
        v-for="adventure in featuredAdventures"
        :key="adventure.id"
        :adventure="adventure"
      />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import AdventureCard from './AdventureCard.vue'
import { featuredAdventures } from '@/data/adventures'

</script>

<style scoped>
.section-heading {
  margin-bottom: var(--space-xl);
}

h2 {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.8rem);
}

.adventure-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}

@media (max-width: 900px) {
  .adventure-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .adventure-grid {
    grid-template-columns: 1fr;
  }
}
</style>