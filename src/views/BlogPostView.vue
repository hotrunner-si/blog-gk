<template>
  <article v-if="adventure" class="blog-post">
    <RouterLink to="/blog" class="back-link">← Nazaj na blog</RouterLink>

    <header class="post-header">
      <p class="eyebrow">{{ adventure.type }} · {{ adventure.location }}</p>
      <h1>{{ adventure.title }}</h1>

      <div class="post-meta">
        <span>{{ formattedDate }}</span>
        <span>{{ adventure.distance }} km</span>
        <span>{{ adventure.elevation }} m+</span>
        <span>{{ adventure.difficulty }}</span>
      </div>
    </header>

    <img :src="adventure.image" :alt="adventure.title" class="hero-image" />

    <section class="post-content" v-html="adventure.content" />

    <section v-if="adventure.gallery?.length" class="gallery">
      <img
        v-for="image in adventure.gallery"
        :key="image"
        :src="image"
        :alt="adventure.title"
      />
    </section>

    <section v-if="adventure.stravaUrl" class="external-card">
      <h2>Strava aktivnost</h2>
      <a :href="adventure.stravaUrl" target="_blank" rel="noopener">
        Odpri aktivnost na Stravi →
      </a>
    </section>

    <section v-if="adventure.gpxUrl" class="external-card">
      <h2>GPX pot</h2>
      <p>Zemljevid lahko tukaj kasneje povežeš z GPX datoteko.</p>
      <a :href="adventure.gpxUrl" download>Prenesi GPX</a>
    </section>
  </article>

  <section v-else class="not-found">
    <h1>Objava ne obstaja</h1>
    <RouterLink to="/blog">Nazaj na blog</RouterLink>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { adventures } from '../data/adventures'

const props = defineProps({
  slug: { type: String, required: true },
})

const adventure = computed(() =>
  adventures.find((item) => item.slug === props.slug)
)

const formattedDate = computed(() => {
  if (!adventure.value) return ''

  return new Intl.DateTimeFormat('sl-SI', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(adventure.value.date))
})
</script>

<style scoped>
.blog-post {
  padding: var(--space-2xl) 0;
}

.back-link {
  display: inline-block;
  margin-bottom: var(--space-xl);
  color: var(--color-muted);
}

.post-header {
  max-width: 820px;
  margin-bottom: var(--space-xl);
}

.post-header h1 {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 7rem);
  line-height: 0.95;
}

.post-meta {
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
  margin-top: var(--space-lg);
}

.post-meta span {
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  background: var(--color-accent-soft);
}

.hero-image {
  width: 100%;
  max-height: 620px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
}

.post-content {
  max-width: 760px;
  margin: var(--space-2xl) auto;
  font-size: 1.15rem;
  line-height: 1.8;
}

.post-content p {
  margin-bottom: var(--space-lg);
}

.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
}

.gallery img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: var(--radius-md);
}

.external-card {
  margin-top: var(--space-xl);
  padding: var(--space-lg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-card-bg);
}

.external-card h2 {
  margin-top: 0;
}

.external-card a {
  color: var(--color-accent);
  font-weight: 700;
}

.not-found {
  padding: var(--space-2xl) 0;
}

@media (max-width: 700px) {
  .gallery {
    grid-template-columns: 1fr;
  }

  .gallery img {
    height: 220px;
  }
}
</style>