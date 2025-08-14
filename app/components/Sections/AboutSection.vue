<template>
  <section
    class="text-[var(--text-color-light)] dark:text-[var(--text-color-dark)] py-10 md:py-18 space-y-20 md:space-y-40"
  >
    <div
      class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      <!-- Imagen -->
      <div class="flex justify-center md:justify-end order-2 md:order-1">
        <FigureAbout1 />
      </div>

      <!-- Texto -->
      <div class="order-1 md:order-2">
        <h2
          class="text-4xl text-center md:text-5xl font-bold dark:font-extralight mb-10"
        >
          {{ t("about.title") }}
        </h2>
        <p
          class="mt-3 text-[var(--text-color-light)] dark:text-gray-300 text-lg font-semibold dark:font-thin text-center"
        >
          {{ t("about.paragraph-1") }}
          <br />
          <br />
          {{ t("about.paragraph-2") }}<span class="text-2xl">😁</span>
          <br />
          <br />
          {{ t("about.paragraph-3") }}
        </p>
      </div>
    </div>
    <!-- skills -->
    <div class="max-w-6xl mx-auto">
      <h1
        class="text-4xl text-center md:text-5xl font-bold dark:font-extralight mb-20 md:mb-26"
      >
        {{ t("skills.title") }}
      </h1>
      <div
  class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8"
>
  <div
    v-for="skill in skills"
    :key="skill.tecnology"
    class="flex flex-col items-center"
  >
    <UTooltip :text="skill.tecnology" :delayDuration="100">
      <UIcon
        :name="skill.icon"
        class="h-10 w-10 md:h-15 md:w-15 floating drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]"
      />
    </UTooltip>
  </div>
</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FigureAbout1 from "./figures/FigureAbout1.vue";
const { t } = useI18n();

const skills = ref([
  {
    icon: "i-tabler-brand-html5",
    tecnology: "HTML",
  },
  {
    icon: "i-tabler-brand-css3",
    tecnology: "CSS",
  },
  {
    icon: "i-mdi-language-javascript",
    tecnology: "Javascript",
  },
  {
    icon: "i-mdi-language-typescript",
    tecnology: "Typescript",
  },
  {
    icon: "i-mdi-vuejs",
    tecnology: "Vue",
  },
  {
    icon: "i-ri-reactjs-fill",
    tecnology: "React",
  },
  {
    icon: "i-mdi-nuxt",
    tecnology: "Nuxt",
  },
  {
    icon: "i-mdi-nodejs",
    tecnology: "Nodejs",
  },
  {
    icon: "i-mdi-jquery",
    tecnology: "Jquery",
  },
  {
    icon: "i-mdi-bootstrap",
    tecnology: "Bootstrap",
  },
  {
    icon: "i-mdi-tailwind",
    tecnology: "Tailwind",
  },
  {
    icon: "i-mdi-git",
    tecnology: "Git",
  },
  {
    icon: "i-mdi-github",
    tecnology: "Github",
  },
  {
    icon: "i-solar-figma-bold-duotone",
    tecnology: "Figma",
  },
  {
    icon: "i-tabler-brand-vite",
    tecnology: "Vite",
  },
  {
    icon: "i-mdi-laravel",
    tecnology: "Laravel",
  },
  {
    icon: "i-mdi-language-php",
    tecnology: "PHP",
  },
  {
    icon: "i-tabler-brand-mysql",
    tecnology: "MySQL",
  },
]);
</script>


<style scoped>
@keyframes floating {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0px); }
}

.floating {
  animation: floating 3s ease-in-out infinite;
}
</style>