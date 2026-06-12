<template>
  <section class="page-header">
    <p class="eyebrow">Blog</p>
    <h1>Avanture</h1>
    <p>Preberi zanimivosti s tekem, treningov in drugih gorskih aktivnosti.</p>
    <ViewSwitcher v-model="activeView" />
  </section>

  <section class="section-block">
    <div v-if="activeView === 'cards'" class="adventure-grid">
      <AdventureCard
        v-for="adventure in adventures"
        :key="adventure.id"
        :adventure="adventure"
      />
    </div>

    <BlogList v-else-if="activeView === 'list'" :adventures="adventures" />
    <BlogCalendar v-else :adventures="adventures" />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { adventures } from '../data/adventures'
import ViewSwitcher from '../components/ViewSwitcher.vue'
import AdventureCard from '../components/AdventureCard.vue'
import BlogList from '../components/BlogList.vue'
import BlogCalendar from '../components/BlogCalendar.vue'

const activeView = ref('cards')
</script>

<style scoped>
.page-header {
  padding: var(--space-2xl) 0 var(--space-xl);
}

.page-header h1 {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 10vw, 8rem);
  line-height: 0.92;
}

.page-header p:not(.eyebrow) {
  color: var(--color-muted);
  font-size: 1.1rem;
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
  .page-header h1 {
    font-size: clamp(3rem, 16vw, 5rem);
  }

  .adventure-grid {
    grid-template-columns: 1fr;
  }
}
</style>