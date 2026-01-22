// src/i18n/i18n.ts
"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/common.json";
import th from "./locales/th/common.json";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { common: en },
      th: { common: th },
    },
    lng: "th",
    fallbackLng: "en",
    ns: ["common"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false, // สำคัญมากกับ Next.js
    },
  });
}

export default i18n;
