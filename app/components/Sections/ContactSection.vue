<template>
  <div
    class="text-[var(--text-color-light)] dark:text-[var(--text-color-dark)] py-10 md:py-14"
  >
    <UAlert
      v-if="alertMessage"
      color="neutral"
      variant="solid"
      :title="alertTitle"
      :description="alertDescription"
      icon="i-lucide-check-circle"
      class="fixed top-4 right-4 z-50 w-80 shadow-lg rounded-lg"
      :class="isLeaving ? 'animate-slideOut' : 'animate-slideIn'"
    />
    <h2
      class="text-4xl text-center md:text-5xl font-bold dark:font-extralight mb-10 md:mb-14"
    >
      {{ t("contact.title") }}
    </h2>
    <div
      class="max-w-3xl mx-auto rounded-lg bg-[var(--primary-color-light)] dark:bg-slate-800 border border-gray-200 dark:border-gray-700"
    >
      <form
        class="space-y-4 px-4 py-8 sm:px-8 sm:py-10 lg:px-16 lg:py-12 shadow-2xl"
        @submit.prevent="sendEmail"
      >
        <input
          type="text"
          :placeholder="t('contact.label-name')"
          v-model="templateParams.name"
          class="w-full rounded-md px-3 py-2 bg-slate-100 border border-gray-200 dark:border-0 dark:bg-slate-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 font-medium dark:font-thin text-[var(--text-color-light)]"
        />

        <input
          type="email"
          v-model="templateParams.email"
          :placeholder="t('contact.label-email')"
          class="w-full rounded-md px-3 py-2 bg-slate-100 border border-gray-200 dark:border-0 dark:bg-slate-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 font-medium dark:font-thin text-[var(--text-color-light)]"
        />
        
        <textarea
          v-model="templateParams.message"
          :placeholder="t('contact.label-message')"
          rows="4"
          class="w-full rounded-md px-3 py-2 bg-slate-100 dark:bg-slate-100 border border-gray-200 dark:border-0 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 font-medium dark:font-thin text-[var(--text-color-light)]"
        ></textarea>

        <button
          type="submit"
          class="w-full bg-green-600 hover:bg-green-700 text-white font-medium dark:font-thin py-2 rounded-md transition cursor-pointer"
        >
          {{ t("contact.btn-send") }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n();
import emailjs from "@emailjs/browser";
import { set } from "@nuxt/ui/runtime/utils/index.js";
const config = useRuntimeConfig();
const alertMessage = ref(false);
const isLeaving = ref(false);
const alertTitle = ref("");
const alertDescription = ref("");
const templateParams = ref({
  name: "",
  email: "",
  message: "",
});

const sendEmail = async () => {
  try {
    const res = await emailjs.send(
      config.public.emailjsServiceId,
      config.public.emailjsTemplateId,
      templateParams.value,
      {
        publicKey: config.public.emailjsPublicKey,
      }
    );
    if (res.status === 200) {
      alertTitle.value = t("alertMessage.success.title");
      alertDescription.value = t("alertMessage.success.description");
      isLeaving.value = false;
      alertMessage.value = true;

      setTimeout(() => {
        isLeaving.value = true;

        setTimeout(() => {
          alertMessage.value = false;
        }, 400);
      }, 3000);
    }
    templateParams.value = { title: "", name: "", email: "", message: "" };
  } catch (error) {
    alertTitle.value = t("alertMessage.error.title");
    alertDescription.value = t("alertMessage.error.description");
    isLeaving.value = false;
    alertMessage.value = true;

    setTimeout(() => {
      isLeaving.value = true;

      setTimeout(() => {
        alertMessage.value = false;
      }, 400);
    }, 3000);

    templateParams.value = { title: "", name: "", email: "", message: "" };
  }
};
</script>
<style scoped>
@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slideIn {
  animation: slideIn 0.4s ease-out;
}

@keyframes slideOut {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(100%);
  }
}

.animate-slideOut {
  animation: slideOut 0.4s ease-in forwards;
}
</style>
