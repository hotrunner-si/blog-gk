<template>
  <section class="hero-section">
    <div class="hero-copy">
      <p class="eyebrow">Trail running · gore · pustolovščine</p>
      <h1>Gorski kilometri</h1>
      <p class="hero-text">
        Zgodbe z grebenov, dolgih vzponov, blatnih spustov in tihih juter nad meglo.
      </p>
      <RouterLink to="/blog" class="button">Preberi pustolovščine</RouterLink>
    </div>

    <div class="hero-image-wrap">
      <img src="../assets/giau01.jpg" alt="Gorska pokrajina" class="hero-image" />

      <div class="hero-card" aria-label="Povzetek strani">
        <span>9</span>
        <p>zapisov</p>
      </div>
    </div>
  </section>
</template>

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

.hero-card span {
  display: block;
  font-size: 5rem;
  font-family: var(--font-display);
  color: var(--color-accent);
}

.hero-card p {
  margin-bottom: 0;
  color: var(--color-muted);
}

@media (max-width: 900px) {
  .hero-section {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .hero-image {
    min-height: 360px;
  }
}

@media (max-width: 640px) {
  .hero-copy h1 {
    font-size: clamp(3rem, 16vw, 5rem);
  }

  .hero-card {
    position: static;
    margin-top: var(--space-md);
  }
}
</style>