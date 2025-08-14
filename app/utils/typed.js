import { useI18n } from "vue-i18n";
import TypeIt from "typeit";

export function useTypedAnimation() {
  let { t } = useI18n();
  let typeItInstance = null;

  const initializeTypeIt = (typedArrays) => {
    // Destroy existing instance if it exists
    if (typeItInstance) {
      typeItInstance.destroy();
    }

    const el = document.querySelector("#typedElement");
    if (el) el.textContent = "";

    typeItInstance = new TypeIt("#typedElement", {
      strings: typedArrays,
      speed: 100,
      breakLines: false,
      loop: true,
      startDelay: 300,
      nextStringDelay: 1000,
    });

    typeItInstance.go();
  };

  return {
    typeItInstance,
    initializeTypeIt,
  };
}
