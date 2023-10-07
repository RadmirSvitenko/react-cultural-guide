import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        toGo: "2Go",
        aboutUs: "About Us",
        contacts: "Contacts",
        search: "Search events...",
      },
    },

    ru: {
      translation: {
        toGo: "Отправиться",
        aboutUs: "О нас",
        contacts: "Контакты",
        search: "Найти события...",
      },
    },
  },

  lng: "en",
  fallbackLng: "en",
});

export default i18n;

// i18n.use(initReactI18next).init({
//   lng: "ru",
//   resources: {
//     en: {
//       translation: {
//         toGo: "2Go",
//         aboutUs: "About Us",
//         contacts: "Contacts",
//         search: "Search events...",
//       },
//     },
//     ru: {
//       translation: {
//         toGo: "Отправиться",
//         aboutUs: "О нас",
//         contacts: "Контакты",
//         search: "Найти события...",
//       },
//     },
//   },
// });

// export default i18n;
