<template>
  <footer class="site-footer">
    <p>© {{ new Date().getFullYear() }} Gorski kilometri — dnevnik trail teka, in gorskih avantur.</p>
    <a href="https://nejc-ursic.netlify.app" target="_blank" rel="noopener" class="external-link">
        Nejc Uršič
    </a>
  </footer>
</template>

<style scoped>
.site-footer {
  width: min(var(--container), calc(100% - 2rem));
  margin: 0 auto;
  padding: var(--space-xl) 0;
  color: var(--color-muted);
  border-top: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
}

p {
  margin: 0;
}
</style>