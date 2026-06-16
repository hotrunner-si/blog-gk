<template>
  <section class="info-layout">

    <div class="info-header">
      <p class="eyebrow">Povezave</p>
      <h1>Info</h1>

      <p>
        Gorski kilometri so prostor za zgodbe s tekem, treningov,
        grebenov in drugih pustolovščin.
      </p>

      <a 
        href="https://forms.gle/ZBFfLpABTv59K57X8"
        target="_blank"
        rel="noopener noreferrer"
        class="button"
        >
        Naroči se na obvestila
      </a>
    </div>

    <div class="info-grid">
      <article class="info-card">
        <h2>Kontakti</h2>

        <div class="contact-list">
          <a href="mailto:ursic.office@gmail.com">
            Mail: ursic.office@gmail.com
          </a>

          <a
            href="https://www.strava.com/athletes/65016800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Strava
          </a>

          <a
            href="https://nejc-ursic.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spletna stran
          </a>
        </div>
      </article>
    </div>

  </section>
</template>


<style scoped>
.info-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  align-items: start;
  padding: var(--space-2xl) 0;
}

.info-header {
  align-items: flex-end;
  gap: var(--space-xl);
  padding: var(--space-2xl) 0 var(--space-xl);
}

.info-header h1 {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 10vw, 8rem);
  line-height: 0.92;
}

.info-header p:not(.eyebrow) {
  max-width: 680px;
  color: var(--color-muted);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: var(--space-lg)
}

.info-grid {
  display: block;
}

.info-card {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-card-bg);
  padding: var(--space-xl);
}

.info-card h2 {
  margin: 0 0 var(--space-lg);
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.8rem);
}

.contact-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.contact-list a {
  display: inline-flex;
  align-items: center;
  padding: 0.65rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-accent-soft);
  color: var(--color-text);
  text-decoration: none;
}

.contact-list a:hover {
  color: var(--color-accent);
}

@media (max-width: 660px) {
  .info-layout {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }

  .info-header {
    padding-bottom: 0;
  }

  .info-card {
    padding: var(--space-lg);
  }

  .contact-list {
    flex-direction: column;
    align-items: stretch;
  }

  .contact-list a {
    justify-content: center;
    text-align: center;
  }
}

</style>