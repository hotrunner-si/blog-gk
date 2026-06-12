<template>
  <footer class="site-footer">
    <p>© {{ new Date().getFullYear() }} Gorski kilometri — dnevnik trail teka, gora in pustolovščin.</p>
  </footer>
</template>

<style scoped>
.site-footer {
  width: min(var(--container), calc(100% - 2rem));
  margin: 0 auto;
  padding: var(--space-xl) 0;
  color: var(--color-muted);
  border-top: 1px solid var(--color-border);
}

p {
  margin: 0;
}
</style>