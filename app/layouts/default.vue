<template>
  <UApp :locale="es">
    <NavBar
      :class="[
        'sticky transition-all duration-300 ease-in-out top-0 z-50',
        isScrolled
          ? 'bg-[var(--navbar-bg-light)] dark:bg-[var(--navbar-bg-dark)] py-1 backdrop-blur'
          : 'bg-transparent py-3',
      ]"
    />
    <UContainer>
      <NuxtPage />
    </UContainer>
    <Footer />
  </UApp>
</template>

<script setup>
import { es } from "@nuxt/ui/locale";
import { ref, onMounted, onUnmounted } from "vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

const isScrolled = ref(true);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  isScrolled.value = false;
  window.removeEventListener("scroll", handleScroll);
});
</script>
