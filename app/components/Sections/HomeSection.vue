<template>
  <section
    class="text-[var(--text-color-light)] dark:text-[var(--text-color-dark)] py-8 md:py-18"
  >
    <div
      class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      <!-- Texto -->
      <div>
        <h1
          class="text-4xl md:text-5xl dark:md:text-[2.75rem] font-extrabold dark:font-extralight"
        >
          {{ t("home.greeting") }}
          <span
            class="text-[var(--secondary-color-light)] dark:text-[var(--secondary-color-dark)]"
            >Daniel Arcos.</span
          >
        </h1>
        <p
          class="mt-3 text-[var(--text-color-light)] dark:text-gray-300 text-2xl lg:text-3xl font-bold dark:font-thin"
          id="typedElement"
        ></p>
        <a
          href="#contact"
          class="inline-block mt-6 bg-[var(--secondary-color-light)] dark:bg-[var(--secondary-color-dark)] text-white dark:text-[var(--primary-color-dark)] px-5 py-2 rounded-md font-medium hover:bg-[#22c55e] transition"
        >
          {{ t("home.contact") }}
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
import { useTypedAnimation } from "@/utils/typed";
import FigureHome1 from "./figures/FigureHome1.vue";
const { t, locale } = useI18n();

const typedElements = computed(() => {
  return [
    t("home.typedDescription-1"),
    t("home.typedDescription-2"),
    t("home.typedDescription-3"),
  ];
});

const { initializeTypeIt }: any = useTypedAnimation();

watch(locale, () => {
  initializeTypeIt(typedElements.value);
});

onMounted(() => {
  initializeTypeIt(typedElements.value);
});
</script>
