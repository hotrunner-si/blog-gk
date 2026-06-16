<template>
  <section class="page-header">
    <div>
      <p class="eyebrow">Blog</p>
      <h1>Avanture</h1>
      <p>Preberi zanimivosti s tekem, treningov in drugih gorskih aktivnosti.</p>
      <ViewSwitcher v-model="activeView" class="view-switcher-desktop" />
    </div>

    <div class="blog-stats">
      <div class="blog-stat-card">
        <span>{{ formatNumber(adventureStats.totalDistance) }}</span>
        <p>blogiranih kilometrov</p>
      </div>

      <div class="blog-stat-card">
        <span>{{ formatNumber(adventureStats.totalElevation) }}</span>
        <p>višincev</p>
      </div>
    </div>

    <ViewSwitcher v-model="activeView" class="view-switcher-mobile" />
  </section>

  <section class="section-block">
    <div v-if="activeView === 'cards'" class="adventure-grid">
      <AdventureCard
        v-for="adventure in publicAdventures"
        :key="adventure.id"
        :adventure="adventure"
      />
    </div>

    <BlogList v-else-if="activeView === 'list'" :adventures="publicAdventures" />
    <BlogCalendar v-else :adventures="publicAdventures" />
  </section>
</template>

<script setup>
import { publicAdventures, adventureStats } from '../data/adventures'
import ViewSwitcher from '../components/ViewSwitcher.vue'
import AdventureCard from '../components/AdventureCard.vue'
import BlogList from '../components/BlogList.vue'
import BlogCalendar from '../components/BlogCalendar.vue'

import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const activeView = computed({
  get: () => route.query.view || 'cards',
  set: (view) => {
    router.replace({
      query: {
        ...route.query,
        view,
      },
    })
  },
})

const formatNumber = (number) =>
  new Intl.NumberFormat('sl-SI').format(number)
</script>

<style scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: var(--space-xl);
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

.blog-stats {
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
  justify-content: flex-end;
}

.blog-stat-card {
  min-width: 150px;
  padding: var(--space-lg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-card-bg-strong);
  backdrop-filter: blur(16px);
  box-shadow: var(--shadow-soft);
}

.blog-stat-card span {
  display: block;
  font-size: 3rem;
  line-height: 1;
  font-family: var(--font-display);
  color: var(--color-accent);
}

.blog-stat-card p {
  margin: 0.45rem 0 0;
  color: var(--color-muted);
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

.view-switcher-mobile {
  display: none;
}


@media (max-width: 700px) {
  .view-switcher-desktop {
    display: none;
  }

  .view-switcher-mobile {
    display: flex;
  }
  .view-switcher-mobile :deep(.view-switcher) {
    margin-top: var(--space-sm);
  }

  .page-header {
    display: block;
  }

  .blog-stats {
    justify-content: flex-start;
    margin-top: var(--space-lg);
  }

  .blog-stat-card {
    flex: 1;
    min-width: 130px;
  }

  .blog-stat-card span {
    font-size: 2.2rem;
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