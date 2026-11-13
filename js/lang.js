/**
 * @fileoverview Manage language to display and insert textContent refering to ./lang/<lang>.json
 */

// Apply default language on loaded
document.addEventListener("DOMContentLoaded", async () => await applyLang());

const DEFAULT_LANG = "ja";
const AVAILABLE_LANGS = ["ja", "en"];

/**
 * Load translations and set HTML documents to the specified laungage.
 */
export async function applyLang() {
  const lang = getLangFromParam();
  const translations = await loadTranslations(`./lang/${lang}.json`);
  const defaultTranslations = await loadTranslations(
    `./lang/${DEFAULT_LANG}.json`,
  );

  // configure HTML language
  // e.g. <html lang="ja"> => <html lang="en">
  document.documentElement.lang = lang;

  // Apply translations to each elements.
  const elements = document.querySelectorAll("[data-lang-key]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-lang-key");
    const text = getTranslation(translations, key);
    const defaultText = getTranslation(defaultTranslations, key);

    if (text !== undefined) {
      element.textContent = text;
    } else if (defaultText !== undefined) {
      element.textContent = defaultText;
      console.debug(`The '${lang}' translations has no value for '${key}'`);
    } else {
      console.error(
        `The default translations '${lang}' has no value for '${key}'`,
      );
    }
  });

  // Apply translation directly
  AVAILABLE_LANGS.forEach((l) => {
    if (lang === l) {
      translateDirectly(l);
    }
  });
}

/**
 * Load translation file and make it the object.
 * @param {string} filename The lang file loaction
 * @returns The translation mapping
 */
async function loadTranslations(filename) {
  const response = await fetch(filename);

  if (!response.ok) {
    throw new Error(`Failed to load translations from ${filename}`);
  }

  return await response.json();
}

/**
 * Get lang from current url param
 * @param {string} defaultLang Default lang like 'ja' or 'en'
 * @returns The lang selector like 'ja' or 'en'
 */
function getLangFromParam(defaultLang = DEFAULT_LANG) {
  const param = new URLSearchParams(window.location.search);
  const inputLang = param.get("lang");
  return AVAILABLE_LANGS.includes(inputLang) ? inputLang : defaultLang;
}

/**
 * Get translation key by structured key.
 * @param {object} translations The translation mapping
 * @param {string} key The translation key
 * @returns The translation
 * @example
 * ```js
 * getTranslation('people')  //=> 'People'
 * getTranslation('people-page.title')  //=> 'People | TeamSOBITS'
 * ```
 */
function getTranslation(translations, key) {
  const parts = key.split(".");

  return parts.reduce((currentObj, key) => {
    if (currentObj && currentObj[key] !== undefined) {
      return currentObj[key];
    }
    return undefined;
  }, translations);
}

/**
 * Translate directly with the key: data-lang-<lang>.
 * @param {string} lang The lang selector like en or ja
 */
function translateDirectly(lang) {
  const directKey = `data-lang-${lang}`;
  const elements = document.querySelectorAll(`[${directKey}]`);
  elements.forEach((element) => {
    const text = element.getAttribute(directKey);

    if (text) {
      element.textContent = text;
    }
  });
}
