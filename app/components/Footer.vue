<template>
  <footer class="text-center text-xs text-gray-500 px-4 py-10 flex flex-col items-center gap-10">
    <!-- nombre -->
    <p class="font-semibold text-4xl text-[#61FF8B]">Daniel Arcos</p>
    <!-- redes sociales -->
    <div class="flex gap-7">
      <a class="hover:text-white" href="https://github.com/arcosdaniel">
        <UIcon name="i-grommet-icons-github" class="h-6 w-6" />
      </a>
      <a class="hover:text-white" href="https://twitter.com/arcosdaniel">
        <UIcon name="i-grommet-icons-facebook" class="h-6 w-6" />
      </a>
      <a class="hover:text-white" href="https://www.linkedin.com/in/arcosdaniel/">
        <UIcon name="i-grommet-icons-linkedin" class="h-6 w-6" />
      </a>
      <a class="hover:text-white" href="https://www.instagram.com/arcosdaniel/">
        <UIcon name="i-grommet-icons-instagram" class="h-6 w-6" />
      </a>
    </div>
    <p>&copy; {{ new Date().getFullYear() }} Daniel Arcos. Todos los derechos reservados</p>
  </footer>
</template>

<script setup lang="ts">
</script>