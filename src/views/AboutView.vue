<template>
  <section class="about-page">
    <header class="about-hero">
      <div class="about-hero__image-wrap">
        <img :src="heroImage" alt="Gorski tekač v gorah" class="about-hero__image" />
      </div>

      <div class="about-hero__content">
        <p class="eyebrow">O meni</p>
        <p>
          Živjo, sem Nejc. Tukaj najdete nekaj informacij o meni, povezave na druge spletne strani in nekaj kontaktov.
        </p>

        <div class="about-hero__buttons" aria-label="Skoči na vsebino strani O meni">
          <a class="button button--ghost" href="#ukvarjam">Moje delo</a>
          <a class="button button--ghost" href="#kontakti">Kontakti in povezave</a>
        </div>
      </div>
    </header>

    <div class="about-sections">
      <article id="kdo-sem" class="about-card about-card--wide">
        <p class="eyebrow">Kdo sem</p>
        <p>Prihajam iz Županjih Njiv. Star sem 24 let in že od 8 leta treniram gorski tek v Klubu gorskih tekačev Papež. Dolgo časa sem imel trenerje, sedaj pa treniram sam.</p>
        <p>Največkrat tekmujem na kratkih gorkotekaških in trail tekmah, ki trajajo nekje med 20 minut in 3 urami. Te tekme mi tudi najbolj ležijo in sem nanje najbolje pripravljen.</p>
        <p>Zadnje čase pa me vse bolj navdušujejo daljše trail razdalje. Zaenkrat sem se preizkusil že na 76 kilometrih v Švici in kasneje še na 54 kilometrih v Kranjski Gori. </p>
        <p>V Prihodnosti si želim nabrati še več izkušenj iz daljših tekem in morda osvojiti tudi kakšno medaljo.</p>
      </article>

      <article id="ukvarjam" class="about-card">
        <p class="eyebrow">S čim se še ukvarjam</p>
        <p>Poleg teka me veselijo tudi druge oblike gibanja, predvsem kolesarjenje in pohodništvo.</p>
        <p> Ko pa ne športam, pa sem zaposlen s študijem in s programiranjem spletnih strani.</p>
        <p>Če želite pogledati katerega od mojih spletnih projektov, kliknite na gumb.</p>
        <a
            href="https://nejc-ursic.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            class="button"
          >
            Spletna stran
          </a>
      </article>

      <article id="kontakti" class="about-card">
        <p class="eyebrow">Kontakti in povezave</p>
        <h2>Ostani v stiku</h2>
        <p>
          Za vprašanja, sodelovanja ali samo kakšen dober namig za novo turo
          mi lahko pišeš ali me najdeš na spodnjih povezavah.
        </p>

        <div class="contact-list">
          <a href="mailto:ursic.office@gmail.com">Mail: ursic.office@gmail.com</a>
          <a
            href="https://www.strava.com/athletes/65016800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Strava
          </a>
          <a
            href="https://forms.gle/ZBFfLpABTv59K57X8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Naroči se na blog
          </a>
          
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import heroImage from '/images/monaco01.jpg'
</script>

<style scoped>
.about-page {
  padding: var(--space-2xl) 0;
}

.about-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(280px, 0.95fr);
  gap: var(--space-2xl);
  align-items: center;
}

.about-hero__content {
  grid-column: 1;
  grid-row: 1;
}

.about-hero__content h1 {
  margin: 0;
  max-width: 780px;
  font-family: var(--font-display);
  font-size: clamp(3.2rem, 8vw, 7rem);
  line-height: 0.92;
}

.about-hero__content p:not(.eyebrow) {
  max-width: 640px;
  color: var(--color-muted);
  font-size: 1.1rem;
  line-height: 1.65;
}

.about-hero__buttons {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  margin-top: var(--space-lg);
}

.about-hero__buttons .button {
  transition: padding 0.2s ease, font-size 0.2s ease, transform 0.2s ease;
}

.button--ghost {
  border: 1px solid var(--color-border);
  background: var(--color-card-bg);
  color: var(--color-text);
}

.button--ghost:hover {
  background: var(--color-accent-soft);
  color: var(--color-accent);
}

.about-hero__image-wrap {
  grid-column: 2;
  grid-row: 1;
  position: relative;
  min-height: 520px;
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface-soft);
  box-shadow: var(--shadow-soft);
}

.about-hero__image {
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  object-fit: cover;
}

.about-sections {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-lg);
  margin-top: var(--space-2xl);
}

.about-card {
  padding: var(--space-xl);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-card-bg);
  scroll-margin-top: 7rem;
}

.about-card--wide {
  grid-column: 1 / -1;
}

.about-card h2 {
  margin: 0 0 var(--space-md);
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.6rem);
  line-height: 1;
}

.about-card p:not(.eyebrow) {
  color: var(--color-muted);
  line-height: 1.7;
}

.contact-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  margin-top: var(--space-lg);
}

.contact-list a {
  display: inline-flex;
  align-items: center;
  padding: 0.65rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-accent-soft);
  color: var(--color-text);
}

.contact-list a:hover {
  color: var(--color-accent);
}

@media (max-width: 980px) {
  .about-hero {
    position: relative;
    display: block;
    min-height: 610px;
    padding: var(--space-lg) 0;
    border-radius: var(--radius-lg);
    overflow: hidden;
  }

  .about-hero__image-wrap {
    position: absolute;
    inset: 0;
    min-height: 0;
    border-radius: var(--radius-lg);
  }

  .about-hero__image-wrap::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg,
        rgba(16, 20, 17, 0.8),
        rgba(16, 20, 17, 0.42),
        rgba(16, 20, 17, 0.12));
  }

  .about-hero__content {
    position: relative;
    z-index: 1;
    min-height: 610px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: var(--space-xl);
  }

  .about-hero__content p:not(.eyebrow),
  .about-hero__content .eyebrow {
    color: #fffaf0;
  }

  .about-hero__buttons .button {
    padding: 0.75rem 1rem;
    font-size: 0.95rem;
    background: var(--color-card-bg-strong);
    backdrop-filter: blur(16px);
  }

  .about-sections {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .about-page {
    padding-top: var(--space-xl);
  }

  .about-hero {
    min-height: 560px;
  }

  .about-hero__content {
    min-height: 560px;
    padding: var(--space-lg);
  }

  .about-hero__content p:not(.eyebrow) {
    font-size: 1.02rem;
    line-height: 1.55;
  }

  .about-hero__buttons {
    gap: 0.55rem;
  }

  .about-hero__buttons .button {
    padding: 0.62rem 0.82rem;
    font-size: 0.88rem;
  }

  .about-card {
    padding: var(--space-lg);
  }

  .contact-list {
    flex-direction: column;
  }

  .contact-list a {
    justify-content: center;
    text-align: center;
  }
}
</style>
