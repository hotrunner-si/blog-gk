<template>
  <div class="site-shell">
    <SiteNav />
    <main>
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import SiteNav from './components/SiteNav.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>
