import { ref, onMounted, onUnmounted } from "vue";

const isDark = ref(false);

export function useDarkMode() {
  onMounted(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      isDark.value = true;
    }

    document.documentElement.classList.toggle("dark", isDark.value);
  });

 function toggleDarkMode() {
    isDark.value = !isDark.value;
    document.documentElement.classList.toggle("dark", isDark.value);
    localStorage.setItem("theme", isDark.value ? "dark" : "light");
  }

  return { isDark, toggleDarkMode };
}
