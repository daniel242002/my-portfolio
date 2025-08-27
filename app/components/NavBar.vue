<template>
  <Disclosure as="nav" class="relative" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            aria-label="Open main menu"
            role="button"
            class="relative inline-flex items-center justify-center rounded-md p-2 text-[var(--text-color-light)] dark:text-gray-300 hover:bg-white/5 hover:text-gray-400 focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
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
            <!-- translate, dark mode, github -->
            <div
              class="flex md:hidden absolute inset-y-0 right-0 items-center mr-18 md:static md:inset-auto md:ml-6 md:mr-0 gap-3"
            >
              <USelect
                :items="locales.map((l:any) => ({ label: l.name === 'English' ? 'EN' : 'ES', value: l.code }))"
                aria-label="Select language"
                v-model="value"
                class="w-auto font-semibold dark:font-thin border-0 bg-transparent"
              />
              <ClientOnly v-if="!colorMode?.forced">
                <UButton
                  aria-label="Toggle dark mode"
                  role="button"
                  class="cursor-pointer dark:text-[var(--text-color-dark)] text-[var(--text-color-light)] hover:bg-transparent"
                  :icon="
                    colorMode.value === 'dark'
                      ? 'i-lucide-sun'
                      : 'i-lucide-moon'
                  "
                  variant="ghost"
                  @click="handleNavbarItemClick()"
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
            <div
              class="flex shrink-0 items-center text-[var(--text-color-light)] dark:text-gray-300 w-14 md:w-20"
            >
              <NuxtLink to="#home">
                <Mylogo />
              </NuxtLink>
            </div>
          </div>
          <div class="hidden md:ml-4 md:flex flex-col md:justify-center">
            <div class="flex space-x-3">
              <a
                v-for="item in navBarItems"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current
                    ? 'bg-white dark:bg-gray-800 text-[var(--secondary-color-light)] dark:text-[var(--secondary-color-dark)] border-b border-[var(--secondary-color-light)] dark:border-[var(--secondary-color-dark)] rounded-b-none'
                    : 'text-[var(--text-color-light)] dark:text-gray-300 hover:bg-white/55 dark:hover:bg-white/5 dark:hover:text-gray-300',
                  'flex items-center gap-2 rounded-md px-3 py-2 text-md dark:text-sm font-semibold dark:font-[10]',
                ]"
                :aria-current="item.current ? 'page' : undefined"
              >
                <UIcon
                  :name="item.icon"
                  class="h-4 w-4"
                  aria-label="go to github profile"
                />
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
            aria-label="Select language"
            class="w-auto font-semibold dark:font-thin border-0 bg-transparent"
          />
          <ClientOnly v-if="!colorMode?.forced">
            <UButton
              aria-label="Toggle dark mode"
              role="button"
              class="cursor-pointer dark:text-[var(--text-color-dark)] text-[var(--text-color-light)] hover:bg-transparent"
              :icon="
                colorMode.value === 'dark' ? 'i-lucide-sun' : 'i-lucide-moon'
              "
              variant="ghost"
              @click="handleNavbarItemClick()"
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
          aria-label="Close main menu"
          role="button"
          v-for="item in navBarItems"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-[var(--text-color-light)] dark:text-gray-300 hover:bg-white/5 hover:text-white',
            'flex items-center gap-2 rounded-md px-3 py-3 text-base font-medium',
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
import { NuxtLink } from "#components";
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
const handleNavbarItemClick = () => {
  if (!document.startViewTransition) {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  } else {
    document.startViewTransition(() => {
      colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
    });
  }
};

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
    name: "projects",
    href: "#projects",
    current: false,
    icon: "i-lucide-code",
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
<style>
.globaltransition {
  animation: perspectiveLeftReturn ease 1.5s;
}

@-webkit-keyframes perspectiveLeftReturn {
  0% {
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: perspective(800px) rotateY(-180deg);
    transform: perspective(800px) rotateY(-180deg);
  }

  100% {
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: perspective(800px) rotateY(0deg);
    transform: perspective(800px) rotateY(0deg);
  }
}

@keyframes perspectiveLeftReturn {
  0% {
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: perspective(800px) rotateY(-180deg);
    transform: perspective(800px) rotateY(-180deg);
  }

  100% {
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: perspective(800px) rotateY(0deg);
    transform: perspective(800px) rotateY(0deg);
  }
}
</style>
