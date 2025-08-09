<template>
  <section
    class="text-[var(--text-color-light)] dark:text-[var(--text-color-dark)] py-6 md:py-10"
  >
    <div
      class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      <!-- Imagen -->
      <div class="flex justify-center md:justify-end">
        <FigureAbout1 />
      </div>

      <!-- Texto -->
      <div>
        <h2 class="text-4xl text-center md:text-5xl font-bold mb-8">Sobre mi</h2>
        <p class="mt-3 text-[var(--text-color-light)] dark:text-gray-300 font-semibold text-center">
          Soy una persona curiosa a la que le gusta entender cómo funcionan las cosas y construir soluciones con código.
          <br>
          <br>
          Me interesa todo lo
          relacionado con el desarrollo web, y disfruto aprender nuevas
          herramientas mientras trabajo en ideas que me emocionan.
          <br>
          <br>
          No busco ser perfecto, solo mejorar un poco cada día...<span class="text-2xl">😁</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FigureAbout1 from "./figures/FigureAbout1.vue";
const { t } = useI18n();
</script>
