<template>
  <div
    class="text-[var(--text-color-light)] dark:text-[var(--text-color-dark)] py-10 md:py-14"
  >
    <h2
      class="text-4xl text-center md:text-5xl font-bold dark:font-extralight mb-10 md:mb-14"
    >
      {{ t("projects.title") }}
    </h2>
    <UCarousel
      v-slot="{ item }"
      fade
      arrows
      dots
      :items="projects"
      class="w-full max-w-sm md:max-w-xl lg:max-w-2xl mx-auto shadow-2xl rounded-lg"
    >
      <div
        class="flex flex-col items-center gap-4 rounded-lg pb-5 md:p-5 border border-gray-200 dark:border-gray-700 bg-[var(--primary-color-light)] dark:bg-slate-800"
      >
        <!-- Imagen -->
        <div
          class="relative h-[200px] md:h-[300px] w-full overflow-hidden rounded-t-lg md:rounded-lg border-1 border-gray-300 dark:border-gray-700"
        >
          <NuxtImg
            :src="item.img"
            :alt="item.name"
            loading="lazy"
            class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />

          <!-- Overlay No disponible -->
          <div
            v-if="!item.available"
            class="absolute inset-0 flex items-center justify-center bg-gray-800/70 text-white font-bold text-2xl rounded-t-lg md:rounded-lg"
          >
            {{ t("projects.notice-label") }}
          </div>
        </div>

        <!-- Título -->
        <h3
          class="text-2xl font-semibold dark:font-extralight text-center mt-10 sm:mt-0 px-14"
        >
          {{ item.name }}
        </h3>

        <!-- Descripción -->
        <p class="text-center font-normal dark:font-thin text-lg px-4">
          {{ item.description }}
        </p>

        <!-- Botón -->
        <UButton
          aria-label="Visit project"
          role="button"
          @click="visit(item.url)"
          :disabled="!item.available"
          :color="item.available ? 'success' : 'neutral'"
          class="mt-2 w-3/4 font-semibold dark:font-thin cursor-pointer text-lg"
          size="lg"
          block
        >
          {{ t("projects.text-btn") }}
        </UButton>
      </div>
    </UCarousel>
  </div>
</template>

<script setup>
import { computed } from "vue";
const { t } = useI18n();

const projects = computed(() => [
  {
    name: t("projects.sport-partners.name"),
    description: t("projects.sport-partners.description"),
    url: "https://sport-partners.infinityfreeapp.com/",
    img: "/projects/sport-partners.webp",
    available: true,
  },
  {
    name: t("projects.saas-system.name"),
    description: t("projects.saas-system.description"),
    url: "https://example.com/project2",
    img: "/projects/saas.webp",
    available: false,
  },
  {
    name: t("projects.pastry-shop.name"),
    description: t("projects.pastry-shop.description"),
    url: "https://example.com/project3",
    img: "/projects/pastry-shop.webp",
    available: false,
  },
]);

const visit = (url) => {
  window.open(url, "_blank");
};
</script>
