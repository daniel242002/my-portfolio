<template>
  <Disclosure as="nav" class="relative" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
            <XMarkIcon v-else class="block size-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex flex-1 items-center justify-end md:items-stretch md:justify-start"
        >
          <div class="flex shrink-0 items-center">
            <UIcon name="i-devicon-plain-chakraui" class="h-10 w-10 px-8" />
          </div>
          <div class="hidden md:ml-6 md:block">
            <div class="flex space-x-3">
              <a
                v-for="item in navBarItems"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current
                    ? 'bg-gray-200 dark:bg-gray-800 text-[var(--secondary-color-light)] dark:text-[var(--secondary-color-dark)] border-b border-[var(--secondary-color-light)] dark:border-[var(--secondary-color-dark)] rounded-b-none'
                    : 'text-[var(--text-color-light)] dark:text-gray-300 hover:bg-white/5 hover:text-white',
                  'flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium',
                ]"
                :aria-current="item.current ? 'page' : undefined"
              >
                <UIcon :name="item.icon" class="h-4 w-4" />
                <span>{{ $t(`navbar.${item.name}`) }}</span>
              </a>
            </div>
          </div>
        </div>

        <!-- translate, dark mode, github -->
        <div
          class="hidden md:flex absolute inset-y-0 right-0 items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0 gap-3"
        >
          <USelect
            :items="locales.map((l:any) => ({ label: l.name === 'English' ? 'EN' : 'ES', value: l.code }))"
            v-model="value"
            class="w-auto font-semibold border-0 bg-transparent"
          />
          <ClientOnly v-if="!colorMode?.forced">
            <UButton
              class="cursor-pointer dark:text-[var(--text-color-dark)] text-[var(--text-color-light)] hover:bg-transparent"
              :icon="isDark ? 'i-lucide-sun' : 'i-lucide-moon'"
              variant="ghost"
              @click="isDark = !isDark"
            />

            <template #fallback>
              <div class="size-8" />
            </template>
          </ClientOnly>
          
          <a
            class="hover:text-white flex items-center"
            href="https://github.com/daniel242002"
            target="_blank"
          >
            <UIcon name="i-grommet-icons-github" class="h-6 w-6" />
          </a>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <DisclosureButton
          v-for="item in navBarItems"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-white/5 hover:text-white',
            'flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
        >
          <UIcon :name="item.icon" class="h-5 w-5" />
          <span>{{ item.name }}</span>
        </DisclosureButton>
      </DisclosurePanel>
    </div>
  </Disclosure>
</template>
<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { onMounted, ref } from "vue";
const currentHash = ref("");

// traducción
const { locales, setLocale, locale }: any = useI18n();
const value = ref(locale.value);

watchEffect(() => {
  setLocale(value.value);
});

// Modo oscuro
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(_isDark) {
    colorMode.preference = _isDark ? "dark" : "light";
  },
});

// Items de navegación
const navBarItems = ref([
  {
    name: "home",
    href: "#home",
    current: false,
    icon: "i-lucide-home",
  },
  {
    name: "about",
    href: "#about",
    current: false,
    icon: "i-lucide-user",
  },
  {
    name: "skills",
    href: "#skills",
    current: false,
    icon: "i-lucide-award",
  },
  {
    name: "projects",
    href: "#projects",
    current: false,
    icon: "i-lucide-code",
  },
  {
    name: "cv",
    href: "#cv",
    current: false,
    icon: "i-lucide-file-text",
  },
  {
    name: "contact",
    href: "#contact",
    current: false,
    icon: "i-lucide-phone",
  },
]);

// Función para actualizar el "current" según el hash
const updateCurrentFromHash = (hash: any) => {
  currentHash.value = hash || "#home";
  navBarItems.value.forEach((item) => {
    item.current = item.href === currentHash.value;
  });
};

// Función para detectar la sección visible
const detectSectionInView = () => {
  let found = false;
  for (const item of navBarItems.value) {
    const section = document.querySelector(item.href);
    if (section) {
      const rect = section.getBoundingClientRect();
      const visible =
        rect.top <= window.innerHeight / 3 &&
        rect.bottom >= window.innerHeight / 3;
      if (visible) {
        if (currentHash.value !== item.href) {
          updateCurrentFromHash(item.href);
          history.replaceState(null, "", item.href);
        }
        found = true;
        break;
      }
    }
  }
  // Si no se encuentra ninguna sección visible, quedarse con la última
  if (!found) {
    const last = navBarItems.value[navBarItems.value.length - 1];
    updateCurrentFromHash(last?.href);
  }
};

onMounted(() => {
  if (typeof window !== "undefined") {
    updateCurrentFromHash(window.location.hash);

    // Evento hashchange (por si el usuario navega desde la URL directamente)
    window.addEventListener("hashchange", () => {
      updateCurrentFromHash(window.location.hash);
    });

    // Evento scroll optimizado
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          detectSectionInView();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    detectSectionInView();

    // Limpiar listeners al desmontar
    onBeforeUnmount(() => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", updateCurrentFromHash);
    });
  }
});
</script>
