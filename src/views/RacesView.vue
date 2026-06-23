<script setup>
import RacesHero from '@/components/race_components/RacesHero.vue'
import RacesUpcoming from '@/components/race_components/RacesUpcoming.vue'
import RacesStats from '@/components/race_components/RacesStats.vue'
import RacesPast from '@/components/race_components/RacesPast.vue'
</script>

<template>
  <main class="races-page">
    <section class="top-grid">
      <RacesHero class="races-hero-block" />
      <RacesStats class="races-stats-block" />
      <RacesUpcoming class="races-upcoming-block" />
    </section>

    <RacesPast />
  </main>
</template>

<style scoped>
.races-page {
  padding: 2.5rem 0;
}

.top-grid {
  display: grid;
  gap: 1.5rem;
}

.races-hero-block,
.races-stats-block,
.races-upcoming-block {
  min-width: 0;
}

@media (min-width: 960px) {
  .top-grid {
    grid-template-columns: minmax(0, 2fr) minmax(300px, 1fr);
    align-items: start;
  }

  .races-hero-block {
    grid-column: 1;
  }

  .races-stats-block {
    grid-column: 2;
    grid-row: 1 / span 2;
    position: sticky;
    top: 6rem;
  }

  .races-upcoming-block {
    grid-column: 1;
  }
}
</style>
