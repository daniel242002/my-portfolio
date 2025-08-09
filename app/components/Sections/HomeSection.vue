<template>
  <section
    class="text-[var(--text-color-light)] dark:text-[var(--text-color-dark)] py-8 md:py-12"
  >
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      <!-- Texto -->
      <div>
        <h1 class="text-4xl md:text-5xl font-bold">
           {{ t('home.greeting') }} <span class="text-[var(--secondary-color-light)] dark:text-[var(--secondary-color-dark)]">Daniel Arcos.</span>
        </h1>
        <p class="mt-3 text-[var(--text-color-light)] dark:text-gray-300">{{ t('home.job') }}</p>
        <a
          href="#contact"
          class="inline-block mt-6 bg-[var(--secondary-color-light)] dark:bg-[var(--secondary-color-dark)] text-white dark:text-[var(--primary-color-dark)] px-5 py-2 rounded-md font-medium hover:bg-[#22c55e] transition"
        >
          {{ t('home.contact') }}
        </a>
      </div>

      <!-- Imagen -->
      <div class="flex justify-center md:justify-end">
        <FigureHome1 />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FigureHome1 from './figures/FigureHome1.vue';
const { t } = useI18n()
</script>
