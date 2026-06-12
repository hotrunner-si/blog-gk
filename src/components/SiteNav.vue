<template>
  <header class="site-nav">
    <div class="site-nav__inner">
      <RouterLink to="/" class="brand">Gorski kilometri</RouterLink>

      <div class="nav-actions">
        <nav aria-label="Glavna navigacija">
          <RouterLink to="/">Domov</RouterLink>
          <RouterLink to="/blog">Blog</RouterLink>
        </nav>

        <ThemeToggle />
      </div>
    </div>
  </header>
</template>

<script setup>
import ThemeToggle from './ThemeToggle.vue'
</script>

<style scoped>
.site-nav {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(18px);
  background: var(--color-nav-bg);
}

.site-nav__inner {
  width: min(var(--container), calc(100% - 2rem));
  margin: 0 auto;
  padding: var(--space-lg) 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 700;
}

.nav-actions,
nav {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

a.router-link-active:not(.brand) {
  color: var(--color-accent);
}

@media (max-width: 640px) {
  .site-nav__inner {
    align-items: flex-start;
    gap: var(--space-md);
    flex-direction: column;
  }

  .nav-actions {
    width: 100%;
    justify-content: space-between;
  }
}
</style>