<template>
  <section class="about-section section-block">
    <p class="eyebrow">O projektu</p>
    <h2>Dnevnik poti, ki se začnejo tam, kjer se cesta konča.</h2>
    <p>
      Gorski kilometri so prostor za trail teke, alpske ture, razmisleke s poti, opremo,
      treninge in vse majhne trenutke, ki jih v gorah hitro pozabimo, če jih ne zapišemo.
    </p>
  </section>
</template>

<style scoped>
.about-section {
  max-width: 820px;
}

h2 {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.8rem);
}

p:not(.eyebrow) {
  color: var(--color-muted);
  line-height: 1.8;
  font-size: 1.1rem;
}
</style>