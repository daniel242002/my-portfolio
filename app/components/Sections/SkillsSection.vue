<template>
  <section
    class="text-[var(--text-color-light)] dark:text-[var(--text-color-dark)] py-6 md:py-10"
  >
    <!-- skills -->
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl text-center md:text-5xl font-bold mb-18">Habilidades</h1>
      <div class="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
        <div class="flex flex-col items-center">
          <UIcon name="i-devicon-plain-html5" class="h-10 w-10" />
          <span class="font-semibold">HTML</span>
        </div>
        <div class="flex flex-col items-center">
          <UIcon name="i-devicon-plain-css3" class="h-10 w-10" />
          <span class="font-semibold">CSS</span>
        </div>
        <div class="flex flex-col items-center">
          <UIcon name="i-devicon-plain-javascript" class="h-10 w-10" />
          <span class="font-semibold">Javascript</span>
        </div>
        <div class="flex flex-col items-center">
          <UIcon name="i-devicon-plain-typescript" class="h-10 w-10" />
          <span class="font-semibold">Typescript</span>
        </div>
        <div class="flex flex-col items-center">
          <UIcon name="i-devicon-plain-vuejs" class="h-10 w-10" />
          <span class="font-semibold">Vue</span>
        </div>
        <div class="flex flex-col items-center">
          <UIcon name="i-devicon-plain-nuxtjs" class="h-10 w-10" />
          <span class="font-semibold">Nuxt</span>
        </div>
        <div class="flex flex-col items-center">
          <UIcon name="i-devicon-plain-tailwindcss" class="h-10 w-10" />
          <span class="font-semibold">Tailwind</span>
        </div>
        <div class="flex flex-col items-center">
          <UIcon name="i-devicon-plain-git" class="h-10 w-10" />
          <span class="font-semibold">Git</span>
        </div>
        <div class="flex flex-col items-center">
          <UIcon name="i-devicon-plain-github" class="h-10 w-10" />
          <span class="font-semibold">Github</span>
        </div>
        <div class="flex flex-col items-center">
          <UIcon name="i-devicon-plain-figma" class="h-10 w-10" />
          <span class="font-semibold">Figma</span>
        </div>
        <div class="flex flex-col items-center">
          <UIcon name="i-devicon-plain-visualstudio" class="h-10 w-10" />
          <span class="font-semibold">VSCode</span>
        </div>
        <div class="flex flex-col items-center">
          <UIcon name="i-devicon-plain-vitejs" class="h-10 w-10" />
          <span class="font-semibold">Vite</span>
        </div>
        <div class="flex flex-col items-center">
          <UIcon name="i-devicon-plain-laravel" class="h-10 w-10" />
          <span class="font-semibold">Laravel</span>
        </div>
        <div class="flex flex-col items-center">
          <UIcon name="i-devicon-plain-php" class="h-10 w-10" />
          <span class="font-semibold">PHP</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FigureAbout1 from "./figures/FigureAbout1.vue";
const { t } = useI18n();
</script>
