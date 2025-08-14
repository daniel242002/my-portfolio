<template>
  <USlideover :title="t('cv.title')" :class="'example'">
    <UButton
      color="neutral"
      variant="link"
      class="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition z-50 slow-bounce cursor-pointer"
    >
      <UIcon name="i-heroicons-document-text-solid" class="h-6 w-6" />
    </UButton>

    <template #body>
      <!-- Contenido -->
      <div class="flex-1 overflow-y-auto p-4">
        <NuxtImg
          src="/cv.png"
          alt="CV de Daniel Arcos"
          class="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <!-- Botón Descargar -->
      <div class="p-4 border-t border-gray-200 dark:border-gray-700">
        <a
          href="/Daniel-Arcos-CV.pdf"
          download
          class="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md transition"
        >
          <UIcon name="i-heroicons-arrow-down-tray-solid" class="h-6 w-6" />
        </a>
      </div>
    </template>
  </USlideover>
</template>

<script setup>
const { t } = useI18n();
</script>
<style scoped>
@keyframes slow-bounce {
  0%,
  100% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.slow-bounce {
  animation: slow-bounce 2.5s infinite; /* Cambia 2.5s por lo que quieras */
}

.slow-bounce:hover {
  animation-play-state: paused;
}
</style>
