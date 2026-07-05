<template>
  <Teleport to="body">
    <div v-if="image" class="lightbox" @click.self="$emit('close')">
      <button class="lightbox-close" type="button" @click="$emit('close')">
        ×
      </button>

      <figure class="lightbox-content">
        <img :src="image.src" :alt="image.alt || ''" />

        <figcaption v-if="image.caption?.length" class="lightbox-caption">
          <RichText :content="image.caption" />
        </figcaption>
      </figure>
    </div>
  </Teleport>
</template>

<script setup>
import RichText from './RichText.vue'

defineProps({
  image: {
    type: Object,
    default: null,
  },
})

defineEmits(['close'])
</script>

<style scoped>
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.86);
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-content {
  width: min(1100px, 100%);
  margin: 0;
}

.lightbox-content img {
  width: 100%;
  max-height: 78vh;
  object-fit: contain;
  border-radius: var(--radius-md);
}

.lightbox-caption {
  max-width: 760px;
  margin: 1rem auto 0;
  color: white;
  font-size: 1rem;
  line-height: 1.7;
  text-align: center;
}

.lightbox-close {
  position: fixed;
  top: 1.2rem;
  right: 1.5rem;
  border: 0;
  background: transparent;
  color: white;
  font-size: 2.5rem;
  line-height: 1;
  cursor: pointer;
}

@media (max-width: 700px) {
  .lightbox {
    padding: 1rem;
  }

  .lightbox-caption {
    font-size: 0.95rem;
  }
}
</style>