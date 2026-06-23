<template>
  <HeroSection />
  <AboutSection />
  <AdventureGrid :adventures="featuredAdventures" />
</template>

<script setup>
import HeroSection from '../components/home_components/HeroSection.vue'
import AboutSection from '../components/home_components/AboutSection.vue'
import AdventureGrid from '../components/home_components/AdventureGrid.vue'
import { adventures } from '../data/adventures'

const featuredAdventures = adventures.filter((adventure) => adventure.featured).slice(0, 9)
</script>
