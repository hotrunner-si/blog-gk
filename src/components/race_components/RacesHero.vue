<template>
  <div class="hero">
    <img src="/images/pordoi02.jpg" alt="trail running" class="hero-image" />
    <div class="hero-overlay" />
    <div class="hero-content">
      <p class="hero-tag">Tekaški projekti</p>
      <h1 class="hero-title">Trail tek</h1>
    </div>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  height: 560px;
  border-radius: var(--radius-md);
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgb(0 0 0 / 0.6), rgb(0 0 0 / 0.2), rgb(0 0 0 / 0.1));
}

.hero-content {
  position: absolute;
  bottom: 3rem;
  left: 3rem;
}

.hero-tag {
  margin: 0 0 1rem;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  color: var(--color-accent);
}

.hero-title {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(3rem, 7vw, 3.75rem);
  font-weight: 900;
  color: white;
}

@media (max-width: 640px) {
  .hero {
    height: 420px;
  }

  .hero-content {
    left: 1.5rem;
    right: 1.5rem;
    bottom: 2rem;
  }
}
</style>
