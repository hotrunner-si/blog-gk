<template>
  <div v-if="items.length" class="playground-icons">
    <details>
      <summary>
        <span
          v-for="item in items"
          :key="item.key"
          class="playground-icon"
          :title="item.label"
        >
          <img :src="item.icon" :alt="item.label" />
        </span>
      </summary>

      <div class="playground-details">
        <span v-for="item in items" :key="item.key">
          {{ item.label }}
        </span>
      </div>
    </details>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  playground: {
    type: Array,
    default: () => [],
  },
})

const playgroundOptions = {
  peaks: {
    label: 'Vrhovi',
    icon: '/icons/playground/peaks.png',
  },
  pastures: {
    label: 'Planine',
    icon: '/icons/playground/pastures.png',
  },
  river: {
    label: 'Reka',
    icon: '/icons/playground/river.png',
  },
  lake: {
    label: 'Jezero',
    icon: '/icons/playground/lake.png',
  },
  waterfall: {
    label: 'Slap',
    icon: '/icons/playground/waterfall.png',
  },
  cave: {
    label: 'Jama',
    icon: '/icons/playground/cave.png',
  },
  forest: {
    label: 'Gozd',
    icon: '/icons/playground/forest.png',
  },
  coast: {
    label: 'Obala',
    icon: '/icons/playground/coast.png',
  },
  road: {
    label: 'Cesta',
    icon: '/icons/playground/road.png',
  },
  urban: {
    label: 'Urbano',
    icon: '/icons/playground/urban.png',
  },
  vulcano: {
    label: 'Vulkan',
    icon: '/icons/playground/vulcano.png',
  },
  glacier: {
    label: 'Ledenik',
    icon: '/icons/playground/glacier.png',
  },
  ferrata: {
    label: 'Via Ferrata',
    icon: '/icons/playground/ferrata.png',
  },
  canyon: {
    label: 'Soteska',
    icon: '/icons/playground/canyon.png',
  },
}

const items = computed(() =>
  props.playground
    .map((key) => ({
      key,
      ...playgroundOptions[key],
    }))
    .filter((item) => item.label && item.icon)
)
</script>

<style scoped>
.playground-icons details {
  position: relative;
}

.playground-icons summary {
  display: flex;
  gap: 0.2rem;
  flex-wrap: wrap;
  list-style: none;
  cursor: pointer;
}

.playground-icons summary::-webkit-details-marker {
  display: none;
}

.playground-icon {
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background: rgba(255, 250, 240, 0.9);
  display: grid;
  place-items: center;
}

.playground-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.playground-details {
  margin-top: 0.45rem;
  display: flex;
  gap: 0.35rem;
  flex-wrap: wrap;
}

.playground-details span {
  padding: 0.3rem 0.55rem;
  border-radius: 999px;
  background: var(--color-accent-soft);
  color: var(--color-text);
  font-size: 0.78rem;
}
</style>