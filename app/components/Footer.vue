<template>
  <footer
    class="text-center text-xs text-gray-500 px-4 py-10 flex flex-col items-center gap-10"
  >
    <!-- nombre -->
    <p class="font-semibold text-4xl text-[var(--secondary-color-dark)]">
      Daniel Arcos
    </p>
    <!-- redes sociales -->
    <div class="flex gap-7">
      <a
        class="hover:text-[var(--secondary-color-dark)] dark:hover:text-white"
        href="https://github.com/daniel242002"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UIcon name="i-grommet-icons-github" class="h-6 w-6" />
      </a>
      <a
        class="hover:text-[var(--secondary-color-dark)] dark:hover:text-white"
        href="https://facebook.com/danielesteban.arcoscorrea"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UIcon name="i-grommet-icons-facebook" class="h-6 w-6" />
      </a>
      <a
        class="hover:text-[var(--secondary-color-dark)] dark:hover:text-white"
        href="https://linkedin.com/in/daniel-arcos-469bb61ab"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UIcon name="i-grommet-icons-linkedin" class="h-6 w-6" />
      </a>
      <a
        class="hover:text-[var(--secondary-color-dark)] dark:hover:text-white"
        href="https://instagram.com/daniel_arcos24"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UIcon name="i-grommet-icons-instagram" class="h-6 w-6" />
      </a>
    </div>
    <p class="font-extrabold dark:font-thin">
      &copy; {{ new Date().getFullYear() }} Daniel Arcos.
      {{ t("footer.copyright") }}
    </p>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>
