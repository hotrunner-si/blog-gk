<template>
  <section class="hero-section">
    <div class="hero-copy">
      <p class="eyebrow">Trail running · gore · pustolovščine</p>
      <h1>Gorski kilometri</h1>
      <p class="hero-text">
        Zgodbe z grebenov, dolgih vzponov, blatnih spustov in tihih dopoldnevov nad meglo.
      </p>

      <div class="hero-actions">
        <RouterLink to="/blog" class="button">Preberi blog</RouterLink>

        <div class="hero-card" aria-label="Povzetek strani">
          <span>{{ adventureCount }}</span>
          <p>zapisi</p>
        </div>
      </div>
    </div>

    <div class="hero-image-wrap">
      <img src="@/assets/giau01.jpg" alt="Gorska pokrajina" class="hero-image" />
      <div class="hero-card-2" aria-label="Povzetek strani">
        <span>{{ adventureCount }}</span>
        <p>zapisi</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { publicAdventures } from '@/data/adventures'

const adventureCount = publicAdventures.length
</script>

<style scoped>
.hero-section {
  min-height: 72vh;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: var(--space-xl);
  padding: var(--space-2xl) 0;
}

.hero-copy h1 {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 10vw, 8rem);
  line-height: 0.92;
}

.hero-text {
  max-width: 620px;
  font-size: 1.3rem;
  color: var(--color-muted);
  line-height: 1.7;
}

.hero-card-2 {
  position: absolute;
  right: var(--space-lg);
  bottom: var(--space-lg);
  padding: var(--space-xl);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-card-bg-strong);
  backdrop-filter: blur(16px);
  box-shadow: var(--shadow-soft);
}

.hero-card-2 span {
  display: block;
  font-size: 5rem;
  font-family: var(--font-display);
  color: var(--color-accent);
}

.hero-card-2 p {
  margin-bottom: 0;
  color: var(--color-muted);
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  flex-wrap: wrap;
}

.hero-image-wrap {
  position: relative;
}

.hero-image {
  width: 100%;
  min-height: 520px;
  object-fit: cover;
  display: block;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-soft);
}

.hero-card {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-card-bg-strong);
  backdrop-filter: blur(16px);
  box-shadow: var(--shadow-soft);
}

.hero-card span {
  display: block;
  font-size: 1.6rem;
  line-height: 1;
  font-family: var(--font-display);
  color: var(--color-accent);
}

.hero-card p {
  margin: 0;
  color: var(--color-muted);
  white-space: nowrap;
}

.hero-card {
  display: none;
}

.hero-card-2 {
  display: block;
}

@media (max-width: 900px) {
  .hero-section {
    position: relative;
    display: block;
    min-height: 620px;
    padding: var(--space-lg) 0;
    border-radius: var(--radius-lg);
    overflow: hidden;
  }

  .hero-image-wrap {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .hero-image {
    width: 100%;
    height: 100%;
    min-height: 0;
    border-radius: var(--radius-lg);
  }

  .hero-image-wrap::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: var(--radius-lg);
    background:
      linear-gradient(90deg,
        rgba(16, 20, 17, 0.78),
        rgba(16, 20, 17, 0.38),
        rgba(16, 20, 17, 0.12));
  }

  .hero-copy {
    position: relative;
    z-index: 1;
    min-height: 620px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: var(--space-xl);
  }

  .hero-copy h1,
  .hero-text,
  .hero-copy .eyebrow {
    color: #fffaf0;
  }

  .hero-text {
    max-width: 560px;
  }

  .hero-card {
    display: inline-flex;
  }

  .hero-card-2 {
    display: none;
  }
}

@media (max-width: 640px) {
  .hero-section {
    min-height: 560px;
  }

  .hero-copy {
    min-height: 560px;
    padding: var(--space-lg);
  }

  .hero-copy h1 {
    font-size: clamp(3rem, 16vw, 5rem);
  }

  .hero-text {
    font-size: 1.05rem;
    line-height: 1.55;
  }

  .hero-actions {
    gap: var(--space-sm);
  }

  .hero-card {
    padding: 0.65rem 0.85rem;
  }

  .hero-card span {
    font-size: 1.35rem;
  }

  .hero-card p {
    font-size: 0.9rem;
  }

  .hero-card {
    display: inline-flex;
  }

  .hero-card-2 {
    display: none;
  }
}
</style>