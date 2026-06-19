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
        <PlaygroundIcons :playground="adventure.playground" />
      </div>
    </header>

    <img :src="adventure.image" :alt="adventure.title" class="hero-image" />

    <section class="post-content">
      <template v-if="adventure.blocks?.length">
        <template v-for="(block, index) in adventure.blocks" :key="index">
          <p v-if="block.type === 'paragraph'" class="text-block">
            {{ block.text }}
          </p>

          <h2 v-else-if="block.type === 'heading'" class="content-heading">
            {{ block.text }}
          </h2>

          <figure
            v-else-if="block.type === 'image'"
            class="image-block"
            :class="`image-block--${block.layout || 'normal'}`"
          >
            <template
              v-if="
                block.layout === 'caption-right' ||
                block.layout === 'caption-left'
              "
            >
              <img :src="block.src" :alt="block.alt || adventure.title" />

              <figcaption v-if="block.caption">
                {{ block.caption }}
              </figcaption>
            </template>

            <template v-else>
              <img :src="block.src" :alt="block.alt || adventure.title" />

              <figcaption v-if="block.caption">
                {{ block.caption }}
              </figcaption>
            </template>
          </figure>

          <blockquote v-else-if="block.type === 'quote'" class="quote-block">
            {{ block.text }}
          </blockquote>

          <div v-else-if="block.type === 'gallery'" class="gallery">
            <img
              v-for="image in block.images"
              :key="image"
              :src="image"
              :alt="adventure.title"
            />
          </div>

          <div v-else-if="block.type === 'stats'" class="stats-block">
            <div v-for="item in block.items" :key="item.label">
              <strong>{{ item.value }}</strong>
              <span>{{ item.label }}</span>
            </div>
          </div>
        </template>
      </template>

      <template v-else>
        <p
          v-for="paragraph in adventure.content"
          :key="paragraph"
          class="text-block"
        >
          {{ paragraph }}
        </p>
      </template>
    </section>

    <section v-if="adventure.stravaUrl" class="external-card">
      <h2>Strava aktivnost</h2>
      <a :href="adventure.stravaUrl" target="_blank" rel="noopener">
        Odpri aktivnost na Stravi →
      </a>
    </section>

    <section v-if="adventure.gpxUrl" class="external-card map-card">
      <h2>Trasa</h2>

      <AdventureMap
        :gpx-url="adventure.gpxUrl"
        :markers="adventure.mapMarkers || []"
      />

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
import PlaygroundIcons from '../components/PlaygroundIcons.vue'
import AdventureMap from '../components/AdventureMap.vue'

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
  font-size: clamp(3rem, 8vw, 5rem);
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
  max-width: 860px;
  margin: var(--space-2xl) auto;
}

.text-block {
  max-width: 720px;
  margin: 0 auto var(--space-xl);
  font-size: 1.15rem;
  line-height: 1.85;
}

.content-heading {
  max-width: 720px;
  margin: var(--space-2xl) auto var(--space-lg);
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1;
}

.image-block {
  margin: var(--space-2xl) auto;
}

.image-block img {
  width: 100%;
  max-height: 620px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
}

.image-block figcaption {
  margin-top: var(--space-sm);
  color: var(--color-muted);
  font-size: 0.95rem;
  text-align: center;
}

.image-block--normal {
  max-width: 860px;
}

.image-block--wide {
  max-width: 1100px;
}

.image-block--full {
  width: 100vw;
  max-width: none;
  margin-left: 50%;
  transform: translateX(-50%);
}

.image-block--full img {
  border-radius: 0;
}

.image-block--caption-right,
.image-block--caption-left {
  display: grid;
  gap: 3rem;
  align-items: center;
  margin: var(--space-2xl) auto;
  max-width: 1000px;
}

.image-block--caption-right {
  grid-template-columns: 2fr 1fr;
}

.image-block--caption-left {
  grid-template-columns: 1fr 2fr;
}

.image-block--caption-left img {
  order: 2;
}

.image-block--caption-left figcaption {
  order: 1;
}

.image-block--caption-right figcaption,
.image-block--caption-left figcaption {
  margin: 0;
  font-size: 1rem;
  line-height: 1.8;
  color: var(--color-muted);
  text-align: left;
}

@media (max-width: 700px) {
  .image-block--caption-right,
  .image-block--caption-left {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }

  .image-block--caption-left img,
  .image-block--caption-left figcaption {
    order: initial;
  }

  .image-block--caption-right figcaption,
  .image-block--caption-left figcaption {
    text-align: center;
  }
}

.quote-block {
  max-width: 720px;
  margin: var(--space-2xl) auto;
  padding-left: var(--space-lg);
  border-left: 4px solid var(--color-accent);
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 3rem);
  line-height: 1.15;
}

.stats-block {
  max-width: 720px;
  margin: var(--space-2xl) auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
}

.stats-block div {
  padding: var(--space-lg);
  border-radius: var(--radius-md);
  background: var(--color-accent-soft);
}

.stats-block strong {
  display: block;
  font-size: 1.8rem;
}

.stats-block span {
  color: var(--color-muted);
}

.gallery {
  margin: var(--space-2xl) 0;
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

@media (max-width: 770px) {
  .gallery,
  .stats-block {
    grid-template-columns: 1fr 1fr;
  }

  .gallery img {
    height: 220px;
  }
}

@media (max-width: 600px) {
  .gallery,
  .stats-block {
    grid-template-columns: 1fr;
  }

  .gallery img {
    height: 220px;
  }
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

.map-card {
  max-width: 1100px;
  margin-inline: auto;
}

.map-card a {
  display: inline-block;
  margin-top: var(--space-md);
}

</style>