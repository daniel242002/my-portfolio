<template>
  <div>
    <!-- Pantalla de inicio -->
    <transition name="fade">
      <div v-if="loader" class="loader-screen">
        <UIcon name="i-svg-spinners-bars-rotate-fade" class="h-14 w-14" />
      </div>
    </transition>

    <!-- Contenido principal -->
    <NuxtLayout v-show="!loader" />
  </div>
</template>

<script setup>
import { onNuxtReady } from '#app';
const loader = useLoader();

onNuxtReady(() => {
  loader.value = false
})

</script>
<style scoped>
.loader-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff; /* Color de fondo */
  color: var(--text-color-light);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.dark .loader-screen {
  background-color: var(--primary-color-dark);
  color: var(--text-color-dark);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
