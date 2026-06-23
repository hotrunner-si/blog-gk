<template>
  <section class="completed">
    <div class="completed-header">
      <p class="completed-tag">Rezultati</p>
      <h2 class="completed-title">Zaključene dirke</h2>
    </div>

    <div class="completed-list">
      <article
        v-for="race in completedRaces"
        :key="race.name"
        class="completed-card"
        :class="{ 'completed-card--open': openRace === race.name }"
      >
        <div class="completed-layout">
          <button
            class="completed-image-button"
            type="button"
            :aria-label="`${openRace === race.name ? 'Zapri' : 'Odpri'} ${race.name}`"
            :aria-expanded="openRace === race.name"
            @click="toggleRace(race.name)"
          >
            <img :src="race.image" :alt="race.imageAlt" class="completed-image" />
          </button>

          <div class="completed-content">
            <button
              class="completed-summary"
              type="button"
              :aria-expanded="openRace === race.name"
              @click="toggleRace(race.name)"
            >
              <span class="completed-quick">
                <span class="completed-year">{{ race.year }}</span>
                <span class="completed-name">{{ race.name }}</span>
                <span class="completed-stat-vip">{{ race.distance }}, {{ race.elevation }}</span>
              </span>

              <span class="completed-more">
                {{ openRace === race.name ? 'Manj' : 'Več' }}

                <span
                  class="dropdown-icon"
                  :class="{ open: openRace === race.name }"
                >
                  ▼
                </span>
              </span>
            </button>

            <div class="completed-details" :aria-hidden="openRace !== race.name">
              <div class="completed-detail-inner">
                <div class="completed-stats">
                  <div>
                    <p class="completed-label">Čas</p>
                    <p class="completed-value">{{ race.time }}</p>
                  </div>
                  <div>
                    <p class="completed-label">Uvrstitev</p>
                    <p class="completed-value">{{race.rank || '—' }}</p>
                  </div>
                </div>

                <p class="completed-note">{{ race.note }}</p>

                <div class="completed-actions">
                  <a
                    v-if="race.stravaLink"
                    :href="race.stravaLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="race-button"
                  >
                    Strava
                  </a>
                  <a
                    v-if="race.blogLink"
                    :href="race.blogLink"
                    class="race-button"
                  >
                    Objava v blogu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { completedRaces } from '@/data/races'

const openRace = ref(null)

function toggleRace(name) {
  openRace.value = openRace.value === name ? null : name
}
</script>

<style scoped>
.completed {
  margin-top: 6rem;
}

.completed-header {
  margin-bottom: 2rem;
}

.completed-tag {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: var(--color-accent-hover);
}

.completed-title {
  margin-top: 0.75rem;
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 5vw, 3rem);
  font-weight: 900;
}

.completed-list {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.completed-card {
  overflow: hidden;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: var(--color-card-bg);
  box-shadow: var(--shadow-soft);
  transition:
    border-color 0.35s ease,
    box-shadow 0.35s ease,
    transform 0.35s ease;
}

.completed-card--open {
  border-color: color-mix(in srgb, var(--color-accent) 42%, var(--color-border));
  box-shadow: var(--shadow-medium);
}

.completed-layout {
  display: grid;
  grid-template-columns: minmax(190px, 34%) minmax(0, 1fr);
  gap: 1rem;
  align-items: stretch;
  padding: 0.65rem;
  transition:
    grid-template-columns 0.55s ease,
    gap 0.55s ease,
    padding 0.55s ease;
}

.completed-card--open .completed-layout {
  grid-template-columns: minmax(260px, 46%) minmax(0, 1fr);
  padding: 1rem;
}

.completed-image-button {
  width: 100%;
  height: 86px;
  padding: 0;
  overflow: hidden;
  border: 0;
  border-radius: calc(var(--radius-md) - 4px);
  background: transparent;
  cursor: pointer;
  transition:
    height 0.6s ease,
    border-radius 0.45s ease,
    transform 0.45s ease;
}

.completed-card--open .completed-image-button {
  height: clamp(280px, 34vw, 440px);
  border-radius: var(--radius-md);
}

.completed-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}

.completed-image-button:hover .completed-image,
.completed-card--open .completed-image {
  transform: scale(1.035);
}

.completed-content {
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: justify-content 0.45s ease;
}

.completed-card--open .completed-content {
  justify-content: flex-start;
}

.completed-summary {
  width: 100%;
  min-height: 86px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 1rem;
  align-items: center;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;
  transition:
    min-height 0.55s ease,
    gap 0.45s ease;
}

.completed-card--open .completed-summary {
  min-height: auto;
  align-items: start;
}

.completed-quick {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  transform: translateY(0);
  transition:
    gap 0.5s ease,
    transform 0.5s ease;
}

.completed-card--open .completed-quick {
  gap: 0.55rem;
  transform: translateY(0.25rem);
}

.completed-year {
  margin: 0;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-muted);
  transition:
    font-size 0.5s ease,
    color 0.5s ease;
}

.completed-card--open .completed-year {
  font-size: 0.9rem;
}

.completed-name {
  display: block;
  font-family: var(--font-display);
  font-size: clamp(1.35rem, 3vw, 2rem);
  font-weight: 900;
  line-height: 1;
  transition:
    font-size 0.5s ease,
    line-height 0.5s ease;
}

.completed-card--open .completed-name {
  font-size: clamp(2rem, 4vw, 3.3rem);
  line-height: 0.95;
}

.completed-stat-vip {
  color: var(--color-accent);
  font-weight: 900;
  transition: font-size 0.5s ease;
}

.completed-card--open .completed-stat-vip {
  font-size: 1.12rem;
}

.completed-more {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .45rem;

  border-radius: 999px;
  padding: .65rem 1rem;
  border: 1px solid var(--color-border);
  background: var(--color-accent-soft);
  color: var(--color-text);
  font-weight: 400;
  white-space: nowrap;

  transition:
    opacity .25s ease,
    transform .25s ease,
    border-color .25s ease,
    color .25s ease;
}
.completed-more {
  opacity: 0;
  transform: translateX(8px);
  pointer-events: none;
}

.completed-card:hover .completed-more,
.completed-card--open .completed-more {
  opacity: 1;
  transform: translateX(0);
  pointer-events: auto;
}

.dropdown-icon {
  display: inline-block;
  transition: transform 0.3s ease;
}

.dropdown-icon.open {
  transform: rotate(180deg);
}


.race-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: .65rem 1rem;
  text-decoration: none;
}

.completed-summary:hover .completed-more,
.race-button:hover {
  color: var(--color-accent);
}

.completed-details {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transform: translateY(-0.5rem);
  transition:
    max-height 0.65s ease,
    opacity 0.35s ease,
    transform 0.55s ease;
}

.completed-card--open .completed-details {
  max-height: 520px;
  opacity: 1;
  transform: translateY(0);
}

.completed-detail-inner {
  padding-top: 1.4rem;
}

.completed-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.completed-stats > div {
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface-soft);
  transform: translateY(-0.25rem);
  transition: transform 0.45s ease;
}

.completed-card--open .completed-stats > div {
  transform: translateY(0);
}

.completed-label {
  margin: 0;
  color: var(--color-muted);
  font-size: 0.85rem;
}

.completed-value {
  margin: 0.25rem 0 0;
  font-weight: 900;
}

.completed-note {
  margin-top: 1.5rem;
  color: var(--color-muted);
  line-height: 1.75rem;
}

.completed-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.race-button {
  background: var(--color-accent);
  color: var(--color-button-text);
  border-color: transparent;
}

.race-button:hover {
  background: var(--color-accent-hover);
  color: var(--color-button-text);
}

.race-button--ghost {
  background: var(--color-card-bg-strong);
  color: var(--color-text);
  border-color: var(--color-border);
}

.race-button--ghost:hover {
  background: var(--color-accent-soft);
  color: var(--color-accent);
}

@media (max-width: 760px) {
  .completed-layout,
  .completed-card--open .completed-layout {
    grid-template-columns: 38% minmax(0, 1fr);
    gap: 0.75rem;
  }

  .completed-card--open .completed-image-button {
    height: clamp(280px, 52vw, 380px);
  }

  .completed-summary {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .completed-more {
    justify-self: start;
  }

  .completed-card--open .completed-details {
    max-height: 760px;
  }

  .completed-stats {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.65rem;
  }

  .completed-stats > div {
    padding: 0.8rem;
  }
}

@media (max-width: 520px) {
  .completed {
    margin-top: 4rem;
  }

  .completed-layout,
  .completed-card--open .completed-layout {
    grid-template-columns: 1fr;
  }

  .completed-image-button {
    height: 76px;
  }

  .completed-card--open .completed-image-button {
    height: clamp(240px, 70vw, 360px);
  }

  .completed-summary,
  .completed-card--open .completed-summary {
    min-height: 0;
  }

  .completed-stats {
    grid-template-columns: 1fr;
  }

  .completed-card--open .completed-details {
    max-height: 980px;
  }
}

@media (hover: none) {
  .completed-more {
    opacity: 1;
    transform: none;
    pointer-events: auto;
  }
}
</style>
